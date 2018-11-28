<template>
  <div class="container-flex">   
    <app-dropdown-menu :subtitle="subtitle"></app-dropdown-menu>
    <div class="row" id="chartRow">
      <app-distribution-chart :chart="chartInfo"></app-distribution-chart>
    </div>   
  </div>  
</template>

<script>
  import DistributionChart from '../../Chart/DoubleDataChart.vue';
  import DropdownMenu from '../../DropdownGenerator/DropdownGenerator.vue';
  export default {
    data() {
      return {
        subtitle: 'Distribution of Returns',
        chartInfo: {
          type: 'column',
          xAxis: {
            categories: ['<10%', '-10 to -8', '-8 to -6', '-6 to -4', '-4 to -2', '-2 to 0', '0 to 2', 
            '2 to 4', '4 to 6', '6 to 8', '8 to 10', '>10%'],
            min: 0,
            max: 12
          },
          yAxis: {
            min: 0,
            max: 30,
          },
          series: [{
            name1: 'eVestment All Global Equity',
            data1: [2, 5, 5, 2, 11, 20, 30, 21, 15, 8, 3, 2]
          },{
            name2: 'MSCI World-ND',
            data2: [3, 4, 4, 2, 12, 19, 30, 20.5, 14, 5, 4, 1.8]
          }]
        }                     
      }
    },
    components: {
      'app-dropdown-menu': DropdownMenu,
      'app-distribution-chart': DistributionChart
    }
  }
</script>