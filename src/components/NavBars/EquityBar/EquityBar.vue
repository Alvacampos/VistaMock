<template>
  <div class="container">
    <div class="row">
      <h2>All global Equity</h2>
    </div>
    <div class="row">
      <ul class="nav">      
        <router-link 
          :to="anchor.href" 
          tag="li" 
          v-for="(anchor,key) in anchors" 
          :key="key" 
          exact>
          <a>{{anchor.label}}</a>
        </router-link>
      </ul>
    </div>   
  </div>
</template>

<script>
export default {
  data() {
    return {
      anchors: [
        {
          label: 'Overview',
          href: 'overview'
        },
        {
          label: 'Performance',
          href: 'performance'
        },
        {
          label: 'Asset Flows',
          href: 'assetFlows'
        },
        {
          label: 'Universe Comparison',
          href: 'universeComparison'
        },
        {
          label: 'Constituents',
          href: 'constituents'
        },
        {
          label: 'Constituent Holdings',
          href: 'constituentHoldings'
        }
        ,{
          label: 'Sector Allocation',
          href: 'sectorAllocation'
        }
        ,{
          label: 'Ownership Activity',
          href: 'ownershipActivity'
        }        
      ]      
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

  div.row {
    margin-top: 10px;
    color: #003667;
  }
  
</style>