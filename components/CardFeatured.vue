<template>
  <article class="overflow-hidden bg-white rounded-lg shadow">
    <figure>
      <nuxt-link
        :to="localePath(post.route, post.locale)"
        class="card-figure"
        :title="post.title"
      >
        <img :src="post.thumbnail" />
      </nuxt-link>
    </figure>
    <header class="px-4 my-4">
      <h3 class="flex text-xl font-medium">
        <svg
          v-if="post.redirect"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        <NLink
          class="truncate"
          :to="localePath(post.route, post.locale)"
          :title="post.title"
        >
          {{ post.title }}
        </NLink>
      </h3>
    </header>
    <main
      class="flex flex-col px-4 text-xs sm:flex-row sm:space-x-1 text-grey-darker"
    >
      <div class="flex space-x-1">
        <span>Published</span>
        <strong>{{ post.published_at | moment('dddd, MMMM Do YYYY') }}</strong>
      </div>
      <div class="flex space-x-1">
        <span>by</span>
        <Author :author="post.author" type="name" />
      </div>
    </main>
    <footer class="flex justify-between py-2 mx-4 mt-2 border-t">
      <Tags :tags="post.tags" />
      <Category :category="post.categoryObject" class="Category--border" />
    </footer>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card-figure {
  @apply block;
  @apply w-full;
  @apply overflow-hidden;
}

.card-figure img {
  @apply object-cover;
  @apply object-center;
  @apply h-64;
  @apply w-full;
}
</style>
