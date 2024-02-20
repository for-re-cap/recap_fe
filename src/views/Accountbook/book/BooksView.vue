<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">가계부 작성</span>
    </header>
    <main class="pl-4 mt-4 h-full bg-neutral-50">
      <select class="p-2 mb-2">
        <option>11월 2023</option>
        <option>12월 2023</option>
      </select>
      
      <BooksTable :bookList="bookList"/>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PencilIcon,  TrashIcon,TagIcon ,SquaresPlusIcon} from "@heroicons/vue/24/outline";
import BooksTable from "./components/BooksTable.vue";
import type { AccountBook } from "@/types";


/** tabs  */
const tabs = ref([
  { name: "날짜별", idx: 0, route: "" },
  { name: "카테고리별", idx: 1, route: "" },
  { name: "자산별", idx: 2, route: "" },
]);



/** acconutBook data 연결 */
const bookList = ref<AccountBook[]>([
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,memo:"달달하다", instal:4,tags:[], user:'승기'},
])



</script>
