<template>
  <div>
    <Error404 v-if="error.statusCode === 404" />
    <Error400 v-else />
  </div>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
