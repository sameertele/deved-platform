<template>
  <component
    :is="link ? 'nuxt-link' : 'span'"
    :to="localePath(`/tags/${slug}`)"
    class="inline-flex badge"
    :class="'badge--' + slug"
    ><svg
      v-if="isProduct"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="w-3 mr-2 fill-current"
    >
      <path
        d="M9.3 11.6L4.7 1.5H0l6.8 15.3s.1.1.1 0l2.4-5.2zm9.9-10.1s-6.1 13.9-6.9 15.6c-1.8 4.1-3.2 5.1-4.6 5.3H12c1.9 0 3.2-1.3 5.1-5.3.6-1.4 6.9-15.6 6.9-15.6h-4.8z"
      /></svg
    ><span v-else>#</span><span>{{ slug }}</span></component
  >
</template>

<script>
import config from '~/modules/config'

export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
    link: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      products: [
        'dispatch-api',
        'messages-api',
        'messages-api-sandbox',
        'number-insight-api',
        'number-api',
        'reports-api',
        'account-api',
        'pricing-api',
        'external-accounts-api',
        'redact-api',
        'audit-api',
        'verify-api',
        'media-api',
        'voice-api',
        'conversation-api',
        'video-api',
        'sms-api',
        'station',
        'spotlight',
        'voyagers',
      ],
    }
  },

  computed: {
    isProduct() {
      return this.products.includes(this.tag)
    },

    slug() {
      const tag = this.tag.toLowerCase()

      const match = Object.entries(config.tagMap).filter(([, value]) =>
        value.includes(tag)
      )

      if (match[0]) {
        return match[0][0]
      }

      return tag
    },
  },
}
</script>

<style scoped>
.badge--dispatch-api,
.badge--messages-api,
.badge--messages-api-sandbox,
.badge--number-insight-api,
.badge--number-api,
.badge--reports-api,
.badge--account-api,
.badge--pricing-api,
.badge--external-accounts-api,
.badge--redact-api,
.badge--audit-api,
.badge--verify-api,
.badge--media-api,
.badge--voice-api,
.badge--conversation-api,
.badge--video-api,
.badge--sms-api,
.badge--station {
  background: #000;
  color: #fff;
}

.badge--slack {
  background: #4a154b;
  color: #fff;
}

.badge--faunadb {
  background: #323fcb;
  color: #fff;
}

.badge--vue {
  background-color: #41b883;
  color: #35495e;
}

.badge--nuxt {
  background-color: #00c58e;
  color: #ffffff;
}

.badge--ruby-on-rails,
.badge--ruby {
  background-color: #cc342d;
  color: #fff;
}

.badge--javascript {
  background-color: #f7df1e;
  color: #000000;
}

.badge--typescript {
  background-color: #3178c6;
  color: #fff;
}

.badge--dotnet {
  background-color: #5d2590;
  color: #fff;
}

.badge--node {
  background-color: #3d8836;
  color: #fff;
}

.badge--deno {
  background: #161e2e;
  color: #fff;
}

.badge--node-red {
  background-color: #8e0100;
  color: #fff;
}

.badge--azure {
  background-color: #007fff;
  color: #fff;
}

.badge--zapier {
  background-color: #ff4a00;
  color: #fff;
}

.badge--go {
  @apply shadow-inner;
  background-color: #e0ebf5;
  color: #043c6f;
}

.badge--spotlight {
  background-color: #871fff;
  color: #fff;
}

.badge--voyagers {
  background-color: #871fff;
  color: #fff;
}

.badge--php {
  background-color: #23a1aa;
  color: #fff;
}

.badge--aws {
  background-color: #212b3a;
  color: #faaf34;
}

.badge--firebase {
  background-color: #ffca28;
  color: #2c384a;
}

.badge--zendesk {
  background-color: #03363d;
  color: #f8f9f9;
}

.badge--zendesk {
  background-color: #03363d;
  color: #f8f9f9;
}

.badge--ibm-watson {
  background-color: #0062ff;
  color: #ffffff;
}

.badge--git {
  background-color: #f14e32;
  color: #ffffff;
}

.badge--github {
  content: 'GitHub';
  background-color: #333333;
  color: #ffffff;
}

.badge--hacktoberfest {
  background-color: #072540;
  color: #ffffff;
}

.badge--digitalocean {
  background-color: #0069ff;
  color: #ffffff;
}

.badge--java {
  background-color: #01476e;
  color: #ff8f8f;
}

.badge--python {
  background-color: #1e38bb;
  color: #ffdf5b;
}

.badge--mongodb {
  background-color: #13aa52;
  color: #ffffff;
}

.badge--netlify {
  background: linear-gradient(to bottom, #23c2b8, #37afbc);
  color: white;
}

.badge--postman {
  background: rgb(255, 108, 55);
  color: white;
}

.badge--opensource {
  background: #3da639;
  color: white;
}

.badge--react-native,
.badge--react {
  background: #61dafb;
  color: black;
}

.badge--open-api {
  background: #38b832;
  color: #ffffff;
}

.badge--inclusion {
  background: linear-gradient(
    90deg,
    #000000,
    #000000 12.5%,
    #754d15 12.5%,
    #754d15 25%,
    #f00000 25%,
    #f00000 37.5%,
    #ff8000 37.5%,
    #ff8000 50%,
    #ffff00 50%,
    #ffff00 62.5%,
    #007940 62.5%,
    #007940 75%,
    #4040ff 75%,
    #4040ff 87.5%,
    #a000c0 87.5%,
    #a000c0
  );
  color: white;
  text-shadow: 1px 1px 2px #00000080, -1px -1px 2px #00000080,
    -1px 1px 2px #00000080, 1px -1px 2px #00000080;
}

.badge--diversity {
  background: linear-gradient(
    90deg,
    #55cdfc,
    #55cdfc 20%,
    #f7a8b8 20%,
    #f7a8b8 40%,
    #fff 40%,
    #fff 60%,
    #f7a8b8 60%,
    #f7a8b8 80%,
    #55cdfc 80%,
    #55cdfc 100%
  );
  color: black;
  text-shadow: 1px 1px 2px #ffffff80, -1px -1px 2px #ffffff80,
    -1px 1px 2px #ffffff80, 1px -1px 2px #ffffff80;
}
</style>
