<template>
  <div id="videos">
    <h2>{{title}}</h2>

    <div v-for="(video, index) in this.videos" v-bind:key="`video-${index}`">
      <div>
        <a v-bind:href="`https://www.youtube.com/watch?v=${video.youtube}`">{{video.title}}</a>
        {{video.description}}
      </div>

      <div>
        <iframe width="560" height="315" v-bind:src="`https://www.youtube.com/embed/${video.youtube}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'videos',
    props: {
      title: String,
      videos: Array,
    }
  }
</script>

<style lang="scss" scoped>

iframe {
  max-width: 100%;
}

</style>
