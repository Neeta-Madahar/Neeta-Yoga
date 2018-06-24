<template>
  <div id="yoga">
    <h2>{{ title }}</h2>

    <h3>Public</h3>

    <div v-for="(day, index) in this.lessons" v-bind:key="`day-${index}`">
      <h4>{{ day.day }}</h4>

      <div v-for="(lesson, index) in day.lessons" v-bind:key="`lesson-${index}`" class="lesson">
        {{ lesson }}
      </div>
    </div>

    <h3>Private</h3>

    <div v-html="privateText"></div>
  </div>
</template>

<script>
  export default {
    name: 'yoga',
    props: {
      privateText: String,
      lessons: Array,
      title: String,
    },
  }
</script>

<style lang="scss" scoped>
  .lesson {
    margin-bottom: 20px;
  }
</style>
