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
        <tr  v-for="(product,key) in productData" :key="key">
          <td v-for="(data,key) in product" :key="key">
            {{ data }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: ['titles', 'productData']
  }
</script>

<style scoped>
  th {    
    padding: 10px;
    padding-left: 20px;
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