<template>
  <section id="articles">
    <h3>{{title}}</h3>

    <div v-for="(article, index) in articles" :key="`article-${index}`" class="item">
      <list-entry :heading="article.title" :text="article.description" :url="article.url"  />
    </div>

  </section>
</template>

<script>
  import ListEntry from "../common/ListEntry";
  export default {
    name: 'articles',
    components: {
      ListEntry,
    },
    props: {
      title: String,
      articles: Array,
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
    color: $color-orange !important;
  }
</style>
