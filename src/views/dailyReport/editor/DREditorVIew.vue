<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">가계부 작성</span>
    </header>
    <main class="pl-4 mt-4 border h-screen">
      <div class="mt-4 flex items-center gap-3">
        <button @click="dateDelta(-1)" class="rounded-md border border-gray-300 bg-white p-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50">
          <ChevronLeftIcon class="w-4" />
        </button>
        <DatePicker v-model="date" class="md:text-sm w-32 px-2 py-1.5 rounded-md shadow-sm border-gray-300" />
        <button @click="dateDelta(1)" class="rounded-md border border-gray-300 bg-white p-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50">
          <ChevronRightIcon class="w-4" />
        </button>
        <button @click="dateToday" class="rounded-md border border-gray-300 bg-white p-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50">오늘</button>
      </div>
      
      <DREditorTable />


    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import DatePicker from "@/components/DatePicker.vue";
import { format, parse, add } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

import DREditorTable from "./components/DREditorTable.vue"

// ================================================================================

const date = ref(format(new Date(), "yyyy-MM-dd"));
const respDate = ref("");

const dateDelta = (days: number) => {
  date.value = format(add(parse(date.value, "yyyy-MM-dd", new Date()), { days }), "yyyy-MM-dd");
};
const dateToday = () => {
  date.value = format(new Date(), "yyyy-MM-dd");
};

// ================================================================================





</script>
