<template>
  <div>
    <SearchHero />
    <main class="max-w-screen-xl px-4 mx-auto">
      <section class="index-section">
        <h2>
          <NLink :to="localePath('/blog')">
            {{ $t('page_index_latest_posts') }}
          </NLink>
        </h2>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <CardFeatured
            v-for="(post, i) in latestPosts"
            :key="i"
            :post="post"
          />
        </div>
      </section>
      <template v-for="(category, j) in categories">
        <section
          v-if="category.posts && category.posts.length > 0"
          :key="j"
          class="index-section"
        >
          <h2>
            <NLink :to="localePath(`/categories/${category.slug}`)">
              {{ category.plural }}
            </NLink>
          </h2>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card v-for="(post, k) in category.posts" :key="k" :post="post" />
          </div>
        </section>
      </template>
    </main>
    <footer>
      <NLink :to="localePath('blog')">
        {{ $t('page_index_view_all_posts') }}
      </NLink>
    </footer>
  </div>
</template>

<script>
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
        .limit(6)
        .fetch()
    })

    return {
      categories,
      latestPosts,
    }
  },
}
</script>

<style scoped>
.index-section h2 {
  @apply my-4;
  @apply text-sm;
  @apply font-light;
  @apply text-center;
  @apply uppercase;
  @apply text-grey-dark;
  @apply relative;
  @apply z-20;
}

@screen md {
  .index-section h2 {
    @apply my-10;
  }
}

.index-section h2:before {
  @apply border-t;
  @apply border-grey;
  @apply my-0;
  @apply mx-auto;
  @apply absolute;
  @apply left-0;
  @apply right-0;
  @apply bottom-0;
  @apply w-11/12;
  z-index: -1;
  content: '';
  top: 50%;
}

.index-section h2 a {
  @apply bg-grey-lighter;
  @apply z-10;
  @apply py-0;
  @apply px-4;
}
</style>
