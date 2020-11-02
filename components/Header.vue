<template>
  <nav class="bg-white">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center justify-items-end">
          <div class="flex flex-shrink-0">
            <img
              class="h-6"
              src="@/assets/images/vonage/wordmark.svg"
              :alt="$t('component_header_badge')"
            />
          </div>
          <span class="ml-4 badge badge--small badge--purple">{{
            $t('component_header_badge')
          }}</span>
        </div>
        <div class="hidden md:block">
          <div class="flex items-baseline ml-10 space-x-4">
            <div
              class="relative inline-block button button--pill button--small"
            >
              <select
                v-model="selectedLocale"
                @change="switchLocale(selectedLocale)"
              >
                <option :value="currentLocale.code" selected="selected">
                  {{ currentLocale.name }}
                </option>
                <option
                  v-for="(locale, index) in availableLocales"
                  :key="index"
                  :value="locale.code"
                >
                  {{ locale.name }}
                </option>
              </select>
              <div
                class="absolute inset-y-0 flex items-center px-2 text-gray-700 pointer-events-none right-4"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>

            <a
              class="button button--pill button--small"
              href="https://developer.nexmo.com/community/slack"
              >{{ $t('component_header_slack_button') }}</a
            >

            <a
              class="button button--pill button--small"
              href="https://twitter.com/VonageDev"
              >Twitter</a
            >

            <a
              class="button button--pill button--small"
              href="https://dashboard.nexmo.com/sign-up?utm_source=blog&utm_medium=deved&utm_campaign=sign-up-link"
              >{{ $t('component_header_signup_button') }}</a
            >
          </div>
        </div>
        <div class="flex -mr-2 md:hidden">
          <!-- Mobile menu button -->
          <button
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            @click="isOpen = !isOpen"
          >
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              class="block w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              class="hidden w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <div
      class="md:hidden"
      :class="{
        'hidden ': !isOpen,
      }"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          href="https://developer.nexmo.com/community/slack"
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >{{ $t('component_header_slack_button') }}</a
        >

        <a
          href="https://twitter.com/VonageDev"
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >Twitter</a
        >

        <a
          href="https://dashboard.nexmo.com/sign-up?utm_source=blog&utm_medium=deved&utm_campaign=sign-up-link"
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >{{ $t('component_header_signup_button') }}</a
        >

        <select v-model="selectedLocale" @change="switchLocale(selectedLocale)">
          <option :value="currentLocale.code" selected="selected">
            {{ currentLocale.name }}
          </option>
          <option
            v-for="(locale, index) in availableLocales"
            :key="index"
            :value="locale.code"
          >
            {{ locale.name }}
          </option>
        </select>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5 space-x-3">
          <div class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="space-y-1">
            <div class="text-base font-medium leading-none text-white">
              Tom Cook
            </div>
            <div class="text-sm font-medium leading-none text-gray-400">
              tom@example.com
            </div>
          </div>
        </div>
        <div class="px-2 mt-3 space-y-1">
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Your Profile</a
          >

          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Settings</a
          >

          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      selectedLocale: this.$i18n.locale,
      isOpen: false,
    }
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    currentLocale() {
      return this.$i18n.locales.filter((l) => l.code === this.$i18n.locale)[0]
    },
  },

  methods: {
    switchLocale(event) {
      this.$router.replace(this.switchLocalePath(event))
    },
  },
}
</script>
