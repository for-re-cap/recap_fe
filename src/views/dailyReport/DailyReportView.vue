<template>
  <div class="lg:pl-56 h-screen">
    <div class="h-full">
      <div class="float-right">
        <!-- <ListBox :selectOption="selectOption"></ListBox> -->
      </div>
      <div class="h-full">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { module, sidebarContents } from "@/stores/ui";
import { onMounted } from "vue";

const store = module();
const side = sidebarContents();

const content = [
  { name: "home", href: "/dailyreport/home", icon: "H" },
  { name: "DailyReport", href: "/dailyReport/editor", icon: "DR" },
  // { name: "Workcation", href: "#", icon: "W" },
];

onMounted(() => {
  store.setSide(true);
  store.setTop(false);
  side.setContents(content);
});
</script>

<style></style>
