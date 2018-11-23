<template>
  <div class="container-flex">
    <app-dropdown-menu :subtitle="subtitle"></app-dropdown-menu>
    <div class="row" id="chartRow">
      <app-riskreturn-chart :chart="chart"></app-riskreturn-chart>
    </div>
  </div>
</template>

<script>
  import RiskReturnChart from '../../Chart/Chart.vue';
  import DropdownMenu from '../../DropdownGenerator/DropdownGenerator.vue';
  export default {
    data() {
      return {
        subtitle: 'Risk vs. Return',
        chart: 'line'
      }
    },
    components: {
      'app-dropdown-menu': DropdownMenu,
      'app-riskreturn-chart': RiskReturnChart     
    }
  }
</script>