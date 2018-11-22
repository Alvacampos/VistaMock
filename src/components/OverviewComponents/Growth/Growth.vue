<template>
  <div class="container">    
     <app-title-generator :title="subtitle"></app-title-generator>
    <div class="row">
      <img src="https://www.amcharts.com/wp-content/uploads/2013/12/demo_7395_light.jpg" alt="Img">      
    </div>
    <div class="row">
      <div class="col">
        <app-information :profileData="profileData" :titles="titles"></app-information>  
      </div>      
    </div>  
  </div>  
</template>

<script>
  import TitleGenerator from '../../TitleGenerator/titleGenerator.vue'
  import Information from "../GrowthSectorCommonComponent/Information.vue";
  export default {
    data() {
      return {
        subtitle: 'Growth of $100: 5 Year',
        titles: [
          'Product',
          '5 Year Growth of $100',
          '5 Year Growth of $100 High',
          '5 Year Growth of $100 Low',
          '5 Year Cumulative Performance',
          '5 Year Annual Performance',
          '5 Year Max Drawdown'
        ],                     
      };
    },
    components: {
      'app-information': Information,
      'app-title-generator': TitleGenerator 
    },
    computed: {
      profileData() {
        return this.$store.state.overviewStore.growth;
      }
    }
  };
</script>

<style scoped>  
  img {
    display: block;
    margin: 20px auto;
    height: 400px;
    width: 75%;
  }  
</style>