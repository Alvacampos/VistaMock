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
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',        
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Data',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Data',
            y: 11.84
        }, {
            name: 'Data',
            y: 10.85
        }, {
            name: 'Data',
            y: 4.67
        }, {
            name: 'Data',
            y: 4.18
        }, {
            name: 'Data',
            y: 1.64
        }, {
            name: 'Data',
            y: 1.6
        }, {
            name: 'Data',
            y: 1.2
        }, {
            name: 'Data',
            y: 2.61
        }]
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