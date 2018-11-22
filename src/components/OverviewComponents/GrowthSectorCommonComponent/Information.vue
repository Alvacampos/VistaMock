<template>
  <div class="table-responsive">    
    <table class="table table-hover">
      <thead>
        <tr>
          <th v-for="(title,key) in titles" :key="key" scope="col">
            {{title}}
          </th>
        </tr>
      </thead>
      <tbody> 
        <tr v-for="data in profileData">
          <td v-for="element in data">
            {{element}}
          </td>            
        </tr>
      </tbody>
    </table>
  </div>      
</template>

<script>
export default {
  props: ["profileData", "titles"]
};
</script>

<style scoped>
  th {
    font-size: 13px;
    color: #474747;
    padding-bottom: 5px;
  }

  td {
    font-size: 12px;
  }
</style>