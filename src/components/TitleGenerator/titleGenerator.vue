<template>
  <div class="row wrapper" id="title">
      <p>{{title}}</p>      
  </div>
</template>

<script>
  export default {
    props:['title']
  }
</script>

<style scoped>
  div#title {
    background-color: #E0E6ED;
    padding: 10px;
  }

  div.wrapper p {  
    font-size: 15px;
    font-weight: bold;   
    color: #003667;
    height: 2px;
  }
</style>