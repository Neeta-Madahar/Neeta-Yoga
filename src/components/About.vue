<template>
  <div id="about">
    <h2>{{ title }} <i class="icon-floral_1" aria-hidden="true"></i></h2>
    <div class="row">
      <div class="col-xs-12 col-sm">
        <div v-html="text"></div>
      </div>
      <div class="col-xs-12 col-sm">
        <floral-image v-bind:image="image" />
      </div>
    </div>
  </div>
</template>

<script>
  import FloralImage from './FloralImage.vue';

  export default {
    name: 'about',
    props: {
      title: String,
      text: String,
      image: Object,
    },
    components: {
      FloralImage
    }
  }
</script>

<style lang="scss" scoped>

</style>
