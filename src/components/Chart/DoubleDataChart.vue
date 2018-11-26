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
          crosshair: true
        },
        yAxis: {
          min: this.chart.yAxis.min,
          max: this.chart.yAxis.max
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            name: this.chart.series[0].name1,
            data: this.chart.series[0].data1
          }, 
          {
            name: this.chart.series[1].name2,
            data: this.chart.series[1].data2
          }
        ]
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