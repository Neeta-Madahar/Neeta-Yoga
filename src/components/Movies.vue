<template>
  <div id="movies" class="container">
    <h2>{{title}}</h2>

    <p >{{ text }}</p>

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
      image: String,
      text: String,
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/sass/mixins";

  #movies {
    color: $color-white;
  }

  a {
    color: $color-white !important;
  }

  .item {
    margin: 20px 0;
  }
</style>
