<script setup>
// import { RouterLink, RouterView } from 'vue-router'

// import { ref, onMounted, onBeforeMount, computed } from "vue";
import Default from "@/layouts/Default.vue";





const layouts = {
  default: Default,
  
};

// const route = useRoute();


</script>

<template>
 <main id="app" class="main-wrapper">
    <Component :is="activeLayout"> <RouterView /></Component>
  </main>

  <RouterView />
</template>

<style scoped>

</style>
