<template>
  <div class="text">
    <h4 class="list-entry-heading" v-if="!url">
      {{ heading }}
    </h4>

    <a v-if="url" :href="url" target="_blank">
      {{ heading }}
    </a>

    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'list-entry',
    props: {
      heading: String,
      text: String,
      url: String,
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/sass/mixins";


  p {
    margin: 0;
  }

  .list-entry-heading, a {
    margin: 0;
    font-family: $font-rubik-bold;
    font-size: $font-size-s;
  }

</style>
