import Overview from '../components/OverviewComponents/Overview.vue';
import AssetFlows from '../components/AssetFlowsComponents/AssetFlows.vue';
import Performance from '../components/PerformanceComponents/Performance.vue';
import Constituents from '../components/ConstituentsComponents/Constituents.vue';
import SectorAllocation from '../components/SectorAllocationComponents/SectorAllocation.vue';
import OwnershipActivity from '../components/OwnershipActivityComponents/OwnershipActivity.vue';
import UniverseComparison from '../components/UniverseComparisonComponents/UniverseComparison.vue';
import ConstituentHoldings from '../components/ConstituentHoldingsComponents/ConstituentHoldings.vue';

export const routes = [
  {path: '', component: Overview},
  {path: '/overview', component: Overview},  
  {path: '/assetFlows', component: AssetFlows},
  {path: '/performance', component: Performance},  
  {path: '/constituents', component: Constituents},
  {path: '/sectorAllocation', component: SectorAllocation},
  {path: '/ownershipActivity', component: OwnershipActivity},
  {path: '/universeComparison', component: UniverseComparison},
  {path: '/constituentHoldings', component: ConstituentHoldings} 
];