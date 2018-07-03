<template>
  <div id='app'>
    <Hero/>

    <div v-for="component in this.data" v-bind:key="component.slice_type" v-bind:class="(component.data && component.data.backgroundImage) ? 'component component-background-image' : 'container component'" v-bind:style="{ backgroundImage: (component.data && component.data.backgroundImage) ? `url('${component.data.backgroundImage.url}')` : null }">
      <about v-once v-if="component.slice_type === 'about_section'" v-bind:title="component.data.title" v-bind:text="component.data.text" v-bind:image="component.data.image"/>
      <yoga v-once v-if="component.slice_type === 'yoga'" v-bind:privateText="component.data.privateText" v-bind:lessons="component.items" v-bind:title="component.data.title"/>
      <testimonials v-once v-if="component.slice_type === 'testimonials'" v-bind:title="component.data.title" v-bind:image="component.data.image" v-bind:testimonials="component.items"/>
      <meditation v-once v-if="component.slice_type === 'meditation'" v-bind:title="component.data.title" v-bind:text="component.data.text" v-bind:image="component.data.image" v-bind:quote="component.data.quote" v-bind:quoteBy="component.data.quote_by"/>
      <resources v-once v-if="component.slice_type === 'resource'" v-bind:title="component.data.title" v-bind:links="component.items"/>
      <articles v-once v-if="component.slice_type === 'articles'" v-bind:title="component.data.title" v-bind:links="component.items"/>
      <videos v-once v-if="component.slice_type === 'videos'" v-bind:title="component.data.title" v-bind:videos="component.items"/>
      <events v-once v-if="component.slice_type === 'events'" v-bind:title="component.data.title" v-bind:events="component.items"/>
      <movies v-once v-if="component.slice_type === 'movies'" v-bind:title="component.data.title" v-bind:movies="component.items" v-bind:image="component.data.backgroundImage"/>
      <contact v-once v-if="component.slice_type === 'contact'" v-bind:title="component.data.title" v-bind:text="component.data.text"/>
    </div>

    <Footer/>
  </div>
</template>

<script>
  import Prismic from 'prismic-javascript';
  import {formatData} from './utils/cmsHelpers';
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
        if (process.env.NODE_ENV === 'development') {
          this.data = [{
            slice_type: "about_section",
            data: {
              title: "About",
              text: "<p>This is some text</p>",
              image: {
                url: "https://art-and-yoga.cdn.prismic.io/art-and-yoga/4f5c65cea6dadf360478ee0b544b475ff34f82cb_profile.jpg",
                alt: null
              }
            }
          }, {
            slice_type: "yoga",
            items: [{
              day: "monday",
              lessons: [{
                lesson: "Hatha Yoga",
                time: "11:15-12:45pm",
                location: "Stable Yoga, Kintly"
              }, {lesson: "Hatha Yoga", time: "1:30-2:45pm", location: "Vodafone HQ, Newbury"}]
            }, {
              day: "tuesday",
              lessons: [{
                lesson: "Gentle Yoga",
                time: "11:15-12:45pm",
                location: "Deanwood Park Golf Course, Stockcross"
              }, {
                lesson: "Gentle Yoga",
                time: "11:15-12:45pm",
                location: "Deanwood Park Golf Course, Stockcross"
              }, {
                lesson: "Gentle Yoga",
                time: "11:15-12:45pm",
                location: "Deanwood Park Golf Course, Stockcross"
              }]
            }],
            data: {privateText: "<p>This is the private text!</p>", title: "Yoga"}
          }, {
            slice_type: "testimonials",
            items: [{text: "This is some great text", name: "Suzie James"}],
            data: {
              title: "Testimonials",
              image: {
                url: "https://art-and-yoga.cdn.prismic.io/art-and-yoga/b947c6f1c71fdbe4525cf0eeafbfc15a71b9496f_beach.jpg",
                alt: null
              }
            }
          }, {
            slice_type: "meditation",
            data: {
              title: "Meditation",
              text: "<p>Some Text to <a href=\"https://google.com\">link to</a></p>",
              image: {
                url: "https://art-and-yoga.cdn.prismic.io/art-and-yoga/97f43496db1e4ae3edd02187c601529ce1b1503d_meditate.jpg",
                alt: null
              },
              quote: "This is something said by...",
              quote_by: "This Person"
            }
          }, {
            slice_type: "resource",
            items: [{
              title: "A Resource",
              url: "http://google.co.uk",
              description: "This is a super long description",
              image: {
                url: "https://art-and-yoga.cdn.prismic.io/art-and-yoga/629022b8c12a755d885381d2976e6f706651ac23_traditional_yoga.png",
                alt: null
              }
            }, {
              title: "Another Resource",
              url: "http://facebook.com",
              description: "Another super long description",
              image: {
                url: "https://art-and-yoga.cdn.prismic.io/art-and-yoga/ca607f62932c30c6593a40c1293c6fe189c5f264_stable.png",
                alt: null
              }
            }],
            data: {title: "Resources", image: {}}
          }, {
            slice_type: "articles",
            data: {title: "Articles"},
            items: [{
              title: "This is an article",
              url: "http://google.co.uk",
              description: "This is a description"
            }]
          }, {
            slice_type: "videos",
            data: {title: "Videos"},
            items: [{
              title: "This is a video",
              youtube_id: "-B2lXzolNNE",
              description: "A description about the video"
            }]
          }, {
            slice_type: "events",
            data: {title: "Events"},
            items: [{
              title: "This is an event",
              description: "This is an event description",
              image: {
                url: "https://wroomdev.s3.amazonaws.com/tutoblanktemplate%2F97109f41-140e-4dc9-a2c8-96fb10f14051_star.gif",
                alt: null
              }
            }]
          }, {
            slice_type: "movies",
            data: {
              title: "Movies",
              backgroundImage: {
                url: "https://art-and-yoga.cdn.prismic.io/art-and-yoga/6613439facc97759c882ad25201749770adbca64_cinema.jpg",
                alt: null
              }
            },
            items: [{title: "Movie title", url: "https://imdb.com", year: "2018"}]
          }, {slice_type: "contact", data: {title: "Contact", text: "Get in touch with us here"}}];
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
