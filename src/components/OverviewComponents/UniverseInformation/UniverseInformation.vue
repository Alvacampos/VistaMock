<template>
  <div class="table-responsive">
    <table class="table table-hover">    
      <tbody>      
        <tr v-for="(value,index) in values" :key="index">
          <td>{{ value }}</td>        
        </tr>      
      </tbody>
    </table>
  </div>      
</template>

<script>
  export default {
    props: ["values"]  
  };
</script>

<style scoped>
  td {
    font-size: 12px;
  }  
</style>