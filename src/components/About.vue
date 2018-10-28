<template>
  <div id="about" class="about">
    <section-title :flower="1">{{ title }}</section-title>
    <div class="row">
      <div class="col-xs-12 col-sm">
        <div v-html="text"></div>
      </div>
      <div class="col-xs-12 col-sm">
        <floral-image :image="image" />
      </div>
    </div>
  </div>
</template>

<script>
  import FloralImage from '@/common/FloralImage.vue';
  import SectionTitle from '@/common/SectionTitle.vue';

  export default {
    name: 'about',
    props: {
      title: String,
      text: String,
      image: Object,
    },
    components: {
      FloralImage,
      SectionTitle
    }
  }
</script>

<style lang="scss" scoped>

#about {

  margin-top: 100px;
}

</style>
