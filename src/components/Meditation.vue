<template>
  <div id="meditation">
    <h2>{{ title }} <i class="icon-floral_4" aria-hidden="true"></i></h2>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <div v-html="text" />
      </div>
      <div class="col-xs-12 col-sm-6">
        <img v-bind="imageAttributes" class="image"/>

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
  @import '../assets/sass/mixins';

  #meditation {
    text-align: center;
  }

  .row {
    flex-direction: column-reverse;
  }

  a {
    color: $color-grey !important;
    text-decoration: underline;
    font-weight: 700;
  }

  q {
    margin: 20px 0;
    display: inline-block;

    @include sm {
      margin: 0;
    }
  }

  blockquote {
    font-size: 16px;
  }

  footer {
    color: $color-grey !important;
    font-family: $font-raleway !important;
  }
</style>
