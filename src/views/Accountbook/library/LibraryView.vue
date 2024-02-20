<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">라이브러리</span>
    </header>
    <main class="mt-2 h-full bg-neutral-50">
      <div class="pt-2 mb-2">
        <TabsInPill v-model:tabs="tabs" />
      </div>
      <div class="">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TabsInPill from "@/components/TabsInPill.vue";
import router from "@/router";

import { ref, onUpdated, onBeforeMount } from "vue";

const tabs = ref([
  { name: "카테고리", idx: 0,  route: "libarayCategory" },
  { name: "태그", idx: 1,  route: "libarayTag" },
]);

onBeforeMount(() => router.push({ name: "libarayCategory" }));

onUpdated(() => {
  if (router.currentRoute.value.name == "accountLibrary") router.push({ name: "libarayCategory" });
});
</script>
