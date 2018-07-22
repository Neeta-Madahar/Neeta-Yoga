<template>
  <div id="videos">
    <h3>{{title}}</h3>

    <div v-for="(video, index) in videos" :key="`video-${index}`" class="item">
      <list-entry :heading="video.title" :text="video.description" />

      <div class="video">
        <iframe width="100%" :src="`https://www.youtube.com/embed/${video.youtube_id}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
      </div>
    </div>
  </div>
</template>

<script>
  import ListEntry from '../common/ListEntry';
  export default {
    name: 'videos',
    components: {
      ListEntry,
    },
    props: {
      title: String,
      videos: Array,
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/sass/mixins";

  .item {
    margin: 20px 0;
    display: flex;
    flex-direction: column-reverse;

    @include sm {
      flex-direction: row;
    }
  }

  .video {
    max-width: 350px;
  }

  .text {
    padding-top: 20px;

    @include sm {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 40px;
    }
  }

  a {
    font-family: $font-rubik;
  }

  iframe {
    max-width: 100%;
  }
</style>
