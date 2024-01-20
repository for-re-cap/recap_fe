<template>
  <div>
    카드
    <AssetsCard :List="banks"/>
  </div>
</template>

<script setup lang="ts">
import AssetsCard from "@/components/grid-list/AssetsCard.vue";
import type { Asset } from "@/types";
import { onMounted, ref } from "vue";

/**  은행 */
const banks = ref<Asset[]>([
  {
    id: 0,
    name: "국민은행",
    dsc: "계좌",
    amount: 100000,
    img: "/src/assets/image/bank/kookmin.png",
    user: "luke",
    share: false,
    sharedAsset: null,
    cntn: "테스트용",
    modify: false,
  },
]);
</script>
