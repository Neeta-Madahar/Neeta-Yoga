<template>
  <div id="contact">
    <h2>{{ title }}</h2>

    <p>{{ text }}</p>

    <button>Pop me a message</button>
  </div>
</template>

<script>
  export default {
    name: 'contact',
    props: {
      title: String,
      text: String,
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/sass/mixins";

  button {
    padding: 20px 10px;
    border: 2px solid;
    transition: background-color .3s ease;
    background-color: transparent;

    @include hover-focus {
      color: $color-white;
    }
  }
</style>
