<template>
  <article class="overflow-hidden bg-white rounded-lg shadow">
    <figure>
      <nuxt-link :to="item.path" class="card-figure" :title="item.title">
        <img :src="item.image" :alt="item.title" />
      </nuxt-link>
    </figure>
    <header class="px-4 my-4">
      <h3 class="flex text-xl font-medium">
        <NLink class="truncate" :to="item.path" :title="item.title">
          {{ item.title }}
        </NLink>
      </h3>
    </header>
    <main class="flex flex-col px-4 sm:flex-row sm:space-x-1">
      {{ item.description | truncate(120, '...') }}
    </main>
    <footer class="flex justify-between py-2 mx-4 mt-2 border-t text-grey-dark">
      {{ meta | truncate(60, '...') }}
    </footer>
  </article>
</template>

<script>
import config from '~/modules/config'

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    title() {
      return this.item.title.replace(
        `${config.baseSplitter}${config.baseTitle}`,
        ''
      )
    },

    meta() {
      const path = this.item.path.replace(/^\/+|\/+$/g, '')
      const dateExp = /\d{4}\/\d{2}\/\d{2}/
      const pathDateMatch = path.match(new RegExp(dateExp.source))

      let split = '/'

      if (pathDateMatch) {
        split = new RegExp(`/(${dateExp.source})/`)
      }

      return `${path.split(split).join(' » ')}`
    },
  },
}
</script>
