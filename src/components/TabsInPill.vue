<template>
  <div class="border-b pb-2">
    <div class="sm:hidden">
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select 
        v-model="selectedTab"
        @change="(event:any)=>{
          selectedTab = event.target.value 
          router.push({name: tabs[selectedTab].route })
        }"
      class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
        <option v-for="tab in tabs" :key="tab.idx" :value="tab.idx" >
          {{ tab.name }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block ml-3">
      <nav class="flex space-x-4" aria-label="Tabs">
        <router-link v-for="tab in tabs" :key="tab.name" :to="{ name: tab.route }" v-slot="{ isActive }"
        @click="()=>{
          selectedTab = tab.idx
        }"
          ><span
            :class="[
              isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700 hover:bg-indigo-100',
              'rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer',
            ]"
            >{{ tab.name }}</span
          ></router-link
        >
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref, watch } from "vue";

const props = defineProps<{
  tabs: {
    name: string;
    idx: number;
    route: string;
  }[];
}>();

const selectedTab = ref(0);

</script>
