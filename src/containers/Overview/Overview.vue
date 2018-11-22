<template>
  <div class="container-full">
    <div class="container-full">
      <div class="row">
        <div class="col">
          <app-growth></app-growth>
          <app-sector></app-sector>
          <app-universe></app-universe>                    
          <hr>
          <app-footer></app-footer>    
        </div>  
      </div>        
    </div>       
  </div>
</template>

<script>
import Footer from "../../components/Footer/Footer.vue";
import Growth from "../../components/OverviewComponents/Growth/Growth.vue";
import Universe from "../../components/OverviewComponents/UniverseInformation/Universe.vue";
import SectorAllocations from "../../components/OverviewComponents/SectorAllocation/SectorAllocations.vue";

export default {
  components: {
    "app-growth": Growth,
    "app-footer": Footer,   
    "app-universe": Universe,
    "app-sector": SectorAllocations,
  }
};
</script>

<style scoped>
  .container-full {
    margin: 0 auto;
    width: 100%;
  }
</style>