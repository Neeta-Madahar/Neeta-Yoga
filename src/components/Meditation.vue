<template>
  <section id="meditation">
    <section-title :flower="4">{{ title }}</section-title>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <div v-html="text" />
      </div>
      <div class="col-xs-12 col-sm-6 image-half">
        <figure>
          <img v-bind="imageAttributes" class="image"/>

          <figcaption class="quote">
            <span class="quote-message">{{quote}}</span>
            <div class="quote-footer">
              {{quoteBy}}
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
  import SectionTitle from '@/common/SectionTitle.vue';

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
    margin-bottom: 25px;

    @include sm {
      margin-bottom: 0;
    }
  }

  .row {
    flex-direction: column-reverse;
  }

  a {
    color: $color-grey !important;
    text-decoration: underline;
    font-weight: 700;
  }

  .image {
    margin-bottom: 5px;
  }


  .quote {
    font-size: $font-size-body-mobile;
    max-width: 250px;
    margin: 0 auto;

    @include sm {
      font-size: $font-size-body;
    }

    &-message {
      font-style: italic;
      margin-bottom: 5px;
      display: inline-block;

      @include sm {
        margin-bottom: 10px;
      }
    }

    &-footer {
      color: $color-grey !important;
      font-family: $font-raleway !important;
    }
  }

  figure {
    margin: 0 auto;
  }

</style>
