<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">가계부 작성</span>
    </header>
    <main class="pl-4 mt-4 border h-screen">
      <select class="p-2 mb-2">
        <option>11월 2023</option>
        <option>12월 2023</option>
      </select>
      <div class="pt-2 mb-2">
        <TabsInPill v-model:tabs="tabs" />
      </div>
      <table class="w-full">
        <thead>
          <tr>
            <td colspan="12" class="bg-orange-300 py-1">
              <p class="flex gap-2 float-right">
                <SquaresPlusIcon class="w-5 h-5" />
                <PencilIcon class="w-5 h-5" />
                <TrashIcon class="w-5 h-5" />
                <TagIcon class="w-5 h-5" /> 
              </p>
            </td>
          </tr>
        </thead>
        <tbody>
          <td class="border">날짜</td>
          <td class="border">분류</td>
          <td class="border">카테고리</td>
          <td class="border">상세카테고리</td>
          <td class="border">내용</td>
          <td class="border">금액</td>
          <td class="border">결제수단</td>
          <td class="border">할부</td>
          <td class="border">메모</td>
          <td class="border">태그</td>
          <td class="border">삭제</td>
          <td class="border">복제</td>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TabsInPill from "@/components/TabsInPill.vue";
import { PencilIcon,  TrashIcon,TagIcon ,SquaresPlusIcon} from "@heroicons/vue/24/outline";

/** tabs  */
const tabs = ref([
  { name: "날짜별", idx: 0, route: "" },
  { name: "카테고리별", idx: 1, route: "" },
  { name: "자산별", idx: 2, route: "" },
]);
</script>
