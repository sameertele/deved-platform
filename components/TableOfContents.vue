<template>
  <fragment v-if="links.length > 0">
    <h4>Table of Contents</h4>
    <ul>
      <li
        v-for="link of links"
        :key="link.id"
        :class="`link--level${link.depth} ${
          activeLink && activeLink.id === link.id ? 'link--active' : ''
        }`"
        class="truncate text-xs py-2"
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

  data() {
    return {
      pos: 0,
      links: [],
      activeLink: undefined,
      // updateHash: null,
    }
  },

  watch: {
    pos(value) {
      if (process.client) {
        // window.clearTimeout(this.updateHash)

        // this.updateHash = window.setTimeout(() => {
        //   window.location.hash = this.activeLink.id
        // }, 1000)

        this.links = this.links.map((link, key) => {
          const title = document.getElementById(link.id)
          return {
            ...link,
            active: this.linkActive(title),
          }
        })
      }
    },

    toc(value) {
      this.links = value.filter((l) => this.levels.includes(l.depth))
    },

    links(value) {
      this.activeLink = value.filter((l) => l.active).pop()
    },
  },

  mounted() {
    this.links = this.toc.filter((l) => this.levels.includes(l.depth))
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    linkActive(el) {
      let top = el.offsetTop
      const height = el.offsetHeight
      const halfWindow = window.innerHeight / 2

      while (el.offsetParent) {
        el = el.offsetParent
        top += el.offsetTop
      }
      return top - (halfWindow + height) < window.pageYOffset
    },

    handleScroll() {
      this.pos = window.pageYOffset
    },
  },
}
</script>

<style scoped>
li:not(:first-child) {
  @apply border-t;
}

li {
  @apply pl-2;
}

li.link--active {
  @apply bg-grey-lighter;
}

li.link--active a {
  @apply pl-4;
}
</style>
