<template>
  <a
    v-if="!!link"
    class="button button--pill button--twitter"
    :href="`${link}?utm_source=blog&utm_medium=deved&utm_campaign=twitter-social-link`"
    target="_blank"
    rel="noreferrer"
  >
    <TwitterIcon
      class="w-4 h-4 fill-current"
      :class="{ 'mr-2': hasDefaultSlot }"
    />
    <slot />
  </a>
</template>

<script>
import { TwitterIcon } from 'vue-simple-icons'

export default {
  components: {
    TwitterIcon,
  },

  props: {
    link: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default
    },
  },
}
</script>
