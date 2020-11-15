<template>
  <section>
    <SearchHero />
    <main>
      <span>{{ $t('page_index_latest_posts') }}</span>
      <CardFeatured v-for="(post, i) in latestPosts" :key="i" :post="post" />
      <template v-for="(category, i) in categories">
        <div v-if="category.posts && category.posts.length > 0" :key="i">
          <span>
            <NLink :to="localePath(`/categories/${category.slug}`)">
              {{ category.plural }}
            </NLink>
          </span>
          <Card
            v-for="post in category.posts"
            :key="`${category.slug}-${post.route}`"
            :post="post"
          />
        </div>
      </template>
    </main>
    <footer>
      <NLink :to="localePath('blog')">
        {{ $t('page_index_view_all_posts') }}
      </NLink>
    </footer>
  </section>
</template>

<script>
const postMap = { tutorial: 6 }

export default {
  async asyncData({ $content, app }) {
    const latestPosts = await $content(`blog/${app.i18n.locale}`)
      .where({ published: { $ne: false } })
      .sortBy('published_at', 'desc')
      .limit(2)
      .fetch()

    const { categories } = await $content('categories').fetch()

    categories.forEach(async (category, index, array) => {
      array[index].posts = await $content(`blog/${app.i18n.locale}`)
        .where({
          $and: [
            { category: category.slug },
            { route: { $nin: latestPosts.map((f) => f.route) } },
            { published: { $ne: false } },
          ],
        })
        .sortBy('published_at', 'desc')
        .limit(postMap[category.slug] ? postMap[category.slug] : 3)
        .fetch()
    })

    return {
      categories,
      latestPosts,
    }
  },
}
</script>

<style scoped></style>
