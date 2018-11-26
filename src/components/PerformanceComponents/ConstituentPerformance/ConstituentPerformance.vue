<template>
  <div class="container-flex">
    <app-title-generator :title="subtitle"></app-title-generator>   
    <div class="row" id="buttonField">
      <button 
        class="buttonPerformance" 
        @click="showTopData(); activeTop();"
        :class="{active: activeBtn === 'buttonPerformance1'}">Top Performers</button>
      <button 
        class="buttonPerformance" 
        @click="showBottomData(); activeBottom();"
        :class="{active: activeBtn === 'buttonPerformance2'}">Bottom Performers</button>
    </div>
    <div class="row">
      <app-constituent-performance 
        :titles="titles" 
        :constituentData="constituentTopData" 
        v-if="showTop"></app-constituent-performance>
      <app-constituent-performance 
        :titles="titles" 
        :constituentData="constituentBottomData" 
        v-if="showBottom"></app-constituent-performance>
    </div>    
    <div class="row">
      <router-link to="/Overview" id="showMore"><a>Show More</a></router-link>      
    </div>    
  </div>
</template>

<script>
  import TitleGenerator from '../../TitleGenerator/TitleGenerator.vue'
  import ConstituentPerformanceInformation from './ConstituentPerformanceInformation.vue';
  export default {
    data() {
      return {
        subtitle: 'Constituent Performance',
        titles: [
          'Product',
          '3 Year Return',
          'Total AUM',
          'Net Flow- 1 Year',
          'Top Holding',
          'Consultant Views'
        ],
        showTop: true,
        showBottom: false,
        activeBtn: 'buttonPerformance1'
      }
    },
    components: {
      'app-title-generator': TitleGenerator,
      'app-constituent-performance': ConstituentPerformanceInformation
    },
    computed: {
      constituentTopData() {
        return this.$store.state.performance.constituentPerformance;
      },
      constituentBottomData() {
        return this.$store.getters.resortState;
      }
    },
    methods: {
      showTopData() {
        this.showTop = true;
        this.showBottom = false;     
      },
      showBottomData() {
        this.showTop = false;
        this.showBottom = true;
      },
      activeTop() {
        this.activeBtn='buttonPerformance1'
      },
      activeBottom() {
        this.activeBtn='buttonPerformance2'
      }
    }    
  }
</script>

<style scoped>
  p {  
    font-size: 15px;
    font-weight: bold;
    font-family: "Arimo", sans-serif;
    color: #003667;
    height: 2px;
  }

  button:hover {
    cursor: pointer;
  }

  #title {
    background-color: #E0E6ED;
    padding: 10px;
  } 

  #buttonField {
    margin-top: 5px;
    background-color: #F0F4F7;
    padding: 10px;
  }

  #buttonField button {
    padding: 0 15px;  
    font-size: 13px;
    height: 25px;
    text-align: center;
    border: 1px solid #979797;
  }

  .active {
    background-color: #0076C0;    
  }

  #showMore {
    margin-bottom: 50px;
    margin-left: 20px;
    font-size: 12px;
    text-decoration: underline;
  }
</style>