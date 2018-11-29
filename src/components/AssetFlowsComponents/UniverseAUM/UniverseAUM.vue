<template>
  <div class="container-flex">       
    <app-title-generator :title="subtitle"></app-title-generator>  
    <div class="row" id="checkboxField">
      <div>
        <strong>Show: </strong>
      </div>
      <div class="checkBox">
        <input type="checkbox" class="form-check-input" id="checkBox1" checked>
        <label class="form-check-label" for="checkBox1">Chart</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" class="form-check-input" id="checkBox2" disabled>
        <label class="form-check-label" for="checkBox2">Data Table</label>
      </div>      
    </div>
    <div class="row">
      <app-universe-aum-chart :chart="chartInfo" ></app-universe-aum-chart>
    </div>
  </div>
</template>

<script>
  import AssetChart from '../../Chart/FiveDataChart.vue';
  import TitleGenerator from '../../TitleGenerator/TitleGenerator.vue';  
  export default {
    data() {
      return {
        subtitle: 'Universe AUM - Institutional AUM',
        activeBtn: 'equityButton1',
        chartInfo: {
          type: 'column',
          xAxis: {
            categories: ['Q3 2013', 'Q4 2013', 'Q1 2016', 'Q2 2017'],
            min: 0,            
          },
          yAxis: {
            min: 0,
            max: 7,
          },
          series: [{            
            data1: [2, 5, 5, 1]
          },{           
            data2: [3, 4, 4, 2]
          },{           
            data3: [3, 7, 4, 3]
          },{           
            data4: [3, 1, 6, 4]
          },{           
            data5: [3, 6, 0, 5]
          }]
        }
      }
    },
    components: {
      'app-universe-aum-chart': AssetChart,
      'app-title-generator': TitleGenerator
    }
  }
</script>

<style scoped> 
  label {
    padding-top: 2px;
  }

  div.wrapper {
    margin-bottom: 20px;
  }

  .checkBox {
    margin-left: 30px;
  }

  #checkboxField {
    margin-top: -15px;
    background-color: #F0F4F7;
    padding: 10px;
    font-size: 13px;
  } 
</style>