<template>
  <a
    :href="`${repoUrl}/blob/${repoBranch}/content${post.path}${post.extension}`"
    target="_blank"
    class="Vlt-text-link"
  >
    Please help improve this article</a
  >
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      repoUrl: process.env.repoUrl,
      repoBranch: process.env.repoBranch,
    }
  },
}
</script>

<style scoped>
.Vlt-icon {
  margin-right: 0.2em;
  height: 1em;
}
</style>
