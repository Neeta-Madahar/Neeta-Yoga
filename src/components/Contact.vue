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

</style>