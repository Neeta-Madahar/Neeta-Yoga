<template>
  <div id="events">
    <h2>{{title}}</h2>

    <div v-for="(event, index) in this.events" v-bind:key="`event-${index}`" class="item">
      <div class="text">
        <h3>{{event.title}}</h3>
        <div class="description">
          {{event.description}}
        </div>
      </div>

      <div class="image">
        <floral-image v-bind:image="event.image" />
      </div>
    </div>
  </div>
</template>

<script>
  import FloralImage from "./FloralImage";

  export default {
    components: {FloralImage},
    name: 'events',
    props: {
      title: String,
      events: Array,
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/sass/variables";

  .item {
    display: flex;
    margin: 40px 0;
  }

  .image {
    width: 250px;
    text-align: center;
  }

  .text {
    padding: 40px;
    font-size: 18px;
  }

  .description {
    font-style: italic;
  }

  h3 {
    margin: 0;
    text-decoration: underline;
    font-family: $font-raleway;
    font-size: 18px !important;
  }
</style>
