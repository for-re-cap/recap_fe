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
import { module, sidebarContents,getNames } from "@/stores/ui";
import { onMounted } from "vue";
import ListBox from "@/components/ListBox.vue";
import EmptyProj from "@/components/EmptyProject.vue";

const store = module();
const side = sidebarContents();
const subName = getNames()

const selectOption = [
  { title: "개인가게부", description: "나의 소중한 가게부", current: true },
  { title: "공유가게부", description: "공유자:이예나", current: false },
];

const content = [
  { name: "홈", href: "/accountbook/main", icon: "H" },
  { name: "라이브러리", href: "/accountbook/library", icon: "L" },
  { name: "자산", href: "/accountbook/asset", icon: "A" },
  { name: "예산", href: "/accountbook/budget", icon: "B" },
  { name: "가계부내역", href: "/accountbook/books", icon: "W" },
  { name: "달력", href: "/accountbook/callender", icon: "C" },
  { name: "통계", href: "/accountbook/report", icon: "C" },
];

onMounted(() => {
  store.setSide(true);
  store.setTop(false);
  side.setContents(content);
});
</script>

<style></style>
