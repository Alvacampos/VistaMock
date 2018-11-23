<template>
  <div id="app">
    <div>
      <div>
        <SideDashboard />
      </div>
      <div class="main">
        <ProfileBar />
        <EquityBar />
        <hr>
        <router-view></router-view>        
      </div>
    </div>
  </div>
</template>

<script>
  import Overview from "./containers/Overview/Overview.vue";
  import EquityBar from "./components/NavBars/EquityBar/EquityBar.vue";
  import ProfileBar from "./components/NavBars/ProfileBar/ProfileBar.vue";
  import SideDashboard from "./components/NavBars/SideDashboard/SideDashboard.vue";  
  export default {  
    components: {
      ProfileBar: ProfileBar,
      EquityBar: EquityBar,    
      SideDashboard: SideDashboard,
      Overview: Overview
    }
  };
</script>

<style>
  .main {
    margin-left: 250px;
    padding: 0px 10px;
    font-family: "Arimo", sans-serif;
  }

  #chartRow {
    margin-top: 20px;
  }
  
</style>
