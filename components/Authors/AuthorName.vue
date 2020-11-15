<template>
  <fragment>
    <span v-if="author.error">{{ author.name }}</span>
    <NLink
      v-else
      class="font-bold"
      :to="localePath(`/authors/${author.username}`)"
    >
      {{ author.name }}
    </NLink>
  </fragment>
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
