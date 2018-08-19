<template>
  <section id="articles">
    <h3>{{ title }}</h3>

    <div :href="link.url" v-for="(link, index) in links" :key="`resource-${index}`" class="item">
      <list-entry :heading="link.title" :text="link.description" :url="link.url" />

      <div class="image">
        <img :src="link.image.url" :alt="link.image.alt">
      </div>
    </div>
  </section>
</template>

<script>
  import Articles from './Articles.vue';
  import Videos from './Videos.vue';
  import SectionTitle from '../common/SectionTitle.vue';
  import ListEntry from "../common/ListEntry";

  export default {
    name: 'resource',
    components: {
      Articles,
      Videos,
      SectionTitle,
      ListEntry
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
    @include sm {
      font-size: $font-size-body
    }
  }

  .item {
    display: flex;
    margin-bottom: 50px;
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
      flex: 0 0 200px;
      max-width: 200px;
    }

    @include md {
      flex-basis: 250px;
      max-width: 250px;
    }

    img {
      max-width: 100%;
    }
  }
</style>
