<template>  
  <div class="row">
    <highcharts :options="chartOptions" :updateArgs="updateArgs"></highcharts>      
  </div>
</template>

<script>
export default {
  props: ['chart'],
  data () {
    return {
      title: '',
      points: [10, 0, 8, 2, 6, 4, 5, 5],
      chartType: 'Spline',
      seriesColor: '#6fcd98',
      colorInputIsSupported: null,
      animationDuration: 1000,
      updateArgs: [true, true, {duration: 1000}],
      chartOptions: {
        chart: {
          type: this.chart
        },
        title: {
          text: ''
        },
        series: [{
          data: [10, 0, 8, 2, 6, 4, 5, 5],
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
  }  
</style>