<template>
  <article class="overflow-hidden bg-white rounded-lg shadow">
    <header class="mt-4 text-center">
      <Category :category="post.categoryObject" class="Category--border" />
    </header>
    <header class="px-4 my-4">
      <h3 class="flex text-base font-medium tracking-tight xl:text-lg">
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
      class="flex flex-col px-4 text-xs lg:flex-row lg:space-x-1 text-grey-darker"
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
    <footer class="flex justify-between px-4 py-2 mt-2">
      <Tags :tags="post.tags" />
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
    showLanguage: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    language() {
      return this.$i18n.locales.filter((l) => l.code === this.post.locale)[0]
    },
  },
}
</script>

<style scoped>
.Vlt-card__footer >>> .Vlt-badge-group {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Vlt-card__content {
  display: block;
  height: 75px;
  overflow: hidden;
}

h2 {
  text-align: center;
  margin-bottom: 0;
  display: table-cell;
  vertical-align: middle;
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 800;
  margin-bottom: 8px;
}

h2 svg {
  width: 15px;
}
</style>
