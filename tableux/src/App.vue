<!-- App.vue -->
<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1 relative">
      <Topbar />
      <router-view />
    </div>
  </div> 
</template>

<script lang="ts"> 
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'
export default {
  name: 'App',
  components: {
    Topbar, 
    Sidebar
  }
}
</script>

<style>
 
</style>
