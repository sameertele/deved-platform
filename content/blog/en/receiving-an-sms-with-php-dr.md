---
title: Receiving an SMS with PHP
description: Go from zero to being able to receive inbound SMS messages in your
  PHP application—in just 20 lines of code—with the Vonage SMS API.
thumbnail: /content/blog/receiving-an-sms-with-php-dr/inbound-sms-messages.png
author: mheap
published: true
published_at: 2018-06-19T09:20:00.000Z
updated_at: 2020-11-03T10:20:57.522Z
category: tutorial
tags:
  - php
  - sms-api
comments: true
redirect: ""
canonical: ""
---
We've previously covered [sending an SMS with PHP](/blog/2017/09/20/sending-sms-messages-with-php-dr/), but that's only half of the conversation. In this post we're going to look at allowing people to send you an SMS.

The source code for this blog post is available [on Github](https://github.com/nexmo-community/nexmo-php-quickstart/blob/master/sms/receive-with-slim/).

## Prerequisites

To work through this post, you'll need a [Nexmo account](https://dashboard.nexmo.com/sign-up). Sign up now if you don't already have an account. Receiving an SMS is free with Nexmo, but you will need to rent a phone number that people can send messages to.

You’ll need PHP installed before working through this post. I’m running PHP 7.2, but the code here should work on PHP 5.6 and above. You'll also need [Composer](http://getcomposer.org/) to download our dependencies.

Finally, you'll need the [Nexmo CLI](https://github.com/Nexmo/nexmo-cli) installed. We'll use it to purchase a phone number and configure our Nexmo account to point at our new application.

## Receiving an SMS with PHP

When Nexmo receives an SMS for a phone number that you own, they make a HTTP request to a URL that you've configured containing all of the information about the SMS. (Don't worry about configuring this URL yet, we'll get to it a little later on)

To receive the incoming SMS content, we're going to be using the [Slim framework](https://www.slimframework.com/) Let's install it now with `composer`:

```bash
composer require slim/slim "^3.0"
```

When we receive an SMS, we're going to log out all of the information that Nexmo provide to the console. In the real world, you could store this in a file or a database.

Nexmo will make either a `GET` or a `POST` request to your application with the data, depending on how your account is configured (you can see this under `HTTP Method` [in the dashboard](https://dashboard.nexmo.com/settings)). In this post, we'll write an application that can handle both HTTP methods:

Create a file named `index.php` with the following contents. We bootstrap our `Slim` app, define a handler that returns a HTTP `204` response and then instruct Slim to use this handler whenever we receive a `GET` or a `POST` to `/webhook/inbound-sms`:

```php
<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require 'vendor/autoload.php';

$app = new \Slim\App;

$handler = function (Request $request, Response $response) {
    return $response->withStatus(204);
};

$app->get('/webhook/inbound-sms', $handler);
$app->post('/webhook/inbound-sms', $handler);
$app->run();
```

With this code all we're doing is returning with a `204` response code, which says that everything is OK. To log the parameters we received we need to check if there is any data returned by `$request->getParsedBody()`. If so, this is a POST request and we can carry on. If not, we call `$request->getQueryParams()` to read the `GET` parameters.

At this point, all of the parameters are stored in a variable named `$params` and we can output them to the terminal using 
`error_log(print_r($params, true));`. Putting that all together, your `$hander` should look like the following:

```php
$handler = function (Request $request, Response $response) {
    $params = $request->getParsedBody();
    // Fall back to query parameters if needed
    if (!count($params)){
        $params = $request->getQueryParams();
    }
    error_log(print_r($params, true));
    return $response->withStatus(204);
};
```

Save this file and then open up a new terminal window. Let's start the built in PHP server and serve our application on port 8000.

```php
php -t . -S localhost:8000
```

If you visit [http://localhost:8000/webhook/inbound-sms?from=14155550100&text=Hello+World](http://localhost:8000/webhook/inbound-sms?from=14155550100&text=Hello+World), you should see `from` and `text` in the same terminal that you started the PHP server in.

That's really all there is to it. Receiving an SMS with Nexmo is really easy due to the fact they transform an SMS in to a HTTP request for us.

## Exposing your application with ngrok

Whilst our application is complete, our job isn't quite finished yet. To send a HTTP request to our application, Nexmo needs to know which URL our application is running on.

We're going to use [ngrok](/blog/2017/07/04/local-development-nexmo-ngrok-tunnel-dr/) to expose our local application to the internet. Run `ngrok http 8000` and make a note of the `ngrok` URL generated (it'll look something like `http://abc123.ngrok.io`).

## Configure your Nexmo account

With Nexmo, each phone number you own can have a different callback URL that they use to send inbound SMS to. 

 Let's start by purchasing a phone number using the Nexmo CLI that we can use to test:

```bash
nexmo number:buy --country_code US
```

Take the number you just purchased and link it to your `ngrok` URL so that Nexmo know where to send the inbound SMS to (replacing the phone number and URL with your own values):

```bash
nexmo link:sms 14155550100 http://abc123.ngrok.io/webhook/inbound-sms
```

At this point, you can send an SMS to your Nexmo number and watch as it appears in your terminal. It may take a few minutes due to network latency, but it should arrive soon!

## Conclusion

In just 20 lines of code, we went from zero to being able to receive inbound SMS messages in our application. If you know which HTTP method you're using, you can even reduce that to 16 by deleting either `getParsedBody` or `getQueryParams`!

Nexmo Developer has more information about [receiving inbound SMS messages](https://developer.nexmo.com/messaging/sms/guides/inbound-sms) with PHP, including a description of all of the available parameters that Nexmo may send to you.

If you have any questions about this post feel free to email devrel@nexmo.com or [join the Nexmo community Slack channel](https://developer.nexmo.com/community/slack), where we're waiting and ready to help.