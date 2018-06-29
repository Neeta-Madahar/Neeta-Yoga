<template>
  <div id="articles">
    <h3>{{title}}</h3>

    <div v-for="(link, index) in this.links" v-bind:key="`article-${index}`" class="item">
      <a v-bind:href="link.url" target="_blank">{{link.title}}</a>
      <div>{{link.description}}</div>
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
  @import "../assets/sass/variables";

  .item {
    margin: 20px 0;
  }

  a {
    font-family: $font-rubik;
  }
</style>
