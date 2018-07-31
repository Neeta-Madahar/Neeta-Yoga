<template>
  <div id="events">
    <section-title :flower="5">{{ title }}</section-title>

    <div v-for="(event, index) in this.events" :key="`event-${index}`" class="item">
      <list-entry :heading="event.title" :text="event.description" />

      <div class="image">
        <floral-image :image="event.image" :isSmall="true" />
      </div>
    </div>
  </div>
</template>

<script>
  import FloralImage from "../common/FloralImage";
  import SectionTitle from "../common/SectionTitle";
  import ListEntry from "../common/ListEntry";

  export default {
    components: {
      SectionTitle,
      FloralImage,
      ListEntry,
    },
    name: 'events',
    props: {
      title: String,
      events: Array,
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/sass/mixins";

  .item {
    display: flex;
    margin: 40px 0;
    flex-direction: column;

    @include sm {
      flex-direction: row;
    }
  }

  .image {
    width: 200px;
    margin: 0 auto;
    text-align: center;

    @include sm {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .text {
    font-size: $font-size-body-mobile;

    @include sm {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 40px;
    }
  }

  h3 {
    margin: 0;
    font-size: 18px !important;
    text-align: center;
    margin-bottom: 15px;
    font-family: $font-raleway;

    @include sm {
      margin-bottom: 0;
    }
  }

  .image {
    display: none;

    @include sm {
      display: block;
      max-width: 250px;
    }
  }

  .floral-image {
    width: 175px;
    height: 175px;
  }
</style>
