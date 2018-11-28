<template>
  <div class="container">    
    <div class="row wraper" id="buttonField">
      <button 
        class="equityButton" 
        @click="renderComponents" 
        :class="{active: activeBtn === 'equityButton1'}">Universe Overview</button>
      <button 
        class="equityButton" 
        @click="(activeBtn = 'equityButton2'); renderOtherComponents()" 
        :class="{active: activeBtn === 'equityButton2'}">Flows By Account Domicile</button>
      <button 
        class="equityButton" 
        @click="(activeBtn = 'equityButton3'); renderOtherComponents()" 
        :class="{active: activeBtn === 'equityButton3'}">Flows By Account Domicile</button>
      <button 
        class="equityButton" 
        @click="(activeBtn = 'equityButton4'); renderOtherComponents()" 
        :class="{active: activeBtn === 'equityButton4'}">Flows By Account Type</button>
      <button 
        class="equityButton" 
        @click="(activeBtn = 'equityButton5'); renderOtherComponents()"
        :class="{active: activeBtn === 'equityButton5'}">Product Lineup</button>
    </div>
    <div class="row wrapper">      
      <p class="miniButton"><strong>Data Range: </strong>Nov 2017 to Jun 2018</p>
      <p class="miniButton"><strong>Risk Index: </strong>S&P 500</p> 
      <p class="miniButton"><strong>Data Range: </strong>FTSE 3 Mo. T-Bill</p>   
    </div> 
    <template v-if="showComponent">
      <app-universe-aum></app-universe-aum>
      <app-universe-flows></app-universe-flows>
      <app-volatility></app-volatility>
      <app-top-products></app-top-products>  
    </template>
    <template v-else>
      <p>Under Construction</p>
    </template>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Footer from '../Footer/Footer.vue';
  import TopProducts from './TopProducts/TopProducts.vue';
  import Volatility from './Volatility/Volatility.vue';
  import UniverseAUM from './UniverseAUM/UniverseAUM.vue';
  import UniverseNetFlows from './UniverseNetFlows/UniverseNetFlows.vue';
  export default {
    data() {
      return {
        activeBtn: 'equityButton1',
        showComponent: true
      }
    },
    methods: {
      renderComponents() {
        this.activeBtn = 'equityButton1';
        this.showComponent = true;
      },
      renderOtherComponents() {
        this.showComponent = false;
      }
    },
    components: {
      'app-footer': Footer,
      'app-volatility': Volatility,
      'app-top-products': TopProducts,
      'app-universe-aum': UniverseAUM,
      'app-universe-flows': UniverseNetFlows
    }
  }
</script>

<style scoped>
  #buttonField {
    margin-top: 5px;
  }

  #buttonField button {
    padding: 0 15px;
    margin: 0 7px;  
    font-size: 13px;
    height: 25px;
    text-align: center;
    border: 1px  #979797;
  } 
</style>