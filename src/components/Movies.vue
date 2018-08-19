<template>
  <div id="movies" class="container">
    <section-title :flower="1">{{ title }}</section-title>

    <img :src="image.url" alt="" class="image">

    <p>{{ text }}</p>

    <div v-for="(movie, index) in movies" :key="`movie-${index}`" class="item">
      <a :href="movie.url" target="_blank">{{movie.title}}</a> ({{movie.year}})
    </div>
  </div>
</template>

<script>
  import SectionTitle from "../common/SectionTitle";
  export default {
    components: {SectionTitle},
    name: 'movies',
    props: {
      title: String,
      movies: Array,
      image: Object,
      text: String,
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/sass/mixins";

  #movies {
    @include sm {
      color: $color-white;
    }
  }

  a {
    @include sm {
      color: $color-white !important;
    }

    &:focus {
      outline: 2px solid $color-white;
    }
  }

  p {
    color: $color-orange;

    @include sm {
      color: $color-white;
    }
  }

  .item {
    margin: 20px 0;
  }

  .image {
    @include sm {
      display: none;
    }
  }
</style>
