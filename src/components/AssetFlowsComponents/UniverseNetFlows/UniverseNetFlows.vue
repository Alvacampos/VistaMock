<template>
  <div class="container-flex">        
    <app-title-generator :title="subtitle"></app-title-generator>  
    <div class="row" id="checkboxField">
      <div>
        <strong>Show: </strong>
      </div>
      <div class="checkBox">
        <input type="checkbox" class="form-check-input" id="checkBox1">
        <label class="form-check-label" for="checkBox1">Chart</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" class="form-check-input" id="checkBox2">
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
          },
          yAxis: {
            
          },
          series: [{            
            data1: [-2, 3, 3.7, -3]
          },{           
            data2: [-5, -1, 4, 2]
          },{           
            data3: [4, 3, -0.5, -3]
          },{           
            data4: [-3, -2, -3, -3]
          },{           
            data5: [2, 4, -1.2, 2]
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

  div.wrapper {
    margin-bottom: 20px;
  }

  p.miniButton {
    font-size: 12px;    
    padding: 10px;
  }

  .active {
    background-color: #0076C0;    
  }

  .checkBox {
    margin-left: 30px;
  }

  #buttonField {
    margin-top: 5px;
  }

  #buttonField button {
    padding: 0 15px;
    margin: 0 10px;  
    font-size: 13px;
    height: 25px;
    text-align: center;
    border: 1px  #979797;    
  }

  #checkboxField {
    margin-top: -15px;
    background-color: #F0F4F7;
    padding: 10px;
    font-size: 13px;
  } 
</style>