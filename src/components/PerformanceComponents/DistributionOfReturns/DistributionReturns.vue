<template>
  <div class="container-flex">
    <app-title-generator :title="subtitle"></app-title-generator>
  </div>  
</template>

<script>
  import TitleGenerator from '../../TitleGenerator/titleGenerator.vue'
  export default {
    data() {
      return {
        subtitle: 'Distribution of Returns'
      }
    },
    components: {      
      'app-title-generator': TitleGenerator
    }
  }
</script>