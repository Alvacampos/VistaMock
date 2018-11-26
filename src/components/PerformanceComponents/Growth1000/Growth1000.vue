<template>
  <div class="container-flex">
    <app-dropdown-menu :subtitle="subtitle"></app-dropdown-menu>
    <div class="row" id="chartRow">
      <app-growth-chart :chart="chartInfo"></app-growth-chart>
    </div>
  </div>  
</template>

<script>
  import GrowthChart from '../../Chart/DoubleDataChart.vue';
  import DropdownMenu from '../../DropdownGenerator/DropdownGenerator.vue';
  export default {
    data() {
      return {
        subtitle: 'Growth of $1000',
        chartInfo: {
          type: 'line',
          xAxis: {
            categories: ['2009', '2013', '2017'],
            min: 0,
            max: 3
          },
          yAxis: {
            min: 0,
            max: 2000,
          },
          series: [{
            name1: 'eVestment All Global Equity',
            data1: [999, 1105, 1500, 2000 ]
          },{
            name2: 'MSCI World-ND',
            data2: [892, 1008, 1400, 1975]
          }]
        }
      };
    },
    components: {
      'app-dropdown-menu': DropdownMenu,
      'app-growth-chart': GrowthChart     
    }
  }  
</script>