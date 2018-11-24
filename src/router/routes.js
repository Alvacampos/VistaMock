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
  {path: '/Overview', component: Overview},  
  {path: '/AssetFlows', component: AssetFlows},
  {path: '/Performance', component: Performance},  
  {path: '/Constituents', component: Constituents},
  {path: '/SectorAllocation', component: SectorAllocation},
  {path: '/OwnershipActivity', component: OwnershipActivity},
  {path: '/UniverseComparison', component: UniverseComparison},
  {path: '/ConstituentHoldings', component: ConstituentHoldings} 
];