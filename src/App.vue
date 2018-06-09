<template>
  <div id="app">
    <Hero />

    <div v-for="component in this.data" v-bind:key="component.slice_type">
      <about v-if="component.slice_type === 'about'" v-bind:title="component.data.title" v-bind:text="component.data.text" v-bind:image="component.data.image">hero</about>
      <yoga v-if="component.slice_type === 'yoga'" v-bind:privateText="component.data.privateText" v-bind:lessons="component.data.lessons"/>
      <testimonials v-if="component.slice_type === 'testimonials'" v-bind:title="title" v-bind:testimonials="testimonials" />
    </div>
  </div>
</template>

<script>
  import Hero from './components/Hero.vue';
  import About from './components/About.vue';
  import Yoga from './components/Yoga.vue';
  import Testimonials from './components/Testimonials.vue';

  export default {
    name: 'app',
    components: {
      Hero,
      About,
      Yoga,
      Testimonials
    },
    data: () => ({
      data: null,
    }),
    created: function() {
      this.data = [
        {
          slice_type: 'about',
          data: {
            title: 'About',
            text: '<p>hello</p>',
            image: {
              url: '/url',
              alt: 'this alt'
            }
          }
        },
        {
          slice_type: 'yoga',
          data: {
            privateText: '<p>This is information about private lessons</p>',
            lessons: [
              {
                day: 'Mondays',
                lessons: [
                  '11:15-12:45pm - Stable Yoga',
                  '1:30-2:45pm - Gentle Yoga'
                ]
              },
              {
                day: 'Tuesdays',
                lessons: [
                  '11:15-12:45pm - Stable Yoga'
                ]
              }
            ]
          }
        },
        {
          "slice_type": 'testimonials',
          "data": {
            "title": "Testimonials",
            "testimonials": [
              {
                "text": "This is some great text",
                "name": "Me"
              }
            ]
          }
        }
      ]
    }
  }
</script>

<style>
#app {

}
</style>
