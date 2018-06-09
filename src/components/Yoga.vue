<template>
  <div class="yoga">
    <div class="row">
      <div class="col">
        <h3>Public</h3>

        <div v-for="(day, index) in this.lessons" v-bind:key="`day-${index}`">
          <h4>{{ day.day }}</h4>

          <div v-for="(lesson, index) in day.lessons" v-bind:key="`lesson-${index}`">
            <div>{{ lesson }}</div>
          </div>
        </div>

        <h3>Private</h3>

        <div v-html="privateText"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'yoga',
    props: {
      privateText: String,
      lessons: Array,
    },
  }
</script>

<style lang="scss" scoped>

</style>