<template>
  <div>
    <AssetsCard :List="stock"/>
  </div>
</template>

<script setup lang="ts">
import AssetsCard from "@/components/grid-list/AssetsCard.vue";
import type { Asset } from "@/types";
import { onMounted, ref } from "vue";



/** 증권 */
const stock = ref<Asset[]>([
  {
    id: 0,
    name: "KB증권",
    dsc: "증권",
    amount: 10_000_000,
    img: "/src/assets/image/bank/kookmin.png",
    user: "luke",
    share: false,
    sharedAsset: null,
    memo: "테스트용",
    modify: false,
  },
]);
</script>
