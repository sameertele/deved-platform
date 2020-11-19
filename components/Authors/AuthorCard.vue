<template>
  <div
    class="overflow-hidden bg-white rounded-lg shadow"
    vocab="http://schema.org/"
    typeof="Person"
  >
    <figure>
      <nuxt-link :to="localePath(`/authors/${author.username}`)">
        <img
          :src="author.image_url"
          property="image"
          class="object-cover w-full h-64"
          alt="post.title"
        />
      </nuxt-link>
    </figure>
    <header class="px-4 my-4">
      <h3 property="name" class="flex text-lg font-medium">
        <nuxt-link :to="localePath(`/authors/${author.username}`)">
          {{ author.name }}
        </nuxt-link>
      </h3>
      <small v-if="author.team" class="Vlt-grey-dark" property="jobTitle">
        {{ author.title || 'Vonage Team Member' }}
      </small>
      <small
        v-else-if="author.alumni"
        class="Vlt-grey-dark"
        property="jobTitle"
      >
        Vonage Alumni
      </small>
      <small
        v-else-if="author.spotlight"
        class="Vlt-grey-dark"
        property="jobTitle"
      >
        Spotlight Author
      </small>
      <small v-else class="Vlt-grey-dark" property="jobTitle">
        Guest Writer
      </small>
    </header>
    <main class="px-4 sm:flex-row sm:space-x-1">
      <p class="text-sm text-justify text-grey-dark" property="description">
        {{ author.bio | truncate(100, '...') }}
      </p>
      <p class="text-xs text-right">
        <nuxt-link :to="localePath(`/authors/${author.username}`)"
          >[Read more]</nuxt-link
        >
      </p>
    </main>
    <footer class="py-2 mx-4 mt-2 border-t">
      <TwitterSocialButton
        :link="author.twitter ? `https://twitter.com/${author.twitter}` : ''"
        class="Vlt-btn--small"
      />
      <FacebookSocialButton
        :link="author.facebook_url"
        class="Vlt-btn--small"
      />
      <GitHubSocialButton :link="author.github_url" class="Vlt-btn--small" />
      <StackOverflowSocialButton
        :link="author.stackoverflow_url"
        class="Vlt-btn--small"
      />
      <LinkedInSocialButton
        :link="author.linkedin_url"
        class="Vlt-btn--small"
      />
      <TwitchSocialButton :link="author.twitch_url" class="Vlt-btn--small" />
      <YouTubeSocialButton :link="author.youtube_url" class="Vlt-btn--small" />
      <WebsiteSocialButton
        :link="author.website_url || localePath(`/authors/${author.username}`)"
        class="Vlt-btn--small"
      />
    </footer>
  </div>
  <!-- <fragment>
    <div v-if="author.error" class="Vlt-col Author-col">
      <div class="Vlt-card Vlt-bg-white">
        <div class="Vlt-card__image Vlt-gradient--blue-to-purple">
          <img
            class="Vlt-card__image__icon"
            src="../../assets/images/placeholder.png"
            :alt="author.name"
          />
        </div>
        <div class="Vlt-card__header">
          <h4 class="Vlt-truncate">
            {{ author.name }}
          </h4>
        </div>
        <div class="Vlt-card__content">
          This author has yet to make a profile!
        </div>
      </div>
    </div>
    <div
      v-else
      class="Vlt-col Author-col"
      vocab="http://schema.org/"
      typeof="Person"
    >
      <div class="Vlt-card Vlt-bg-white">
        <div
          v-if="author.image_url"
          class="Vlt-card__image Vlt-gradient--blue-to-purple"
        >
          <img
            class="Vlt-card__image__icon"
            :src="author.image_url"
            property="image"
            :alt="`Profile pic of ${author.name}`"
          />
        </div>
        <div class="Vlt-card__header">
          <h4 class="Vlt-truncate">
            <span property="name">{{ author.name }}</span>
            <small v-if="author.team" class="Vlt-grey-dark" property="jobTitle">
              {{ author.title || 'Vonage Team Member' }}
            </small>
            <small
              v-else-if="author.alumni"
              class="Vlt-grey-dark"
              property="jobTitle"
            >
              Vonage Alumni
            </small>
            <small
              v-else-if="author.spotlight"
              class="Vlt-grey-dark"
              property="jobTitle"
            >
              Spotlight Author
            </small>
            <small v-else class="Vlt-grey-dark" property="jobTitle">
              Guest Writer
            </small>
          </h4>
        </div>
        <div v-if="author.bio" class="Vlt-card__content" property="description">
          {{ author.bio }}
        </div>
        <div class="Vlt-card__content Vlt-center">
          <TwitterSocialButton
            :link="
              author.twitter ? `https://twitter.com/${author.twitter}` : ''
            "
            class="Vlt-btn--small"
          />
          <FacebookSocialButton
            :link="author.facebook_url"
            class="Vlt-btn--small"
          />
          <GitHubSocialButton
            :link="author.github_url"
            class="Vlt-btn--small"
          />
          <StackOverflowSocialButton
            :link="author.stackoverflow_url"
            class="Vlt-btn--small"
          />
          <LinkedInSocialButton
            :link="author.linkedin_url"
            class="Vlt-btn--small"
          />
          <TwitchSocialButton
            :link="author.twitch_url"
            class="Vlt-btn--small"
          />
          <YouTubeSocialButton
            :link="author.youtube_url"
            class="Vlt-btn--small"
          />
          <WebsiteSocialButton
            :link="
              author.website_url || localePath(`/authors/${author.username}`)
            "
            class="Vlt-btn--small"
          />
        </div>
        <div class="Vlt-card__footer Vlt-card__footer--short Vlt-right">
          <NLink
            :to="localePath(`/authors/${author.username}`)"
            class="Vlt-btn Vlt-btn--small Vlt-btn--secondary"
          >
            Author page
          </NLink>
          <a
            v-if="author.spotlight"
            href="https://developer.nexmo.com/spotlight?utm_source=blog&utm_medium=deved&utm_campaign=spotlight"
            target="_blank"
            class="Vlt-btn Vlt-btn--small Vlt-btn--secondary"
          >
            Learn more about the Spotlight Programme
          </a>
        </div>
      </div>
    </div>
  </fragment> -->
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>
