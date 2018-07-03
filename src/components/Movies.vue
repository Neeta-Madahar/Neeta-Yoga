<template>
  <div id="movies" class="container">
    <h2>{{ title }} <i class="icon-floral_1" aria-hidden="true"></i></h2>

    <p>{{ text }}</p>

    <img v-bind:src="image.url" alt="" class="image">

    <div v-for="(movie, index) in this.movies" v-bind:key="`movie-${index}`" class="item">
      <a v-bind:href="movie.url" target="_blank">{{movie.title}}</a> ({{movie.year}})
    </div>
  </div>
</template>

<script>
  export default {
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
