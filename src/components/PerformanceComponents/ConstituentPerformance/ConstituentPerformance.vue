<template>
  <div class="container-flex">
    <app-title-generator :title="subtitle"></app-title-generator>   
    <div class="row" id="buttonField">
      <button id="selectedButton" @click="changeInfo">Top Performers</button>
      <button id="unselectedButton" @click="changeInfo">Bottom Performers</button>
    </div>
    <div class="row" v-if="showTop">
      <app-constituent-performance :titles="titles" :constituentData="constituentData"></app-constituent-performance>
    </div>
    <div class="row" v-if="showBottom">
      <strong>More Info</strong>
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
        showBottom: false
      }
    },
    components: {
      'app-title-generator': TitleGenerator,
      'app-constituent-performance': ConstituentPerformanceInformation
    },
    computed: {
      constituentData() {
        return this.$store.state.performance.constituentPerformance;
      }
    },
    methods: {
      changeInfo() {
        //TODO: Smart rendering
        this.showTop = !this.showTop;
        this.showBottom = !this.showBottom;
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

  #selectedButton {
    background-color: #0076C0;    
  }

  #unselectedButton {
    background-color: #F0F4F7;
  }

  #showMore {
    margin-bottom: 50px;
    margin-left: 20px;
    font-size: 12px;
    text-decoration: underline;
  }
</style>