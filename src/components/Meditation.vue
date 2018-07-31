<template>
  <div id="meditation">
    <section-title :flower="4">{{ title }}</section-title>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <div v-html="text" />
      </div>
      <div class="col-xs-12 col-sm-6 image-half">
        <img v-bind="imageAttributes" class="image"/>

        <div class="quote">
          <span class="quote-message">{{quote}}</span>
          <div class="quote-footer">
            {{quoteBy}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SectionTitle from '../common/SectionTitle.vue';

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
    components: {
      SectionTitle
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/sass/mixins';

  .image-half {
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


  .quote {
    font-size: $font-size-body-mobile;

    @include sm {
      font-size: $font-size-body;
    }

    &-message {
      font-style: italic;
      margin: 20px 0;
      display: inline-block;

      @include sm {
        margin: 0;
      }
    }

    &-footer {
      color: $color-grey !important;
      font-family: $font-raleway !important;
    }
  }

</style>
