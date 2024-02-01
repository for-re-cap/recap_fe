<template>
  <div class="w-full h-full">
    <header>
      <HeaderMain v-show="showTopbar" class="z-50" />
    </header>
    <div class="min-h-screen">
      <SideBar v-show="sidebarOpen" />
      <RouterView />
    </div>
    <footer class="" v-show="false">
      <FooterBar class="relative bottom-0" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import HeaderMain from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import FooterBar from "./components/Footer.vue";
import { module } from "@/stores/ui";

const store = module();
const sidebarOpen = computed(() => store.sidebarOpen); // side bar show
const showTopbar = computed(() => store.showTopbar);





</script>
