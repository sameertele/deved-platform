<template>
  <div>
    <HeroImage
      :src="require('~/assets/images/illustrations/Spotlight-banner.png')"
      alt="Spotlight Posts"
    />
    <main class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <Breadcrumbs />
      <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card v-for="(post, i) in posts" :key="i" :post="post" />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app, error }) {
    try {
      const posts = await $content(`blog/${app.i18n.locale}`)
        .where({
          $and: [{ spotlight: { $eq: true } }, { published: { $ne: false } }],
        })
        .sortBy('published_at', 'desc')
        .fetch()

      if (posts.length === 0) {
        error({ statusCode: 404, message: 'Page not found' })
      }

      return {
        posts,
      }
    } catch (e) {
      return error(e)
    }
  },
}
</script>
