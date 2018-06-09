<template>
  <div class="testimonials">
    <div class="row">
      <h2>{{ title }}</h2>

      <img v-bind="imageAttributes">

      <div class="slider">
        <div v-for="(testimonial, index) in testimonials" v-bind:key="`testimonial-${index}`">
          {{ testimonial.text }}

          {{ testimonial.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'testimonials',
    props: {
      title: String,
      image: Object,
      testimonials: Array,
    },
    computed: {
      imageAttributes: function() {
        return {
          src: this.image.url,
          alt: this.image.alt
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>