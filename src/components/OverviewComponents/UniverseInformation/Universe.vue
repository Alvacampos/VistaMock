<template>
  <div class="container-flex">
    <app-title-generator :title="subtitle"></app-title-generator>    
    <div class="row" id="tableWrapper">
      <div class="col">
        <app-information :values="universeInformation"></app-information>
      </div>
    </div>    
  </div>  
</template>

<script>  
  import UniverseInformation from './UniverseInformation.vue';
  import TitleGenerator from '../../TitleGenerator/TitleGenerator.vue';
  export default {
    data() {
      return {
        subtitle: 'Peer Universe Information'
      }
    },
    computed: {      
      universeInformation() {
        return this.$store.state.overviewStore.universeInformation;
      }
    },
    components: {
      'app-information': UniverseInformation,
      'app-title-generator': TitleGenerator
    }
  };
</script>