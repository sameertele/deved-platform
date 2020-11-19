<template>
  <main class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <Breadcrumbs />
    <section
      class="grid grid-cols-1 gap-y-6 md:gap-6 md:grid-cols-4 xl:grid-cols-5"
    >
      <aside class="static col-span-1 row-span-2">
        <Author :author="post.author" type="card" />
      </aside>
      <div class="col-span-3 row-span-5">
        <article
          class="bg-white rounded-lg shadow"
          vocab="http://schema.org/"
          typeof="BlogPosting"
          property="mainEntityOfPage"
        >
          <figure class="overflow-hidden rounded-t-lg">
            <div class="card-figure">
              <img property="image" :src="post.thumbnail" alt="post.title" />
            </div>
          </figure>
          <header class="px-4 my-4">
            <h1 class="flex text-xl font-medium truncate" property="headline">
              {{ post.title }}
              <meta property="publisher" content="@VonageDev" />
            </h1>
            <main class="mt-4 text-grey-darker">
              <div
                v-if="post.updated_at"
                class="mb-2 text-sm truncate"
                property="dateModified"
                :content="post.updated_at"
              >
                Updated {{ post.updated_at | moment('dddd, MMMM Do YYYY') }}
              </div>
              <div
                :class="{
                  'text-xs ': !!post.updated_at,
                  'text-sm': !post.updated_at,
                }"
                class="mb-4 truncate"
                property="datePublished"
                :content="post.published_at"
              >
                Published {{ post.published_at | moment('dddd, MMMM Do YYYY') }}
              </div>
              <div class="text-sm text-grey-dark">
                <svg
                  class="inline w-3 fill-current"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub icon</title>
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  /></svg
                ><ImproveLink :post="post" /> (<RevisionsLink :post="post" />)
              </div>
            </main>
            <footer class="flex justify-between py-2 mt-2 border-t">
              <Tags :tags="post.tags" />
              <Category
                :category="post.categoryObject"
                class="Category--border"
              />
            </footer>
          </header>
          <main class="px-4 my-4">
            <section v-if="post.spotlight" class="mb-4">
              <Spotlight class="spotlight" />
            </section>
            <nuxt-content
              property="articleBody"
              class="mx-auto prose-sm prose sm:prose lg:prose-lg"
              :document="post"
            />
          </main>
          <footer class="p-4">
            <section v-if="post.comments" class="py-4 border-t">
              Comments currently disabled.
            </section>
            <section v-if="post.spotlight" class="pt-4 border-t">
              <SpotlightFooter class="spotlight" />
            </section>
          </footer>
        </article>
      </div>
      <aside
        class="sticky col-span-1 p-4 bg-white rounded-lg shadow top-4 asides"
      >
        <section>
          <TableOfContents
            :toc="post.toc"
            :levels="post.toc.length > 10 ? [2] : [2, 3]"
          />
        </section>
        <section>
          <RelatedPosts
            :slug="post.slug"
            :terms="[...post.tags, post.category]"
          />
        </section>
      </aside>
    </section>
  </main>
</template>

<script>
import config from '~/modules/config'

export default {
  async asyncData({ $content, app, params, error }) {
    try {
      const post = await $content(`blog/${app.i18n.locale}`, params.slug)
        .where({ published: { $ne: false } })
        .fetch()
        .catch((err) => {
          error({ statusCode: 404, message: 'Page not found', err })
        })

      return {
        post,
        baseUrl: config.baseUrl,
      }
    } catch (err) {
      error({ statusCode: 404, message: 'Page not found', err })
    }
  },

  head() {
    const canonicalUrl =
      this.post.canonical ||
      `${this.baseUrl}${this.localePath(this.post.route)}`

    return {
      title: `${this.post.title}`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: `developer tutorials, developer content, apis, communication apis, ${
            this.post.category
          }, ${this.post.tags.join(', ')}`,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
        ...this.postMeta(),
      ],
      link: [
        {
          rel: 'canonical',
          href: canonicalUrl,
        },
      ],
    }
  },

  methods: {
    postMeta() {
      let thumbnail = this.post.thumbnail

      if (typeof thumbnail !== 'undefined' && !thumbnail.startsWith('http')) {
        thumbnail = `${this.baseUrl}${thumbnail}`
      }

      const meta = [
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `${this.baseUrl}${this.post.route}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.post.title}${config.baseSplitter}${config.baseTitle}`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${thumbnail || '/images/Vonage-learn.png'}`,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: `${this.post.title}${config.baseSplitter}${config.baseBrand}`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.baseUrl}${this.post.route}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.post.title}${config.baseSplitter}${config.baseTitle}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${thumbnail || '/images/Vonage-learn.png'}`,
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: `${this.post.title}${config.baseSplitter}${config.baseBrand}`,
        },
        {
          hid: 'og:updated_time',
          property: 'og:updated_time',
          content: this.post.updated_at || this.post.published_at,
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'article:published_time',
          property: 'article:published_time',
          content: this.post.published_at,
        },
        {
          hid: 'article:modified_time',
          property: 'article:modified_time',
          content: this.post.updated_at || this.post.published_at,
        },
        {
          hid: 'article:author',
          property: 'article:author',
          content: this.post.author,
        },
        {
          hid: 'profile:username',
          property: 'profile:username',
          content: this.post.author,
        },
        {
          hid: 'article:section',
          property: 'article:section',
          content: this.post.category,
        },
        ...this.post.tags.map((tag) => ({
          hid: `article:tag:${tag}`,
          property: 'article:tag',
          content: tag,
        })),
        ...this.$i18n.locales.map((l) => {
          const type =
            l.code === this.$i18n.locale ? 'og:locale' : 'og:locale:alternate'

          return {
            hid: `${type}${l.code === this.$i18n.locale ? '' : `:${l.code}`}`,
            property: type,
            content: l.iso,
          }
        }),
      ]

      return meta
    },
  },
}
</script>

<style scoped>
.nuxt-content .nuxt-content-highlight {
  margin: 0 -30px;
}

.nuxt-content .nuxt-content-highlight pre {
  padding-left: 30px;
  padding-right: 30px;
}

.nuxt-content img {
  @apply rounded-lg;
  margin: 0 auto;
}

.spotlight >>> img {
  @apply rounded-lg;
  @apply mx-auto;
  @apply mb-4;
}

.asides section:not(:first-child) >>> h4 {
  @apply mt-4;
}

.asides >>> h4 {
  @apply uppercase;
}

.top-4 {
  top: 1rem;
}
</style>
