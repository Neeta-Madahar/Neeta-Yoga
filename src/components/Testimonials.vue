<template>
  <div id="testimonials">
    <h2>{{ title }} <i class="icon-floral_3" aria-hidden="true"></i></h2>

    <div class="row">
      <div class="col-sm-offset-6">
        <floral-image v-bind:image="image" />
      </div>
    </div>

    <carousel :autoplay="true" :paginationEnabled="false" :navigationEnabled="true" :perPageCustom="[[320, 1]]">
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
  @import "../assets/sass/mixins";

  blockquote {
    margin: 0;
  }

  footer {
    text-align: right;
  }

  q {
    margin-bottom: 30px;
    display: inline-block;
  }

  .VueCarousel {
    margin: 0 30px;

    @include sm {
      margin-left: auto;
      margin-right: 40px;
      max-width: 700px;
    }
  }
</style>
