<template>
  <section id="yoga">
    <section-title :flower="2">{{ title }}</section-title>

    <h3>Public</h3>

    <div>
      <div v-for="(day, index) in lessons" :key="`day-${index}`" class="lessons">
        <h4>{{ day.day.charAt(0).toUpperCase() + day.day.slice(1)}}</h4>

        <div class="lesson-info">
          <div v-for="(lesson, index) in day.lessons" :key="`lesson-${index}`" class="lesson">
            <h5>{{ lesson.lesson }}</h5>

            <strong class="lesson-time">{{ lesson.time }}</strong>

            <div v-if="lesson.location_link">
              <a class="location" :href="lesson.location_link.url" :target="lesson.location_link.target" :rel="lesson.location_link.rel">
                {{ lesson.location }}
              </a>
            </div>
            <div class="location" v-else>
              {{ lesson.location }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3>Private</h3>

    <div v-html="privateText" class="private"></div>
  </section>
</template>

<script>
  import SectionTitle from "../common/SectionTitle";
  export default {
    components: {SectionTitle},
    name: 'yoga',
    props: {
      privateText: String,
      lessons: Array,
      title: String,
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/sass/mixins";

  #yoga {
    font-size: $font-size-body;
  }

  .lesson {
    border: 1px solid $color-light-grey;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px;
    text-align: center;

    @include sm {
      margin-top: 15px;
      flex-grow: 1;
      margin-left: 10px;
      margin-right: 10px;
      flex-basis: 100%;

      &-time {
        font-size: $font-size-s;
      }
    }
  }

  .lessons {
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 25px;
    }

    @include sm {
      margin-bottom: 30px;
    }
  }

  .lesson-info {
    @include sm {
      display: flex;
      margin-left: -10px;
      margin-right: -10px;
    }
  }

  h4 {
    background-color: $color-light-grey;
    margin: 0;
    padding: 10px 15px;
  }

  .location {
    color: $color-pink;
    font-size: $font-size-body-mobile;

    @include sm {
      font-size: $font-size-body
    }
  }

  h5 {
    margin: 0;
    font-family: $font-raleway;
    font-weight: 400;
    font-size: $font-size-body-mobile;
    @include sm {
      font-size: $font-size-body
    }
  }

  strong {
    display: inline-block;
    margin: 10px 0;
  }

  .private {
    text-align: left;
    font-size: $font-size-body-mobile;

    @include sm {
      font-size: $font-size-body
    }
  }
</style>
