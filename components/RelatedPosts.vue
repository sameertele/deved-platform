<template>
  <fragment>
    <h4>Related Posts</h4>
    <p v-if="$fetchState.error">
      There has been an error fetching related posts...
    </p>
    <ul v-else-if="!$fetchState.pending">
      <li
        v-for="(post, i) of relatedPosts"
        :key="i"
        class="py-2 text-xs truncate"
      >
        <nuxt-link :to="localePath(post.route, post.locale)">{{
          post.title
        }}</nuxt-link>
      </li>
    </ul>
    <p v-else>Fetching related posts...</p>
  </fragment>
</template>

<script>
export default {
  props: {
    terms: {
      type: Array,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      relatedPosts: {},
    }
  },

  async fetch() {
    try {
      this.relatedPosts = await this.$content(`blog`, { deep: true })
        .where({
          $and: [
            { slug: { $ne: this.slug } },
            { tags: { $containsAny: this.terms } },
            { published: { $ne: false } },
          ],
        })
        .sortBy('published_at', 'desc')
        .limit(3)
        .fetch()

      if (this.relatedPosts.length === 0) {
        this.relatedPosts = await this.$content(`blog`, { deep: true })
          .where({
            $and: [
              { slug: { $ne: this.slug } },
              { category: { $in: this.terms } },
              { published: { $ne: false } },
            ],
          })
          .sortBy('published_at', 'desc')
          .limit(3)
          .fetch()
      }
    } catch (error) {
      console.error(error)
    }
  },
}
</script>

<style scoped>
li:not(:first-child) {
  @apply border-t;
}

li {
  @apply px-2;
}
</style>
