<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr scope="row">
          <th scope="col" v-for="(title, key) in titles" id="title" :key="key">
            {{title}}
          </th>
        </tr>
      </thead>
    </table>
    <table class="table table-hover">
      <thead>
        <tr>
          <th v-for="(period, index, key) in trailingPeriods" :key="key">
            {{period}}
          </th>
          <th v-for="(years, key) in calendarYears" :key="key">
            {{years}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tables,key) in tableData" :key="key">
          <td v-for="(data,key) in tables" :key="key">
            {{data}}
          </td>
        </tr>
      </tbody>
    </table>
    <hr>    
  </div>
</template>

<script>
  export default {
    props: ['titles', 'trailingPeriods', 'calendarYears', 'tableData']
  }
</script>

<style scoped>
  th {
    padding-left: 10px;
    font-size: 12px;
    font-family: "Arimo", sans-serif;
    border: none;
    color: #454545;
  }

  th#title {
    text-align: center; 
    padding: 0;
  }
  
  td {    
    font-size: 12px;
  }

  #title {
    border: none;
  }  
</style>