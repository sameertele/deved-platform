<template>
  <main class="max-w-screen-xl px-4 mx-auto">
    <Breadcrumbs />
    <section class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <CardFeatured v-for="(post, i) in latestPosts" :key="i" :post="post" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const latestPosts = await $content(`blog/${app.i18n.locale}`)
      .where({ published: { $ne: false } })
      .sortBy('published_at', 'desc')
      .limit(12)
      .fetch()

    return {
      latestPosts,
    }
  },
}
</script>
