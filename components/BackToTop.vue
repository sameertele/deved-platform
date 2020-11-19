<template>
  <div
    :class="{ 'opacity-100': showButton, 'opacity-0': !showButton }"
    class="fixed inset-x-auto bottom-0 w-screen mb-16 transition-opacity duration-500 ease-in-out pointer-events-none"
  >
    <div
      class="max-w-screen-xl px-4 mx-auto pointer-events-none sm:px-6 lg:px-8"
    >
      <div class="flex xl:justify-end">
        <a
          href="#top"
          :class="{
            'pointer-events-auto': showButton,
            'pointer-events-none': !showButton,
          }"
          class="z-50 flex items-center justify-center w-16 h-16 text-white rounded-full bg-purple-dark hover:bg-purple"
        >
          <svg
            class="inline w-8 stroke-current stroke-2"
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
