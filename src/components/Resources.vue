<template>
  <div id="resource">
    <h2>{{title}}</h2>

    <h3>Web links</h3>

    <div v-bind:href="link.url" v-for="(link, index) in this.links" v-bind:key="`resource-${index}`" class="item">
      <div class="text">
        <a href="link.url" target="_blank">{{link.title}}</a>
        <div class="description">
          {{link.description}}
        </div>
      </div>

      <div class="image">
        <img v-bind:src="link.image.url" v-bind:alt="link.image.alt">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'resource',
    props: {
      title: String,
      links: Array,
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/sass/mixins";

  a {
    font-family: $font-rubik;
  }

  .description {
    color: $color-grey;
    font-size: 16px;
  }

  .item {
    display: flex;
    margin-bottom: 20px;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .image {
    text-align: center;
    width: 250px;
    margin: 0 auto;

    @include sm {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>
