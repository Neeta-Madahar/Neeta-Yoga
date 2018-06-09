<template>
  <div id="resource">
    <h2>{{title}}</h2>

    <h3>Web links</h3>

    <a v-bind:href="link.url" v-for="(link, index) in this.links" v-bind:key="`resource-${index}`">
      <div>
        <h4>{{link.title}}</h4>
        {{link.description}}
      </div>

      <div>
        <img v-bind="imageAttributes">
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'resource',
    props: {
      title: String,
      links: Array,
      image: Object,
    },
    computed: {
      imageAttributes: function() {
        return {
          src: this.image.url,
          alt: this.image.alt
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>