<template>
  <div id="videos">
    <h2>{{title}}</h2>

    <div v-for="(video, index) in this.videos" v-bind:key="`video-${index}`" class="item">
      <div class="text">
        <a v-bind:href="`https://www.youtube.com/watch?v=${video.youtube}`">{{video.title}}</a>
        <div>
          {{video.description}}
        </div>
      </div>

      <div class="video">
        <iframe width="100%" v-bind:src="`https://www.youtube.com/embed/${video.youtube}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
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
  @import "../assets/sass/variables";

  .item {
    margin: 20px 0;
    display: flex;
  }

  .video {
    max-width: 350px;
  }

  .text {
    padding: 40px;
  }

  a {
    font-family: $font-rubik;
  }

  iframe {
    max-width: 100%;
  }
</style>
