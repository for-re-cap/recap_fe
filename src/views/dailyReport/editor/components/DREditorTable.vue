<template>
  <div class="mt-4">
    <table class="min-w-full divide-y divide-gray-300">
      <thead class="bg-orange-300">
        <tr>
          <th scope="col" colspan="5" class="px-2 py-1 text-sm font-medium">{{ date }} ({{ week[new Date(date).getDay()] }})</th>
        </tr>
        <tr>
          <th scope="col" class="px-2 pt-3.5 pb-1 font-medium">HOUR</th>
          <th scope="col" class="px-2 pt-3.5 pb-1 font-medium">~15</th>
          <th scope="col" class="px-2 pt-3.5 pb-1 font-medium">~30</th>
          <th scope="col" class="px-2 pt-3.5 pb-1 font-medium">~45</th>
          <th scope="col" class="px-2 pt-3.5 pb-1 font-medium">~60</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(time, i) in timeLine" :key="i" class="">
          <td class="p-3 px-4 bg-orange-300 font-semibold text-sm">{{ time.hour.toString().padStart(2, "0")+'' }}</td>
          <td class="p-3 px-4 text-sm bg-white w-48 max-sm:w-20">{{ time.time[0] }}</td>
          <td class="p-3 px-4 text-sm bg-white w-48 max-sm:w-20">{{ time.time[1] }}</td>
          <td class="p-3 px-4 text-sm bg-white w-48 max-sm:w-20">{{ time.time[2] }}</td>
          <td class="p-3 px-4 text-sm bg-white w-48 max-sm:w-20">{{ time.time[3] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">

const week = ['일','월','화','수','목','금','토']
defineProps<{
  date: string;
  timeLine: any[];
}>();

</script>
