<template>
  <div id="articles">
    <h2>{{title}}</h2>

    <div v-for="(link, index) in this.links" v-bind:key="`article-${index}`">
      <a v-bind:href="link.url" target="_blank">{{link.title}}</a>
      {{link.description}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'articles',
    props: {
      title: String,
      links: Array,
      image: Object,
    },
    computed: {
      imageAttributes: function() {
        return {
          src: this.image.url,
          alt: this.image.alt
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>