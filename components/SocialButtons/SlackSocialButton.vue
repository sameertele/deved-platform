<template>
  <a
    v-if="!!link"
    class="button button--pill button--slack"
    :href="`${link}?utm_source=blog&utm_medium=deved&utm_campaign=slack-social-link`"
    target="_blank"
    rel="noreferrer"
  >
    <SlackIcon
      class="w-4 h-4 fill-current"
      :class="{ 'mr-2': hasDefaultSlot }"
    />
    <slot />
  </a>
</template>

<script>
import { SlackIcon } from 'vue-simple-icons'

export default {
  components: {
    SlackIcon,
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
