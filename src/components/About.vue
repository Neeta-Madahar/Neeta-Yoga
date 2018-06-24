<template>
  <div id="about">
    <div class="row">
      <div class="col-md">
        <h2>{{ title }}</h2>

        <div v-html="text"></div>
      </div>
      <div class="col-md">
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
