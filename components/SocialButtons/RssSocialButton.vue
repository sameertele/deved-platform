<template>
  <a
    v-if="!!link"
    class="Vlt-btn Vlt-btn--orange"
    :class="{ 'Vlt-btn--icon': !hasDefaultSlot }"
    :href="link"
    target="_blank"
    rel="noreferrer"
  >
    Vlt-icon-rss
    <slot />
  </a>
</template>

<script>
export default {
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
