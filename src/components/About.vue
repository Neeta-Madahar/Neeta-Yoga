<template>
  <div class="about">
    <div class="row">
      <div class="col-md">
        <img v-bind="imageAttributes">
      </div>
      <div class="col-md">
        <h2>{{ title }}</h2>

        <div v-html="text"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    props: {
      title: String,
      text: String,
      image: Object,
    },
    computed: {
      imageAttributes: function() {
        return {
          src:this.image.url,
          alt:this.image.alt
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>