<template>
  <div id="events">
    <section-title :flower="5">{{ title }}</section-title>

    <div v-for="(event, index) in this.events" :key="`event-${index}`" class="item">
      <div class="text">
        <h3>{{event.title}}</h3>
        <div class="description">
          {{event.description}}
        </div>
      </div>

      <div class="image">
        <floral-image :image="event.image" :isSmall="true" />
      </div>
    </div>
  </div>
</template>

<script>
  import FloralImage from "../common/FloralImage";
  import SectionTitle from "../common/SectionTitle";

  export default {
    components: {
      SectionTitle,
      FloralImage},
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
    font-size: 18px;

    @include sm {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 40px;
    }
  }

  .description {
    font-style: italic;
  }

  h3 {
    margin: 0;
    font-size: 18px !important;
    text-align: center;
    margin-bottom: 15px;

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
    padding: 0;
  }
</style>
