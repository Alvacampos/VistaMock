import Overview from '../containers/Overview/Overview.vue';
import AssetFlows from '../containers/AssetFlows/AssetFlows.vue';
import Performance from '../containers/Performance/Performance.vue';
import Constituents from '../containers/Constituents/Constituents.vue';
import SectorAllocation from '../containers/SectorAllocation/SectorAllocation.vue';
import OwnershipActivity from '../containers/OwnershipActivity/OwnershipActivity.vue';
import UniverseComparison from '../containers/UniverseComparison/UniverseComparison.vue';
import ConstituentHoldings from '../containers/ConstituentHoldings/ConstituentHoldings.vue';

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