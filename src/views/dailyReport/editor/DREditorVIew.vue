<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">데일리리포트 작성</span>
    </header>
    <main class="pl-4 mt-4 h-full bg-neutral-50">
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

      <div class="flex justify-center">
        <DREditorTable :date="date" :timeLine="timeLine" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import DatePicker from "@/components/DatePicker.vue";
import { format, parse, add } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

import DREditorTable from "./components/DREditorTable.vue";

// ================================================================================

const date = ref(format(new Date(), "yyyy-MM-dd"));

const dateDelta = (days: number) => {
  date.value = format(add(parse(date.value, "yyyy-MM-dd", new Date()), { days }), "yyyy-MM-dd");
};
const dateToday = () => {
  date.value = format(new Date(), "yyyy-MM-dd");
};

watch(date, (val) => {
  console.log(val);
});

const timeLine = computed(() => {
  const start = 6;
  const end = 24;
  let timeLine: any = [];
  let tempArr: any = [];
  new Array((end - start + start) * 4).fill(0).map((_, i) => {
    const hour = Math.floor(i / 4) + start <= 24 ? Math.floor(i / 4) + start : Math.floor(i / 4) + start - 24;
    const min = i % 4 == 0 ? 0 : i % 4 == 1 ? 15 : i % 4 == 2 ? 30 : 45;
    const time = hour.toString().padStart(2, "0") + ":" + min.toString().padStart(2, "0");
    tempArr.push(time);
    if (i % 4 == 3 && i > 0) {
      timeLine.push({ hour: hour, time: tempArr });
      tempArr = [];
    }
  });
  return timeLine;
});

// ================================================================================
</script>
