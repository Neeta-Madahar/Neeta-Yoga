<template>
  <div id="testimonials">
    <h2>{{ title }}</h2>

    <floral-image v-bind:image="image" />

    <div class="slider">
      <div v-for="(testimonial, index) in testimonials" v-bind:key="`testimonial-${index}`">
        {{ testimonial.text }}

        {{ testimonial.name }}
      </div>
    </div>
  </div>
</template>

<script>
  import FloralImage from './FloralImage.vue';

  export default {
    name: 'testimonials',
    props: {
      title: String,
      image: Object,
      testimonials: Array,
    },
    components: {
      FloralImage
    }
  }
</script>

<style lang="scss" scoped>

</style>