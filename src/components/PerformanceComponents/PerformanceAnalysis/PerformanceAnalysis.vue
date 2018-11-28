<template>
  <div class="container-flex">
    <div class="row wrapper">      
      <p class="miniButton"><strong>Data Range: </strong>Nov 2017 to Jun 2018</p>
      <p class="miniButton"><strong>Risk Index: </strong>S&P 500</p> 
      <p class="miniButton"><strong>Data Range: </strong>FTSE 3 Mo. T-Bill</p>      
    </div>
    <app-title-generator :title="subtitle"></app-title-generator>   
    <div class="row wrapper">      
      <app-table-generator 
        :titles="titles.titles" 
        :trailingPeriods="titles.trailingPeriods"
        :calendarYears="titles.calendarYears"
        :tableData="tableGenerator"
      ></app-table-generator>      
    </div>
  </div>
</template>

<script>
  import DropdownGenerator from '../../DropdownGenerator/DropdownGenerator.vue';
  import TitleGenerator from '../../TitleGenerator/TitleGenerator.vue'
  import TableGenerator from '../TableGenerator/TableGenerator.vue';
  export default {
    data() {
      return {
        subtitle: 'Performance Analysis Desplayed in US Dollar (USD)',
        titles: {
          titles: ['Trailing Periods', 'Calendar Years'],
          trailingPeriods: ['','MRQ', 'YTD', '1 Yr', '3 Yr', '5 Yr', '7 Yr', '10 Yr'],
          calendarYears: ['2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008']
        }
      }
    },
    components: {
      'app-table-generator': TableGenerator,
      'app-title-generator': TitleGenerator,
      'app-dropdown-generator': DropdownGenerator
    },
    computed: {
      tableGenerator() {
        return this.$store.state.performance.performanceAnalysis;
      }
    }
  }
</script>

<style scoped>
  div.wrapper {
    margin-bottom: 20px;
  }
</style>