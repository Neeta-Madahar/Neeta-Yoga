<template>
  <div id="testimonials">
    <h2>{{ title }}</h2>

    <floral-image v-bind:image="image" />

    <carousel :autoplay="true" :navigationEnabled="true" :perPageCustom="[[320, 1]]">
      <slide v-for="(testimonial, index) in testimonials" v-bind:key="`testimonial-${index}`">
        <blockquote>
          <q>{{ testimonial.text }}</q>

          <footer>
            {{ testimonial.name }}
          </footer>
        </blockquote>
      </slide>
    </carousel>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';
  import FloralImage from './FloralImage.vue';

  export default {
    name: 'testimonials',
    props: {
      title: String,
      image: Object,
      testimonials: Array,
    },
    components: {
      FloralImage,
      Carousel,
      Slide
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/sass/variables";

  .VueCarousel {
    margin-left: auto;
    margin-right: 40px;
    width: 700px;
  }
</style>
