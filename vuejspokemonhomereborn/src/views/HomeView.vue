<template>
  <div class="home">
    <AccueilComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import AccueilComponent from '@/components/AccueilComponent.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "@/script/token.js";

export default {
  name: 'HomeView',
  components: {
    AccueilComponent: AccueilComponent
  }
}
</script>
