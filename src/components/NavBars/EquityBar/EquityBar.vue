<template>
  <div>
    <h2>All global Equity</h2>
    <ul class="nav">      
      <router-link :to="link" tag="li" v-for="(link,key) in links" :key="key" exact>
        <a>{{link}}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        "Overview",
        "Performance",
        "Asset Flows",
        "Universe Comparison",
        "Constituents",
        "Constituent Holdings",
        "Sector Allocation",
        "Ownership Activity"
      ]
    };
  }
};
</script>

<style scoped>
  a{
    margin: 0 10px;
  }
  
</style>