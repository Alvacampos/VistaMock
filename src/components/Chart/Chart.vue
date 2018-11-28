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
          type: this.chart.type,
          zoomType: 'xy'
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
          title: {
            text: ''
          },
          min: this.chart.yAxis.min,
          max: this.chart.yAxis.max
        },     
        series: [{
          showInLegend: false,
          name: this.chart.series.name,
          data: this.chart.series.data,
          color: '#6fcd98'
        }],
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b><br/>',
          backgroundColor: '#FCFFC5',
          valueSuffix: ' $',
          borderWidth: 3,
          borderRadius: 6,
          shared: true
        }
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