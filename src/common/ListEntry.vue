<template>
  <section class="text">
    <h4 class="list-entry-heading" v-if="!url">
      {{ heading }}
    </h4>

    <a class="list-entry-heading" v-if="url" :href="url" target="_blank" rel="noopener noreferrer">
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
    margin-bottom: 15px;
    font-family: $font-rubik-bold;
    font-size: $font-size-s;
  }

  .text {
    @include sm {
      flex-grow: 1;
      padding: 0 40px 0 0;
      margin-bottom: 10px;
    }
  }

  a.list-entry-heading {
    display: inline-block;
    text-decoration: none;

    @include hover-focus {
      text-decoration: underline;
      outline: none;
    }
  }
</style>
