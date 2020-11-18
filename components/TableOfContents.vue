<template>
  <fragment v-if="filteredToc.length > 0">
    <h4>Table of Contents</h4>
    <ul>
      <li
        v-for="link of filteredToc"
        :key="link.id"
        :class="`link--level${link.depth}`"
        class="truncate"
      >
        <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
      </li>
    </ul>
  </fragment>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true,
    },

    levels: {
      type: Array,
      default: () => [2, 3],
    },
  },

  computed: {
    filteredToc() {
      return this.toc.filter((l) => this.levels.includes(l.depth))
    },
  },
}
</script>
