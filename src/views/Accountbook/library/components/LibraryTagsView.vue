<template>
  <div>
    <SimpleCard v-model:tags="tags" />
  </div>
</template>

<script setup lang="ts">

import SimpleCard from '@/components/grid-list/SimpleCardList.vue'
import type{ Tag } from "@/types";
import { ref } from 'vue';

/**************************** 테그 들어가는 내용 데이터 백에서 호출로 변경되어야함~! ********************************************************/
const tags = ref<Tag[]>([
  {
    name: "가족",
    modify : false,
    share : false,
    user : 'luke'
  },
  {
    name: "데이트",
    modify : false,
    share : false,
    user : 'luke'
  },
  {
    name: "선물",
    modify : false,
    share : false,
    user : 'luke'
  },
  {
    name: "회사",
    modify : false,
    share : false,
    user : 'luke'
  },
  {
    name: "여행",
    modify : false,
    share : false,
    user : 'luke'
  },
]);


</script>