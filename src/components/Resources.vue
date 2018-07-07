<template>
  <div id="resource">
    <section-title :flower="2">{{ title }}</section-title>

    <h3>Web links</h3>

    <div :href="link.url" v-for="(link, index) in links" :key="`resource-${index}`" class="item">
      <div class="text">
        <a href="link.url" target="_blank">{{link.title}}</a>
        <div class="description">
          {{link.description}}
        </div>
      </div>

      <div class="image">
        <img :src="link.image.url" :alt="link.image.alt">
      </div>
    </div>
  </div>
</template>

<script>
  import Articles from './Articles.vue';
  import Videos from './Videos.vue';
  import SectionTitle from '../common/SectionTitle.vue';

  export default {
    name: 'resource',
    components: {
      Articles,
      Videos,
      SectionTitle
    },
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
