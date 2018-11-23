<template>
  <div class="container-flex">
    <app-dropdown-menu :subtitle="subtitle"></app-dropdown-menu>
    <div class="row" id="chartRow">
      <app-growth-chart></app-growth-chart>
    </div>
  </div>  
</template>

<script>
  import GrowthChart from '../../Chart/StockChart.vue';
  import DropdownMenu from '../../DropdownGenerator/DropdownGenerator.vue';
  export default {
    data() {
      return {
        subtitle: 'Growth of $1000',
      }
    },
    components: {
      'app-dropdown-menu': DropdownMenu,
      'app-growth-chart': GrowthChart     
    }
  }  
</script>