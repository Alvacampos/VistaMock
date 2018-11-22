<template>
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <th v-for="(title, key) in titles" :key="key">
            {{title}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(constituent,key) in constituentData" :key="key">
          <td v-for="(data,key) in constituent" :key="key">
            {{ data }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: ['titles', 'constituentData']
  }
</script>

<style scoped>
  th {
    text-align: center;
    padding: 10px;       
    font-size: 12px;
    font-family: "Arimo", sans-serif;
    border: none;
    color: #454545;
  }
  
  td {  
    margin: 0;
    padding-left: 20px;  
    font-size: 12px;
  }
</style>