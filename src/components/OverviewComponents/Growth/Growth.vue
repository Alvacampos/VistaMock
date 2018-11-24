<template>
  <div class="container-flex">    
     <app-title-generator :title="subtitle"></app-title-generator>
    <div class="row" id="chartRow">
      <app-growth-chart :chart="chart"></app-growth-chart></div>
    <div class="row">
      <div class="col">
        <app-information :profileData="profileData" :titles="titles"></app-information>  
      </div>      
    </div>  
  </div>  
</template>

<script>
  import GrowthChart from '../../Chart/Chart.vue';
  import TitleGenerator from '../../TitleGenerator/TitleGenerator.vue';
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
        chart: 'area'                     
      };
    },
    components: {
      'app-information': Information,
      'app-title-generator': TitleGenerator,
      'app-growth-chart': GrowthChart
    },
    computed: {
      profileData() {
        return this.$store.state.overviewStore.growth;
      }
    }
  };
</script>