<template>
  <div
    class="overflow-hidden bg-white rounded-lg shadow"
    vocab="http://schema.org/"
    typeof="Person"
  >
    <figure>
      <nuxt-link :to="localePath(`/authors/${author.username}`)">
        <img
          :src="author.image_url"
          property="image"
          class="object-cover w-full h-64"
          alt="post.title"
        />
      </nuxt-link>
    </figure>
    <header class="px-4 my-4">
      <h3 property="name" class="flex text-lg font-medium">
        <nuxt-link :to="localePath(`/authors/${author.username}`)">
          {{ author.name }}
        </nuxt-link>
      </h3>
      <small v-if="author.team" class="Vlt-grey-dark" property="jobTitle">
        {{ author.title || 'Vonage Team Member' }}
      </small>
      <small
        v-else-if="author.alumni"
        class="Vlt-grey-dark"
        property="jobTitle"
      >
        Vonage Alumni
      </small>
      <small
        v-else-if="author.spotlight"
        class="Vlt-grey-dark"
        property="jobTitle"
      >
        Spotlight Author
      </small>
      <small v-else class="Vlt-grey-dark" property="jobTitle">
        Guest Writer
      </small>
    </header>
    <main class="px-4 sm:flex-row sm:space-x-1">
      <p class="text-sm text-justify text-grey-dark" property="description">
        {{ author.bio | truncate(100, '...') }}
      </p>
      <p class="text-xs text-right">
        <nuxt-link :to="localePath(`/authors/${author.username}`)"
          >[Read more]</nuxt-link
        >
      </p>
    </main>
    <footer class="py-2 mx-4 mt-2 border-t">
      <TwitterSocialButton
        :link="author.twitter ? `https://twitter.com/${author.twitter}` : ''"
        class="Vlt-btn--small"
      />
      <FacebookSocialButton
        :link="author.facebook_url"
        class="Vlt-btn--small"
      />
      <GitHubSocialButton :link="author.github_url" class="Vlt-btn--small" />
      <StackOverflowSocialButton
        :link="author.stackoverflow_url"
        class="Vlt-btn--small"
      />
      <LinkedInSocialButton
        :link="author.linkedin_url"
        class="Vlt-btn--small"
      />
      <TwitchSocialButton :link="author.twitch_url" class="Vlt-btn--small" />
      <YouTubeSocialButton :link="author.youtube_url" class="Vlt-btn--small" />
      <WebsiteSocialButton
        :link="author.website_url || localePath(`/authors/${author.username}`)"
        class="Vlt-btn--small"
      />
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>
