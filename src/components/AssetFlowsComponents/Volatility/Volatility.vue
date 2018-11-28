<template>
  <div class="container-flex">
    <app-title-generator :title="subtitle"></app-title-generator>   
    <div class="row" id="buttonField">
      <button 
        class="buttonFlow" 
        @click="showGrossData(); activeGross();"
        :class="{active: activeBtn === 'buttonFlow1'}">Gross Flows</button>
      <button 
        class="buttonFlow" 
        @click="showRetentionData(); activeRetention();"
        :class="{active: activeBtn === 'buttonFlow2'}">Retention Rate</button>
      <button 
        class="buttonFlow" 
        @click="showGrowthData(); activeGrowth();"
        :class="{active: activeBtn === 'buttonFlow3'}">Growth Rate</button>
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
    <div class="row" v-if="showGrossChart">
      <app-volatily-gross></app-volatily-gross>
    </div>
    <div class="row" v-if="showRetentionChart">
      <app-volatility-retention></app-volatility-retention>
    </div>
    <div class="row" v-if="showGrowthChart">
      <app-volatility-growth></app-volatility-growth>
    </div>
  </div>
</template>

<script>
  import VolatilityGrowth from './VolatilityCharts/VolatilityGrowth.vue';
  import VolatilityRetention from './VolatilityCharts/VolatilityRetention.vue'
  import VolatilityGross from './VolatilityCharts/VolatilityGross.vue';
  import TitleGenerator from '../../TitleGenerator/TitleGenerator.vue';
  export default {
    data() {
      return {
        subtitle: 'Volatility',
        activeBtn: 'buttonFlow1',
        showGrossChart: true,
        showRetentionChart: false,
        showGrowthChart: false,
      }
    },        
    methods: {
      showGrossData() {
        this.showGrossChart = true;
        this.showGrowthChart = false;
        this.showRetentionChart = false;     
      },
      showRetentionData() {
        this.showGrossChart = false;
        this.showGrowthChart = false;
        this.showRetentionChart = true;
      },
      showGrowthData() {
        this.showGrossChart = false;
        this.showRetentionChart = false;
        this.showGrowthChart = true;
      },
      activeGross() {
        this.activeBtn='buttonFlow1';
      },
      activeRetention() {
        this.activeBtn='buttonFlow2';
      },
      activeGrowth() {
        this.activeBtn='buttonFlow3';
      }
    },
    components: {      
      'app-volatility-growth': VolatilityGrowth,
      'app-title-generator': TitleGenerator,
      'app-volatility-retention': VolatilityRetention,
      'app-volatily-gross': VolatilityGross
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