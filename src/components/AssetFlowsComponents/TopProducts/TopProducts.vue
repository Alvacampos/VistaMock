<template>
  <div class="container-flex">
    <app-title-generator :title="subtitle"></app-title-generator>   
    <div class="row" id="buttonField">
      <button 
        class="buttonProduct" 
        @click="showInflowsData(); activeInflows();"
        :class="{active: activeBtn === 'buttonProduct1'}">Trailing Inflows</button>
      <button 
        class="buttonProduct" 
        @click="showOutflowsData(); activeOutflows();"
        :class="{active: activeBtn === 'buttonProduct2'}">Trailing Outflows</button>
      <button 
        class="buttonProduct" 
        @click="showAUMData(); activeAUM();"
        :class="{active: activeBtn === 'buttonProduct3'}">AUM - MRQ</button>
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
    <div class="row" v-if="showInflowsChart">
      <app-product-table 
      :titles="titles"
      :productData="productData"
      ></app-product-table>
    </div>
    <div class="row" v-if="showOutFlowsChart">
      <p>Outflows Under Construction</p>
    </div>
    <div class="row" v-if="showAUMChart">
      <p>AUM Under Construction</p>
    </div>      
  </div>
</template>

<script>
  import TitleGenerator from '../../TitleGenerator/TitleGenerator.vue';
  import TopProductTable from './TopProductTable.vue';
  export default {
    data() {
      return {
        subtitle: 'Top Products',
        activeBtn: 'buttonProduct1',
        showInflowsChart: true,
        showOutFlowsChart: false,
        showAUMChart: false,
        titles: [
          'Product',
          'Institutional AUM',
          'Flows',
          '% Change'
        ]
      }
    },
    methods: {
      showInflowsData() {
        this.showInflowsChart = true;
        this.showOutFlowsChart = false;
        this.showAUMChart = false;     
      },
      showOutflowsData() {
        this.showInflowsChart = false;
        this.showOutFlowsChart = true;
        this.showAUMChart = false;
      },
      showAUMData() {
        this.showInflowsChart = false;
        this.showOutFlowsChart = false;
        this.showAUMChart = true;
      },
      activeInflows() {
        this.activeBtn='buttonProduct1';
      },
      activeOutflows() {
        this.activeBtn='buttonProduct2';
      },
      activeAUM() {
        this.activeBtn='buttonProduct3';
      }
    },
    computed: {
      productData() {
        return this.$store.state.assetFlows.topProducts;
      }      
    },
    components: {
      'app-title-generator': TitleGenerator,
      'app-product-table': TopProductTable
    }
  }
</script>

<style scoped>
  div strong {
    font-size: 13px;
    margin-left: 10px;
  }

  .checkBox {
    margin-top: -8px;
    margin-left: 30px;
    background-color: #F0F4F7;
    padding: 10px;
    font-size: 13px;
  }

  .checkBox label {
    margin-top: 2px;
  }

  .active {
    background-color: #0076C0;    
  }

  div.row p {
    text-align: center;
    font-size: 50px;    
  } 

  #buttonField {
    margin-top: 5px;
    background-color: #F0F4F7;
    padding: 10px;
    height: 45px;
  }

  #buttonField button {
    padding: 0 15px;  
    font-size: 13px;
    height: 25px;
    text-align: center;
    border: 1px solid #979797;
  }  
</style>