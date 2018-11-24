<template>
  <div class="container-flex">
    <div class="row wraper" id="buttonField">
      <button id="selectedButton">Universe Overview</button>
      <button class="unselectedButton">Flows By Account Domicile</button>
      <button class="unselectedButton">Flows By Account Domicile</button>
      <button class="unselectedButton">Flows By Account Type</button>
      <button class="unselectedButton">Product Lineup</button>
    </div>
    <div class="row wrapper">      
      <p class="miniButton"><strong>Data Range: </strong>Nov 2017 to Jun 2018</p>
      <p class="miniButton"><strong>Risk Index: </strong>S&P 500</p> 
      <p class="miniButton"><strong>Data Range: </strong>FTSE 3 Mo. T-Bill</p>   
    </div>
    <app-title-generator :title="subtitle"></app-title-generator>
  </div>
</template>

<script>
  import TitleGenerator from '../../TitleGenerator/TitleGenerator.vue';
  export default {
    data() {
      return {
        subtitle: 'Universe AUM - Institutional AUM'
      }
    },
    components: {
      'app-title-generator': TitleGenerator
    }
  }
</script>

<style scoped>
  div.wrapper {
    margin-bottom: 20px;
  }

  #buttonField {
    margin-top: 5px;
    background-color: none;
    padding: 10px;
  }

  #buttonField button {
    padding: 0 15px;  
    font-size: 13px;
    height: 25px;
    text-align: center;
    border: 1px solid #979797;
  }

  #selectedButton {
    background-color: #0076C0;    
  }

  .unselectedButton {
    background-color: #F0F4F7;
  }
</style>