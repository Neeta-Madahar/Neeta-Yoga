<template>
  <div class="floral-image" :class="isSmall ? 'floral-image--small' : ''">
    <img v-bind="imageAttributes" class="image">
    <img v-if="image && !isSmall" src="../assets/images/flower-power.svg" alt="" class="flowers">
    <img v-if="image && isSmall" src="../assets/images/flower-power-small.svg" alt="" class="flowers flowers--small">
  </div>
</template>

<script>
  export default {
    name: 'floral-image',
    props: {
      image: Object,
      isSmall: Boolean
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

<style lang="scss" scoped>
  @import "../assets/sass/mixins";

  .floral-image {
    position: relative;
    text-align: center;
    padding: 45px;
    margin: 0 auto;
  }

  .floral-image--small {
    padding: 27px;
  }

  .image {
    border-radius: 50%;
  }

  .flowers {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;

    @include sm {
      left: 0;
      transform: translateX(0);
    }
  }
</style>
