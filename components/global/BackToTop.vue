<template>
  <div
    :class="{ 'opacity-100': showButton, 'opacity-0': !showButton }"
    class="w-screen fixed bottom-0 mb-16 inset-x-auto z-50 transition-opacity duration-500 ease-in-out"
  >
    <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex xl:justify-end">
        <a
          href="#top"
          class="mr-4 block bg-purple rounded-full h-16 w-16 flex items-center justify-center text-white"
        >
          <svg
            class="w-8 inline stroke-current stroke-2"
            role="img"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
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

<style>
html {
  scroll-behavior: smooth;
}
</style>
