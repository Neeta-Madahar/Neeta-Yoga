<template>
  <div id='app'>
    <Hero :menuOpen="menuOpen" :toggle="toggleMenu"/>

    <div v-if="error" class="component">{{error}}</div>

    <div
      v-for="component in data"
      :key="component.slice_type"
      class="component"
      :class="{
        'component-background-image': component.data && component.data.backgroundImage,
        container: component.data && !component.data.backgroundImage
      }"
      :style="{
        backgroundImage: component.data && component.data.backgroundImage ? `url('${component.data.backgroundImage.url}')` : null
      }"
    >
      <about v-once v-if="component.slice_type === 'about_section'" :title="component.data.title" :text="component.data.text" :image="component.data.image"/>
      <yoga v-once v-if="component.slice_type === 'yoga'" :privateText="component.data.privateText" :lessons="component.items" :title="component.data.title"/>
      <testimonials v-once v-if="component.slice_type === 'testimonials'" :title="component.data.title" :image="component.data.image" :testimonials="component.items"/>
      <meditation v-once v-if="component.slice_type === 'meditation'" :title="component.data.title" :text="component.data.text" :image="component.data.image" :quote="component.data.quote" :quoteBy="component.data.quote_by"/>
      <resources v-once v-if="component.slice_type === 'resource'" :title="component.data.title" :links="component.items"/>
      <articles v-once v-if="component.slice_type === 'articles'" :title="component.data.title" :articles="component.items"/>
      <videos v-once v-if="component.slice_type === 'videos'" :title="component.data.title" :videos="component.items"/>
      <events v-once v-if="component.slice_type === 'events'" :title="component.data.title" :events="component.items" />
      <movies v-once v-if="component.slice_type === 'movies'" :title="component.data.title" :movies="component.items" :image="component.data.backgroundImage" :text="component.data.text"/>
      <contact v-once v-if="component.slice_type === 'contact'" :title="component.data.title" :text="component.data.text" :buttonText="component.data.buttonText"/>
    </div>

    <Footer/>
  </div>
</template>

<script>
  import Prismic from 'prismic-javascript';
  import { API_ENDPOINT } from '@/config/constants';
  import {formatData} from '@/utils/FormatData';

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
      menuOpen: false,
      error: null,
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
                location: "Deanwood Park Golf Course, Stockcross",
                location_link: {
                  url:'#',
                },
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
            items: [
              {text: "This is some great text", name: "Suzie James"},
              {text: "This is some great text", name: "Suzie James"},
              {text: "This is some great text", name: "Suzie James"},
              {text: "This is some great text", name: "Suzie James"}
            ],
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
            data: {title: "Resources"}
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
              video_url: "https://embed.ted.com/talks/jill_bolte_taylor_s_powerful_stroke_of_insight",
              description: "A description about the video"
            }]
          }, {
            slice_type: "events",
            data: {title: "Events"},
            items: [{
              title: "This is an event",
              description: "This is an event description",
              image: {
                url: "https://art-and-yoga.cdn.prismic.io/art-and-yoga/4770776f1502e87c372ecd437584e86b844b2956_003-sarum-college-26th-september-2015-by-ash-mills-edited-300x200.jpg",
                alt: null
              }
            }, {
              title: "This is an event",
              description: "This is an event description",
              image: {
                url: "https://art-and-yoga.cdn.prismic.io/art-and-yoga/4770776f1502e87c372ecd437584e86b844b2956_003-sarum-college-26th-september-2015-by-ash-mills-edited-300x200.jpg",
                alt: null
              }
            }, {
              title: "This is an event",
              description: "This is an event description",
              image: {
                url: "https://art-and-yoga.cdn.prismic.io/art-and-yoga/4770776f1502e87c372ecd437584e86b844b2956_003-sarum-college-26th-september-2015-by-ash-mills-edited-300x200.jpg",
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
              },
              text: 'This is some introductory text'
            },
            items: [
              {title: "Movie title", url: "https://imdb.com", year: "2018"},
              {title: "Movie title", url: "https://imdb.com", year: "2018"},
              {title: "Movie title", url: "https://imdb.com", year: "2018"},
              {title: "Movie title", url: "https://imdb.com", year: "2018"},
              {title: "Movie title", url: "https://imdb.com", year: "2018"},
              {title: "Movie title", url: "https://imdb.com", year: "2018"},
              {title: "Movie title", url: "https://imdb.com", year: "2018"},
              {title: "Movie title", url: "https://imdb.com", year: "2018"},
              {title: "Movie title", url: "https://imdb.com", year: "2018"},
              {title: "Movie title", url: "https://imdb.com", year: "2018"},
            ]
          }, {
            slice_type: "contact",
            data: {
              title: "Contact",
              text: "Get in touch with us here",
              buttonText: "Send me a message"
            }
          }
          ];
        } else {
          Prismic.api(API_ENDPOINT)
            .then(api => api.getByUID('page', 'yoga'))
            .then(response => this.data = formatData(response.data.body))
            .catch(e => this.error = `Apologies, there was a ${e.status} error getting data from the CMS.`);
        }
      },
      toggleMenu: function(e, isScroll = false) {
        this.menuOpen = !this.menuOpen;

        if(this.menu && !isScroll) {
            document.body.classList.add('menu-open');
            return;
        }
        document.body.classList.remove('menu-open');
      }
    },
    beforeMount () {
      this.getContent();
    }
  }
</script>
