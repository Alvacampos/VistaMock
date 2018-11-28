<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <app-performance-analysis></app-performance-analysis>
        <app-constituent-performance></app-constituent-performance>
        <app-risk-regresion></app-risk-regresion>
        <app-efficiency-measures></app-efficiency-measures>
        <app-distribution-returns></app-distribution-returns>
        <app-risk-return></app-risk-return>
        <app-growth-1000></app-growth-1000>
        <hr/>
        <app-footer></app-footer>
      </div>
    </div>    
  </div>
</template>

<script>
  import Footer from '../Footer/Footer.vue';
  import Growth1000 from './Growth1000/Growth1000.vue';
  import RiskVsReturn from './RiskVsReturn/RiskVsReturn.vue';
  import DistributionReturns from './DistributionOfReturns/DistributionReturns.vue'
  import EfficiencyMeasures from './EfficiencyMeasures/EfficiencyMeasures.vue'
  import RiskAndRegression from './RiskAndRegression/RiskAndRegression.vue'
  import PerformanceAnalysis from './PerformanceAnalysis/PerformanceAnalysis.vue';
  import ConstituentPerformance from './ConstituentPerformance/ConstituentPerformance.vue';
  export default {
    components: {
      'app-footer': Footer,
      'app-growth-1000': Growth1000,
      'app-risk-return': RiskVsReturn,
      'app-risk-regresion': RiskAndRegression,
      'app-efficiency-measures': EfficiencyMeasures,
      'app-performance-analysis': PerformanceAnalysis,
      'app-distribution-returns': DistributionReturns,
      'app-constituent-performance': ConstituentPerformance,

    }
  }
</script>