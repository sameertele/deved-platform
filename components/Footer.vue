<template>
  <footer class="text-white bg-black">
    <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        <div>
          <h4>
            <client-only>
              <img
                v-if="!!token"
                :src="`/Vonage-footer-logo.svg?token=${token}`"
                class="w-32"
                :alt="$t('component_footer_strapline')"
              />
            </client-only>
          </h4>
          <ul>
            <li>
              <a
                href="https://www.vonage.com/legal/"
                target="_blank"
                rel="noreferrer"
                >{{ $t('component_footer_legal') }}</a
              >
            </li>
            <li>
              <a
                href="https://www.vonage.com/legal/privacy-policy/"
                target="_blank"
                rel="noreferrer"
                >{{ $t('component_footer_privacy') }}</a
              >
            </li>
            <li>
              <a
                href="https://www.vonage.com/copyright-policy"
                target="_blank"
                rel="noreferrer"
                >{{ $t('component_footer_copyright') }}</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4>{{ $t('component_footer_service') }}</h4>
          <ul>
            <li>
              <a
                href="https://www.vonage.com/system-status/"
                target="_blank"
                rel="noreferrer"
                >{{ $t('component_footer_systemstatus') }}</a
              >
            </li>
            <li>
              <a
                href="https://www.vonage.com/support/"
                target="_blank"
                rel="noreferrer"
                >{{ $t('component_footer_support') }}</a
              >
            </li>
            <li>
              <a
                href="https://rewards.vonagebusiness.com/index.html"
                target="_blank"
                rel="noreferrer"
                >{{ $t('component_footer_referrals') }}</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4>{{ $t('component_footer_corporate') }}</h4>
          <ul>
            <li>
              <a
                href="https://ir.vonage.com/"
                target="_blank"
                rel="noreferrer"
                >{{ $t('component_footer_investors') }}</a
              >
            </li>
            <li>
              <a
                href="https://www.vonage.com/events/?icmp=footer_corporate_events"
                target="_blank"
                rel="noreferrer"
                >{{ $t('component_footer_events') }}</a
              >
            </li>
            <li>
              <a
                href="https://www.vonage.com/careers/?icmp=footer_corporate_careers"
                target="_blank"
                rel="noreferrer"
                >{{ $t('component_footer_careers') }}</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4>Contributing</h4>
          <ul>
            <li>
              <nuxt-link to="/contributing">Guidelines</nuxt-link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Nexmo/deved-platform"
                >GitHub</a
              >
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://developer.nexmo.com/community/slack"
                >Slack</a
              >
            </li>
          </ul>
        </div>
        <div>
          <ul
            class="flex flex-row items-end space-x-2 xl:flex-col xl:space-x-0"
          >
            <li>
              <a
                href="https://twitter.com/vonagedev"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter icon</title>
                  <path
                    d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                  /></svg
              ></a>
            </li>
            <li>
              <a
                href="https://twitch.tv/vonagedevs"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitch icon</title>
                  <path
                    d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCHQnbTiun_Wn7nDxkQavrYQ"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>YouTube icon</title>
                  <path
                    d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"
                  /></svg
              ></a>
            </li>
            <li>
              <a
                href="/feeds/blog/rss.xml"
                target="_blank"
                :title="$t('component_footer_rssfeed')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 fill-current"
                >
                  <path
                    d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"
                  />
                  <path
                    d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import jwt from 'jsonwebtoken'

export default {
  data({ $router, $route }) {
    return {
      token: '',
    }
  },

  watch: {
    $route(route) {
      this.token = this.getHash(route)
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.token = this.getHash(this.$route)
    })
  },

  methods: {
    getHash(route = {}) {
      const data = {
        dp: route.path,
        dt: null,
        dh: process.env.baseUrl,
        dr: null,
        ua: null,
        cs: route.query.utm_source || null,
        cm: route.query.utm_medium || null,
        cn: route.query.utm_campaign || null,
        ck: route.query.utm_term || null,
        cc: route.query.utm_content || null,
      }

      if (process.client && window.document) {
        data.dt = window.document.title || null
        data.ua = window.navigator.userAgent || null
        data.dr = window.document.referrer || window.document.referer || null
      }

      Object.keys(data).forEach(
        (k) => !data[k] && data[k] !== undefined && delete data[k]
      )

      return jwt.sign(data, process.env.signer)
    },
  },
}
</script>

<style scoped>
footer {
  @apply mt-32 py-32;
}
h4 {
  @apply uppercase;
  @apply text-grey-dark;
  @apply tracking-widest;
}
ul > li {
  @apply my-2;
}
</style>
