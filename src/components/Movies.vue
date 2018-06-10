<template>
  <div id="movies" v-bind:style="`background-image: url(${image});`">
    <h2>{{title}}</h2>

    <div v-for="(movie, index) in this.movies" v-bind:key="`movie-${index}`">
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
    }
  }
</script>

<style lang="scss" scoped>

</style>