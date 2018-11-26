<template>
  <div class="container-flex">
    <app-dropdown-menu :subtitle="subtitle"></app-dropdown-menu>
    <div class="row" id="chartRow">
     <app-riskreturn-chart :chart="chartInfo"></app-riskreturn-chart>
    </div>
  </div>
</template>

<script>
  import RiskReturnChart from '../../Chart/DoubleDataChart.vue';
  import DropdownMenu from '../../DropdownGenerator/DropdownGenerator.vue';
  export default {
    data() {
      return {
        subtitle: 'Risk vs. Return',
        chartInfo: {
          type: 'line',
          xAxis: {
            categories: ['15%', '16%', '17%'],
            min: 0,
            max: 3
          },
          yAxis: {
            min: 6 ,
            max: 7 
          },
          series: [
            {
              name1: 'eVestment All Global Equity',
              data1: [5.2, 6.6, 6.9]
            },
            {
              name2: 'MSCI World-ND',
              data2: [5, 6.4, 7]
            }
          ]
        }
      };
    },
    components: {
      'app-dropdown-menu': DropdownMenu,
      'app-riskreturn-chart': RiskReturnChart     
    }
  }
</script>