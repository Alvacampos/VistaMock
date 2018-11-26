<template>
  <div class="container-flex">    
     <app-title-generator :title="subtitle"></app-title-generator>
    <div class="row" id="chartRow">
      <app-growth-chart :chart="chartInfo"></app-growth-chart></div>
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
        chartInfo: {
          type: 'area',
          xAxis: {
            categories: ['6/2014', '6/2015', '6/2016', '6/2017', '6/2018'],
            min: 0,
            max: 4
          },
          yAxis: {
            min: 90,
            max: 170,
          },
          series: {
            name: ' ',
            data: [90, 150, 115, 122, 128, 130, 126, 132, 115, 110, 125, 130, 140, 150, 155, 160, 165, 170, 160, 165, 170, 200, 115, 122, 128, 130, 126, 132, 115, 110, 125, 130, 140, 150, 155, 160, 165, 170, 160, 165, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]
          }
        }
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