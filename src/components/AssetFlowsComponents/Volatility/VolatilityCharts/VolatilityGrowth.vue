<template>
  <app-volatily-growth-chart :chart="chartInfo"></app-volatily-growth-chart>
</template>

<script>
  import VolatilityGrowthChart from '../../../Chart/StockChart.vue';
  export default {
    data() {
      return {        
        chartInfo: {       
          series: {            
            data: [-2, 3, 3.7, -3]
          }          
        }
      }    
    },
    components: {
      'app-volatily-growth-chart': VolatilityGrowthChart
    }
  }  
</script>