<template>
  <div>
    <h2>All global Equity</h2>
    <ul class="nav">      
      <router-link 
        :to="link[0]" 
        tag="li" 
        v-for="(link,key) in anchors" 
        :key="key" 
        exact>
        <a>{{link[1]}}</a>
      </router-link>          
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      anchors: {
        overview: ['Overview','Overview'],
        performance: ['Performance','Performance'],
        assetFlows: ['AssetFlows','Asset Flows'],
        universeComparison: ['UniverseComparison','Universe Comparison'],
        constituents: ['Constituents','Constituents'],
        constituentHoldings: ['ConstituentHoldings','Constituent Holdings'],
        sectorAllocation: ['SectorAllocation','Sector Allocation'],
        ownershipActivity: ['OwnershipActivity','Ownership Activity']
      }      
    };
  }
};
</script>

<style scoped>
  ul {
    display: inline-flex;
  }
  
  a {
    margin: 0 10px;
    color: #999999;
  }

  .active {
    text-decoration: underline;
  }
  
</style>