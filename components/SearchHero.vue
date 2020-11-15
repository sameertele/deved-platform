<template>
  <header class="bg-white shadow">
    <section
      class="flex flex-col flex-no-wrap items-center justify-center h-32 max-w-screen-xl px-4 mx-auto text-center md:h-64 search-hero sm:px-6 lg:px-8"
    >
      <h1 class="w-full h-16 text-xl md:w-1/2">
        {{ $t('component_search_hero_title') }}
        <img
          class="inline h-6"
          src="@/assets/images/vonage/wordmark.svg"
          :alt="$t('component_header_badge')"
        />
      </h1>
      <form class="hidden w-1/2 h-16 md:block" @submit.prevent="search()">
        <div class="flex h-12 border border-gray-500 rounded-lg">
          <input
            id="search-input"
            v-model="query"
            type="text"
            :placeholder="$t('component_search_hero_placeholder')"
            class="search-input"
          />
          <button
            type="submit"
            class="px-4 py-2 -ml-px text-gray-700 transition duration-150 ease-in-out border-l border-gray-300 rounded-r-lg outline-none focus:outline-none bg-gray-50 hover:text-gray-500 hover:bg-white active:bg-gray-100 active:text-gray-700"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </section>
    <section class="p-4 md:hidden">
      <form @submit.prevent="search()">
        <div class="flex h-12 border border-gray-500 rounded-lg">
          <input
            id="search-input-mobile"
            v-model="query"
            type="text"
            :placeholder="$t('component_search_hero_placeholder')"
            class="search-input"
          />
          <button
            type="submit"
            class="px-4 py-2 -ml-px text-gray-700 transition duration-150 ease-in-out border-l border-gray-300 rounded-r-lg outline-none focus:outline-none bg-gray-50 hover:text-gray-500 hover:bg-white active:bg-gray-100 active:text-gray-700"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </section>
  </header>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    }
  },

  mounted() {
    this.query = this.$route.query.query
  },

  methods: {
    search() {
      this.$router.push({ path: 'search', query: { query: this.query } })
    },
  },
}
</script>

<style scoped>
@screen md {
  .search-hero {
    background: url('../assets/images/illustrations/Brand-activate-conversations.png')
      no-repeat scroll 12px 24px;
    background-size: 200px;
  }
}

.search-input {
  @apply rounded-l-lg;
  @apply outline-none;
  @apply block;
  @apply w-full;
  @apply pl-2;
  @apply transition;
  @apply ease-in-out;
  @apply duration-150;
}

.search-input:focus {
  @apply outline-none;
}

@media (sm) {
  .search-input {
    @apply text-sm;
    @apply leading-5;
  }
}
</style>
