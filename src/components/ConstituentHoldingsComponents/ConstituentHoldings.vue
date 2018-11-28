<template>
  <div class="container-flex">
    <div class="row">
      <div class="col">
        <p>Constituent Holdings</p>
      </div>      
    </div>    
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Footer from '../Footer/Footer.vue';
  export default {
    components: {
      'app-footer': Footer,
    }
  }
</script>