<template>
  <div class="mt-4">
    <table class="divide-y divide-gray-300">
      <thead class="bg-orange-300">
        <tr>
          <th scope="col" colspan="5" class="px-2 py-1  text-xs font-medium">{{ today }}</th>
        </tr>
        <tr>
          <th scope="col" class="px-2 py-3.5 font-medium">HOUR</th>
          <th scope="col" class="px-2 py-3.5 font-medium">00</th>
          <th scope="col" class="px-2 py-3.5 font-medium">15</th>
          <th scope="col" class="px-2 py-3.5 font-medium">30</th>
          <th scope="col" class="px-2 py-3.5 font-medium">45</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(time, i) in timeLine" :key="i" class="">
          <td class="p-3 px-4 bg-orange-300 font-semibold text-sm">{{ time.hour.toString().padStart(2, "0")+'' }}</td>
          <td class="p-3 px-4 text-sm bg-white">{{ time.time[0] }}</td>
          <td class="p-3 px-4 text-sm bg-white">{{ time.time[1] }}</td>
          <td class="p-3 px-4 text-sm bg-white">{{ time.time[2] }}</td>
          <td class="p-3 px-4 text-sm bg-white">{{ time.time[3] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const props = defineProps<{
  today: any;
  timeLine: any[];
}>();

onMounted(() => {
  console.log(props.timeLine);
});
</script>
