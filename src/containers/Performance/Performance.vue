<template>
  <div class="container">
    <app-performance-analysis></app-performance-analysis>
    <app-constituent-performance></app-constituent-performance>
    <app-risk-regresion></app-risk-regresion>
    <app-efficiency-measures></app-efficiency-measures>
    <app-distribution-returns></app-distribution-returns>
    <app-risk-return></app-risk-return>
    <app-growth-1000></app-growth-1000>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Footer from '../../components/Footer/Footer.vue';
  import Growth1000 from '../../components/PerformanceComponents/Growth1000/Growth1000.vue';
  import RiskVsReturn from '../../components/PerformanceComponents/RiskVsReturn/RiskVsReturn.vue';
  import DistributionReturns from '../../components/PerformanceComponents/DistributionOfReturns/DistributionReturns.vue'
  import EfficiencyMeasures from '../../components/PerformanceComponents/EfficiencyMeasures/EfficiencyMeasures.vue'
  import RiskAndRegression from '../../components/PerformanceComponents/RiskAndRegression/RiskAndRegression.vue'
  import PerformanceAnalysis from '../../components/PerformanceComponents/PerformanceAnalysis/PerformanceAnalysis.vue';
  import ConstituentPerformance from '../../components/PerformanceComponents/ConstituentPerformance/ConstituentPerformance.vue';
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
