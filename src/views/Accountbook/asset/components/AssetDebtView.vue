<template>
  <div>
    <AssetsCard :List="liability"/>
  </div>
</template>

<script setup lang="ts">
import AssetsCard from "@/components/grid-list/AssetsCard.vue";
import type { Asset } from "@/types";
import { onMounted, ref } from "vue";


const liability = ref<Asset[]>([
  {
    id: 0,
    name: "주택대출",
    dsc: "부채",
    amount: 160_000_000,
    img: "/src/assets/image/liability/hf.jpg",
    user: "luke",
    share: false,
    sharedAsset: null,
    cntn: "테스트용",
    modify: false,
  },
]);


</script>
