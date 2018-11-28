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
  import EquityBar from "./components/NavBars/EquityBar/EquityBar.vue";
  import ProfileBar from "./components/NavBars/ProfileBar/ProfileBar.vue";
  import SideDashboard from "./components/NavBars/SideDashboard/SideDashboard.vue";  
  export default {  
    components: {
      ProfileBar: ProfileBar,
      EquityBar: EquityBar,    
      SideDashboard: SideDashboard      
    }
  };
</script>

<style>
  button:hover {
    cursor: pointer;
  }

  p.miniButton {
    font-size: 12px;    
    padding: 10px;
  }

  p.miniButton strong {
    color: #474747;
  }

  .active {
    background-color: #0076C0;    
  }
  .main {
    margin-left: 250px;
    padding: 0px 10px;
    font-family: "Arimo", sans-serif;
  }
  
  #chartRow {
    margin-top: 20px;
  }
  
  #tableWrapper {
    margin-top: -1px;
  }
</style>
