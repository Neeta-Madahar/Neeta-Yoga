<template>
  <div id="app">

  </div>
</template>

<script>
  import Prismic from 'prismic-javascript';

  export default {
    name: 'app',
    components: {
      ComponentRenderer
    },
    data () {
      return {
        data: null
      }
    },
    methods: {
      getContent () {
        if(process.env.NODE_ENV === 'development') {
          this.data = ['hello'];
        } else {
          const API_ENDPOINT = 'https://gweit.prismic.io/api/v2';
          Prismic.getApi(API_ENDPOINT)
            .then(api => api.query(''))
            .then((response) => {
//              console.log('Documents: ', response.results);
              this.data = response.results;
//              console.log(response.results)
            })
        }
      }
    },
    beforeMount () {
      this.getContent()
    }
  }
</script>

<style>

</style>
