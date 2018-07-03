<template>
  <div class="floral-image">
    <img v-bind="imageAttributes" class="image">
    <img v-if="image" src="../assets/images/flower-power.svg" alt="" class="flowers">
  </div>
</template>

<script>
  export default {
    name: 'floral-image',
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

<style lang="scss" scoped>
  @import "../assets/sass/mixins";

  .floral-image {
    position: relative;
    text-align: center;
    padding: 45px;
    max-width: 355px;
    margin: 0 auto;
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

    @include sm {
      left: 0;
      transform: translateX(0);
    }
  }

</style>
