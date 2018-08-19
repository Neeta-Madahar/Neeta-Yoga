<template>
  <section class="text">
    <h4 class="list-entry-heading" v-if="!url">
      {{ heading }}
    </h4>

    <a class="list-entry-heading" v-if="url" :href="url" target="_blank">
      {{ heading }}
    </a>

    <p>
      {{ text }}
    </p>
  </section>
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

  .list-entry-heading {
    margin-bottom: 5px;
    font-family: $font-rubik-bold;
    font-size: $font-size-s;

    @include sm {
      margin-bottom: 10px;
    }
  }

  a.list-entry-heading {
    display: inline-block;
  }
</style>
