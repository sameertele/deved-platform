<template>
  <a
    v-if="!!link"
    class="button button--pill button--twitch"
    :href="`${link}?utm_source=blog&utm_medium=deved&utm_campaign=twitch-social-link`"
    target="_blank"
    rel="noreferrer"
  >
    <TwitchIcon
      class="w-4 h-4 fill-current"
      :class="{ 'mr-2': hasDefaultSlot }"
    />
    <slot />
  </a>
</template>

<script>
import { TwitchIcon } from 'vue-simple-icons'

export default {
  components: {
    TwitchIcon,
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
