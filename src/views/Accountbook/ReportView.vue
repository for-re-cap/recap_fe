<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">2023년도 예산</span>
    </header>
    <main class="pl-4 mt-4 border h-screen">
      보고서
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(()=>{
  axios.get('/api/v2/Recap/test2').then((response:any)=>{
    console.log(response)
  })
})
</script>