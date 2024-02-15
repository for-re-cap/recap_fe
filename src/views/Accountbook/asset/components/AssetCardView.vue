<template>
  <div>
    <AssetsCard :List="cards"/>
  </div>
</template>

<script setup lang="ts">
import AssetsCard from "@/components/grid-list/AssetsCard.vue";
import type { Asset } from "@/types";
import { onMounted, ref } from "vue";

/** 카드 */
const cards = ref<Asset[]>([
  {
    id: 0,
    name: "롯데카드",
    dsc: "신용",
    amount: 1000000,
    img: "/src/assets/image/card/lotte.jpg",
    user: "luke",
    share: false,
    sharedAsset: null,
    payDate: 5,
    memo: "테스트용",
    modify: false,
  },
]);
</script>
