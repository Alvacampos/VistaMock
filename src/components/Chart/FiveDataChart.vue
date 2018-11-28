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
      animationDuration: 1500,
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
          crosshair: true
        },
        yAxis: {
          title: {
            text: ''
          },
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
          allowPointSelect: true,
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            showInLegend: false,       
            data: this.chart.series[0].data1
          }, 
          {
            showInLegend: false,
            data: this.chart.series[1].data2
          }, 
          {
            showInLegend: false,
            data: this.chart.series[2].data3
          }, 
          {
            showInLegend: false,
            data: this.chart.series[3].data4
          }, 
          {
            showInLegend: false,
            data: this.chart.series[4].data5
          }
        ],
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b><br/>',
          backgroundColor: '#FCFFC5',
          valueSuffix: ' M$',
          borderWidth: 3,
          borderRadius: 6,
          shared: true
        },
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