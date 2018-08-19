<template>
  <div id="testimonials">
    <section-title :flower="3">{{ title }}</section-title>

    <div class="row">
      <div class="col-xs-12 col-sm-offset-6">
        <floral-image :image="image" />
      </div>
    </div>

    <carousel v-bind="carouselSettings">
      <slide v-for="(testimonial, index) in testimonials" :key="`testimonial-${index}`">
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
  import FloralImage from '../common/FloralImage.vue';
  import SectionTitle from '../common/SectionTitle.vue';


  export default {
    name: 'testimonials',
    props: {
      title: String,
      image: Object,
      testimonials: Array,
    },
    data: function () {
      return {
        carouselSettings: {
          autoplay: true,
          paginationEnabled: false,
          navigationEnabled: true,
          navigationNextLabel: "",
          navigationPrevLabel: "",
          perPageCustom: [[320, 1]],
          autoplayTimeout: 3500,
          loop: true
        }
      }
    },
    components: {
      FloralImage,
      Carousel,
      Slide,
      SectionTitle
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/sass/mixins";

  #testimonials {
    overflow: hidden;
  }

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
</style>
