<template>
  <div id='app'>
    <Hero />

    <div v-for="component in this.data" v-bind:key="component.slice_type">
      {{component.slice_type}}
      <about v-if="component.slice_type === 'about'" v-bind:title="component.data.title" v-bind:text="component.data.text" v-bind:image="component.data.image" />
      <yoga v-if="component.slice_type === 'yoga'" v-bind:privateText="component.data.privateText" v-bind:lessons="component.data.lessons" />
      <testimonials v-if="component.slice_type === 'testimonials'" v-bind:title="component.data.title" v-bind:testimonials="component.data.testimonials" />
      <meditation v-if="component.slice_type === 'meditation'" v-bind:title="component.data.title" v-bind:text="component.data.text" v-bind:image="component.data.image" v-bind:quote="component.data.quote" v-bind:quoteBy="component.data.quoteBy" />
    </div>
  </div>
</template>

<script>
  import Hero from './components/Hero.vue';
  import About from './components/About.vue';
  import Yoga from './components/Yoga.vue';
  import Testimonials from './components/Testimonials.vue';
  import Meditation from './components/Meditation.vue';

  export default {
    name: 'app',
    components: {
      Hero,
      About,
      Yoga,
      Testimonials,
      Meditation
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
          slice_type: 'testimonials',
          data: {
            title: 'Testimonials',
            testimonials: [
              {
                text: 'This is some great text',
                name: 'Me'
              },
              {
                text: 'Another quote',
                name: 'Someone else'
              }
            ]
          }
        },
        {
          slice_type: 'meditation',
          data: {
            title: 'Meditation',
            text: '<p>Some text</p><a href="#">Some link</a>',
            image: {
              url: '/url',
              alt: 'alt text'
            },
            quote: 'This is some quote',
            quoteBy: 'Me'
          }
        }
      ]
    }
  }
</script>

<style>

</style>
