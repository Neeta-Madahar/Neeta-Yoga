<template>
  <div class="floral-image">
    <img v-bind="imageAttributes">
  </div>
</template>

<script>
  import FloralImage from './FloralImage.vue';

  export default {
    name: 'floral-image',
    component: {
      FloralImage
    },
    props: {
      image: Object,
    },
    computed: {
      imageAttributes: function() {
        return {
          src: this.image.url,
          alt: this.image.alt || ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
