<template>
  <div class="container-flex">    
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
  import TableGenerator from '../TableGenerator/TableGenerator.vue';
  import TitleGenerator from '../../TitleGenerator/titleGenerator.vue'
  export default {
    data() {
      return {
        subtitle: 'Efficiency Measure Displayed in US Dollar (USD)',
        titles: {
          titles: ['Trailing Periods', 'Calendar Years'],
          trailingPeriods: ['','MRQ', 'YTD', '1 Yr', '3 Yr', '5 Yr', '7 Yr', '10 Yr'],
          calendarYears: ['2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008']
        }
      }
    },
    components: {
      'app-table-generator': TableGenerator,
      'app-title-generator': TitleGenerator
    },
    computed: {
      tableGenerator() {
        return this.$store.state.performance.efficiencyMeasures;
      }
    }
  }
</script>

<style scoped>
  div.wrapper {
    margin-bottom: 20px;
  }  
</style>