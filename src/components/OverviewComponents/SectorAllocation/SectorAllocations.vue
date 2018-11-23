<template>
  <div class="container-flex">
    <app-title-generator :title="subtitle"></app-title-generator>
    <div class="row">
      <div class="col">
        <app-infomation :profileData="profileData" :titles="titles"></app-infomation>      
      </div>      
    </div>    
  </div>  
</template>

<script>
  import TitleGenerator from '../../TitleGenerator/TitleGenerator.vue';
  import Information from '../GrowthSectorCommonComponent/Information.vue';
  export default {
    data() {
      return {
        subtitle: 'Sector Allocations',
        titles: ['Sector', 'Allocation(%)']
      }    
    },
    components: {
      'app-infomation': Information,
      'app-title-generator': TitleGenerator
    },
    computed: {
      profileData() {
        return this.$store.state.overviewStore.sectorAllocations;
      }
    }
  };
</script>