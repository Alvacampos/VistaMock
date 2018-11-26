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
      seriesColor: '#6fcd98',
      colorInputIsSupported: null,
      animationDuration: 1000,
      updateArgs: [true, true, {duration: 1000}],
      chartOptions: {
        chart: {
          type: this.chart.type
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: this.chart.xAxis.categories,
          min: this.chart.xAxis.min,
          max: this.chart.xAxis.max
        },
        yAxis: {
          min: this.chart.yAxis.min,
          max: this.chart.yAxis.max
        },     
        series: [{
          name: this.chart.series.name,
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
  }  
</style>