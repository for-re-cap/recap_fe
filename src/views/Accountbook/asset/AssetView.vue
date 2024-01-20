<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">자산</span>
    </header>
    <main class="mt-2 ">
      <div class="pt-2 mb-2">
        <TabsInPill v-model:tabs="tabs" />
      </div>
      <div class="pl-4">
        <!-- 자산추가 -->
        <AssetAdd
          v-if="assetAdd"
          v-model:open="assetAdd"
          @update:open="
            (data) => {
              assetAdd = data;
            }
          "
        />

        <div class="mt-4 pr-3">
          <RouterView></RouterView>
        </div>

        <div class="fixed right-5 bottom-5">
          <button
            type="button"
            class="block rounded-full bg-indigo-600 px-2 py-2 font-bold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="assetAdd = true"
          >
            <PlusIcon class="w-6 h-6" />
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TabsInPill from "@/components/TabsInPill.vue";
import AssetsCard from "@/components/grid-list/AssetsCard.vue";
import AssetAdd from "./components/AssetAdd.vue";

import { PlusIcon } from "@heroicons/vue/24/outline";

import { onBeforeMount, onMounted, onUpdated, ref } from "vue";

import type { Asset } from "@/types";
import router from "@/router";

const tabs = ref([
  { name: "카드", idx: 0, route: "assetCard" },
  { name: "은행", idx: 1, route: "assetBank" },
  { name: "증권", idx: 2, route: "assetStock" },
  { name: "부채", idx: 3, route: "assetDebt" },
]);

const assetAdd = ref(false);

onBeforeMount(() => router.push({ name: "assetCard" }));

onUpdated(() => {
  if (router.currentRoute.value.name == "asset")
    router.push({ name: "assetCard" });
});
</script>
