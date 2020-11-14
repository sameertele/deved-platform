<template>
  <a
    v-if="!!link"
    class="Vlt-btn Vlt-btn--tertiary"
    :class="{ 'Vlt-btn--icon': !hasDefaultSlot }"
    :href="`${link}?utm_source=blog&utm_medium=deved&utm_campaign=stackoverflow-social-link`"
    target="_blank"
    rel="noreferrer"
  >
    Brand-icon-stackoverflow-color.svg
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
