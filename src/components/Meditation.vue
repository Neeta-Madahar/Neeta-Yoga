<template>
  <div id="meditation">
    <div class="row">
      <div class="col-md">
        <h2>{{ title }}</h2>

        <div v-html="text" />
      </div>
      <div class="col-md">
        <img v-bind="imageAttributes" />

        <blockquote>
          <q>{{quote}}</q>
          <footer>
            {{quoteBy}}
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'meditation',
    props: {
      title: String,
      text: String,
      image: Object,
      quote: String,
      quoteBy: String,
    },
    computed: {
      imageAttributes: function() {
        return {
          src: this.image.url,
          alt: this.image.alt
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/sass/_variables';

  a {
    color: $color-grey !important;
    text-decoration: underline;
    font-weight: 700;
  }

  blockquote {
    font-size: 16px;
  }

  footer {
    color: $color-grey !important;
    font-family: $font-raleway !important;
  }
</style>
