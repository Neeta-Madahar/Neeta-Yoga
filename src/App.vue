<template>
  <div id='app'>
    <Hero />

    <div v-for="component in this.data" v-bind:key="component.slice_type" v-bind:class="(component.data && component.data.backgroundImage) ? 'component component-background-image' : 'container component'" v-bind:style="{ backgroundImage: (component.data && component.data.backgroundImage) ? `url('${component.data.backgroundImage}')` : null }">
      <about v-once v-if="component.slice_type === 'about_section'" v-bind:title="component.data.title" v-bind:text="component.data.text" v-bind:image="component.data.image" />
      <yoga v-once v-if="component.slice_type === 'yoga'" v-bind:privateText="component.data.privateText" v-bind:lessons="component.data.lessons" v-bind:title="component.data.title" />
      <testimonials v-once v-if="component.slice_type === 'testimonials'" v-bind:title="component.data.title" v-bind:image="component.data.image" v-bind:testimonials="component.items" />
      <meditation v-once v-if="component.slice_type === 'meditation'" v-bind:title="component.data.title" v-bind:text="component.data.text" v-bind:image="component.data.image" v-bind:quote="component.data.quote" v-bind:quoteBy="component.data.quote_by" />
      <resources v-once v-if="component.slice_type === 'resources'" v-bind:title="component.data.title" v-bind:links="component.items" v-bind:image="component.data.image" />
      <articles v-once v-if="component.slice_type === 'articles'" v-bind:title="component.data.title" v-bind:links="component.items" />
      <videos v-once v-if="component.slice_type === 'videos'" v-bind:title="component.data.title" v-bind:videos="component.items" />
      <events v-once v-if="component.slice_type === 'events'" v-bind:title="component.data.title" v-bind:events="component.items" />
      <movies v-once v-if="component.slice_type === 'movies'"  v-bind:title="component.data.title" v-bind:movies="component.items" />
      <contact v-once v-if="component.slice_type === 'contact'" v-bind:title="component.data.title" v-bind:text="component.data.text" />
    </div>

    <Footer />
  </div>
</template>

<script>
  import Prismic from 'prismic-javascript';
  import { formatData } from './utils/cmsHelpers';
  import Hero from './components/Hero.vue';
  import About from './components/About.vue';
  import Yoga from './components/Yoga.vue';
  import Testimonials from './components/Testimonials.vue';
  import Meditation from './components/Meditation.vue';
  import Resources from './components/Resources.vue';
  import Articles from './components/Articles.vue';
  import Videos from './components/Videos.vue';
  import Events from './components/Events.vue';
  import Movies from './components/Movies.vue';
  import Contact from './components/Contact.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'app',
    components: {
      Hero,
      About,
      Yoga,
      Testimonials,
      Meditation,
      Resources,
      Articles,
      Videos,
      Events,
      Movies,
      Contact,
      Footer,
    },
    data: () => ({
      data: null,
    }),
    methods: {
      getContent () {
        if(process.env.NODE_ENV === 'development') {
          this.data = [
            {
              slice_type: 'about_section',
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
                title: 'Yoga Classes',
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
              items: [
                {
                  text: "This is some great text",
                  name: "Me",
                }
              ],
              data: {
                title: "Testimonials",
                image: {
                  url: '/url',
                  alt: ''
                },
                testimonials: [
                  {
                    text: "This is some great text",
                    name: "Me",
                  },
                  {
                    text: "I really like this text",
                    name: "Suzie",
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
                quote_by: 'Me'
              }
            },
            {
              slice_type: 'resources',
              items: [
                {
                  title: 'this is the title',
                  url: 'http://google.co.uk',
                  description: 'This is some description'
                },
                {
                  title: 'this is the title',
                  url: 'http://google.co.uk',
                  description: 'This is some description'
                }
              ],
              data: {
                title: 'Resources',
                image: {
                  url: '/url',
                  alt: 'Image alt'
                }
              }
            },
            {
              slice_type: 'articles',
              data: {
                title: 'Articles and Books',
              },
              items: [
                {
                  title: 'this is the title',
                  url: 'http://google.co.uk',
                  description: 'This is some description'
                }
              ]
            },
            {
              slice_type: 'videos',
              data: {
                title: 'Videos',
              },
              items: [
                {
                  title: 'this is the title',
                  youtube_id: '-B2lXzolNNE',
                  description: 'This is some description'
                }
              ]
            },
            {
              slice_type: 'events',
              data: {
                title: 'Events',
              },
              items: [
                {
                  title: 'January 2018',
                  description: 'This is some description',
                  image: {
                    url: '/url',
                    alt: 'Image alt'
                  }
                }
              ]
            },
            {
              slice_type: 'movies',
              data: {
                title: 'Movies',
                backgroundImage: 'http://via.placeholder.com/1000x1000',
              },
              items: [
                {
                  title: 'Some film',
                  url: 'http://google.co.uk',
                  year: '2018'
                },
                {
                  title: 'Some film',
                  url: 'http://google.co.uk',
                  year: '2018'
                },
                {
                  title: 'Some other film',
                  url: 'http://google.co.uk',
                  year: '2017'
                }
              ]
            },
            {
              slice_type: 'contact',
              data: {
                title: 'Contact',
                text: 'This is some text'
              }
            }
          ];
        } else {
          const API_ENDPOINT = 'https://art-and-yoga.cdn.prismic.io/api/v2';
          Prismic.api(API_ENDPOINT)
            .then(api => api.getByUID('yoga', 'yoga'))
            .then(response => this.data = formatData(response.data.body));
        }
      }
    },
    beforeMount () {
      this.getContent();
    }
  }
</script>

<style>

</style>
