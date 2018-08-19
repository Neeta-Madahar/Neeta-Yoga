<template>
  <section id="videos">
    <h3>{{title}}</h3>

    <div v-for="(video, index) in videos" :key="`video-${index}`" class="item">
      <list-entry :heading="video.title" :text="video.description" />

      <div class="video">
        <iframe width="100%" :src="video.video_url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
      </div>
    </div>
  </section>
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
    flex: 0 1 250px;
    max-width: 250px;
    margin: 0 auto;

    @include sm {
      flex: 0 0 267px;
      max-width: 267px;
      margin: 0;
    }
  }

  .text {
    padding-top: 20px;

    @include sm {
      padding-top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  a {
    font-family: $font-rubik;
  }

  iframe {
    max-width: 100%;
  }
</style>
