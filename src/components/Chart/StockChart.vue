<template>
  <div class="row">
    <highcharts class="stock" :options="stockOptions"></highcharts>
  </div>  
</template>

<script>
export default {
  props: ['chart'],
  data () {
    return {
      stockOptions: {        
        rangeSelector: {
          selected: 1
        },
        title: {
          text: ''
        },
        series: [{
          showInLegend: false,          
          data: this.chart.series.data,
          color: '#6fcd98'
        }]
      }
    }
  }
}
</script>

<style scoped>
  div {
    width: 100%;
    margin: 20px 0;
  }  
</style>