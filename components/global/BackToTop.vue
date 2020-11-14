<template>
  <transition name="fade">
    <a v-show="showButton" href="#top" class="Back-to-top"> ^ </a>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    }
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      if (window.pageYOffset === 0) {
        window.location.hash = ''
      }

      if (window.pageYOffset > 200) {
        this.showButton = true
      } else {
        this.showButton = false
      }
    },
  },
}
</script>

<style scoped>
.Back-to-top {
  z-index: 1;
  position: fixed;
  bottom: 50px;
  right: 5%;
}
</style>

<style>
html {
  scroll-behavior: smooth;
}
</style>
