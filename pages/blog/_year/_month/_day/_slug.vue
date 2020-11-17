<template>
  <main class="max-w-screen-xl px-4 mx-auto">
    <Breadcrumbs />
    <section
      class="grid grid-cols-1 gap-y-6 md:gap-6 md:grid-cols-4 xl:grid-cols-5"
    >
      <aside class="col-span-1 border">
        <Author :author="post.author" type="card" />
      </aside>
      <div class="col-span-3 row-span-2">
        <article class="overflow-hidden bg-white rounded-lg shadow">
          <figure>
            <div class="card-figure">
              <img :src="post.thumbnail" alt="post.title" />
            </div>
          </figure>
          <header class="px-4 my-4">
            <h3 class="flex text-xl font-medium truncate">
              {{ post.title }}
            </h3>
            <main class="mt-4 text-xs text-grey-darker">
              <div class="truncate">
                Published {{ post.published_at | moment('dddd, MMMM Do YYYY') }}
              </div>
              <div>
                <ImproveLink :post="post" /> (<RevisionsLink :post="post" />)
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
            <nuxt-content
              class="mx-auto prose-sm prose sm:prose lg:prose-lg"
              :document="post"
            />
          </main>
          <footer class="px-4 my-4">footer</footer>
        </article>
      </div>
      <aside class="col-span-1 border">author</aside>
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
          content: `${thumbnail || '/images/generic-social-card.png'}`,
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
          content: `${thumbnail || '/images/generic-social-card.png'}`,
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
.Blog__Category {
  text-transform: uppercase;
  font-weight: 600;
  margin: 1rem auto;
  display: inline-block;
}

.Redirect {
  margin: 3rem auto 1rem auto;
}

.Blog__post h1 {
  margin: 1rem auto;
  font-size: 3rem;
}

.Blog__post header {
  margin-bottom: 24px;
}

.Blog__post img {
  border-radius: 6px;
}

.Blog__post .nuxt-content {
  padding: auto 50px;
}

.Blog__post .nuxt-content >>> a,
.Blog__post .nuxt-content >>> li,
.Blog__post .nuxt-content >>> p {
  font-size: 16px;
  line-height: 1.55em;
}

.Blog__post .nuxt-content >>> ol,
.Blog__post .nuxt-content >>> ul {
  list-style: none;
  margin-bottom: 16px;
  padding-left: 16px;
}

.Blog__post .nuxt-content >>> ol {
  counter-reset: list;
  padding-left: 20px;
}

.Blog__post .nuxt-content >>> li {
  margin-bottom: 0.2em;
  position: relative;
  margin-left: 24px;
}

.Blog__post .nuxt-content >>> ul li:before {
  color: #000;
  content: '•';
  left: -16px;
  position: absolute;
  top: 0em;
}

.Blog__post .nuxt-content >>> ol li:before {
  color: #000;
  content: counter(list) '.';
  counter-increment: list;
  font-weight: 600;
  left: -20px;
  position: absolute;
  top: 0em;
}

.Blog__post .nuxt-content >>> h2 {
  margin-top: 25px;
}

.Blog__post .nuxt-content >>> h3 {
  margin-top: 25px;
}

.Blog__post .nuxt-content >>> pre {
  border-radius: 8px;
  padding: 1em;
  background: #131415;
  color: #c2c4cc;
  margin: 35px -30px;
  font-size: 16px;
  line-height: 1.4;
  padding-left: 27px;
}

.Blog__post .nuxt-content >>> pre code {
  background: #131415;
  color: #c2c4cc;
}

.Blog__post .nuxt-content >>> p {
  text-align: justify;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  -ms-word-break: normal;
  word-break: normal;
}

.Blog__post .nuxt-content >>> blockquote {
  margin: 24px auto;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: inset 0 0 0 1px #9b9da3;
  display: -ms-flexbox;
  display: flex;
  opacity: 1;
  overflow: hidden;
  padding: 20px;
  padding-left: 21px;
  position: relative;
  text-align: left;
  transition: all 0.3s ease-out;
}

.Blog__post .nuxt-content >>> blockquote:before {
  bottom: 0;
  content: '';
  left: 0;
  position: absolute;
  top: 0;
  width: 5px;
  background-color: #871fff;
}

.Blog__post .nuxt-content >>> blockquote p {
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  -ms-flex: 2;
  flex: 2;
  margin-left: 4px;
  word-break: break-word;
}

.Blog__post .nuxt-content >>> p code {
  border: 1px solid silver;
  background: #f9f9fa;
}

.Blog__post .nuxt-content >>> .language-diff .token {
  width: 100%;
  display: inherit;
  white-space: pre-wrap;
}

.Blog__post .nuxt-content >>> .language-diff .token.inserted {
  color: #e84545;
  background: #270404;
}

.Blog__post .nuxt-content >>> .language-diff .token.deleted {
  color: #86d8b9;
  background: #021a10;
}

.Blog__post .nuxt-content >>> p img {
  display: block;
  margin: 24px auto;
  max-height: 50vh;
  max-width: 100%;
}

@media only screen and (max-width: 767px) {
  .Blog__post .nuxt-content >>> pre[class*='language-'] {
    margin: 24px 10px;
    padding-left: 12px;
  }
}

.Vlt-grid >>> .Author-col {
  flex: 0 0 66.66%;
  max-width: 66.66%;
}
</style>
