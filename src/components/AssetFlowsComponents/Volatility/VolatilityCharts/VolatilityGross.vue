<template>
  <app-volatily-gross-chart :chart="chartInfo"></app-volatily-gross-chart>
</template>

<script>
  import VolatilityGrossChart from '../../../Chart/FiveDataChart.vue';
  export default {
    data() {
      return {        
        chartInfo: {
          type: 'column',
          xAxis: {
            categories: ['Q3 2013', 'Q4 2013', 'Q1 2016', 'Q2 2017'],          
          },
          yAxis: {
            
          },
          series: [{            
            data1: [-2, 3, 3.7, -3]
          },{           
            data2: [-5, -1, 4, 2]
          },{           
            data3: [4, 3, -0.5, -3]
          },{           
            data4: [-3, -2, -3, -3]
          },{           
            data5: [2, 4, -1.2, 2]
          }]
        }
      }    
    },
    components: {
      'app-volatily-gross-chart': VolatilityGrossChart
    }
  }  
</script>