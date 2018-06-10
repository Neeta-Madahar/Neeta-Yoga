<template>
  <div id="resource">
    <h2>{{title}}</h2>

    <div v-for="(event, index) in this.events" v-bind:key="`event-${index}`">
      <div>
        <floral-image v-bind:image="event.image" />
      </div>

      <div>
        <h3>{{event.title}}</h3>
        {{event.description}}
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

</style>