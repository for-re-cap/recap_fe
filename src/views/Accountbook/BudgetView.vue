<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">2023년도 예산</span>
    </header>
    <main class="pt-2 border h-screen">
      <TabsInPill v-model:tabs="tabs" />
      <div class="mt-2 pl-4">
        <div v-for="tab in tabs" :key="tab.href">
          <div v-show="tab.current && tab.href == 0" class="pr-12">
            <!-- <table class="border mt-2">
              <thead>
                <tr>
                  <td class="border">항목</td>
                  <td class="border">내용</td>
                  <td class="border">금액</td>
                  <td class="border">나가는일자 (종료일자 check)</td>
                  <td class="border">반복주기</td>
                  <td class="border">결제수단</td>
                  <td class="border">비고</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border">카데고리선택</td>
                  <td class="border">지출세부내용이름</td>
                  <td class="border">금액입력</td>
                  <td class="border">나가는날자 선택 (select box 1~30)</td>
                  <td class="border">종료일자선택 (달력선택input)</td>
                  <td class="border">결제수단(카드 계좌 등선택)</td>
                  <td class="border">비고내용입력</td>
                </tr>
                <tr>
                  <td colspan="7" class="border text-center">+</td>
                </tr>
              </tbody>
            </table> -->

            <div class="sm:flex-auto">
              <h1 class="text-base font-semibold leading-6 text-gray-900">수입예산</h1>
              <p class="mt-2 text-sm text-gray-700">1년중 수입에대한 예산을 입력해주세요</p>
            </div>
            <BudgetTable v-model:budgetList="budgetList" />
          </div>
          <div v-show="tab.current && tab.href == 1" class="pr-12">
            <div class="sm:flex-auto">
              <h1 class="text-base font-semibold leading-6 text-gray-900">지출예산</h1>
              <p class="mt-2 text-sm text-gray-700">1년중 지출에대한 예산을 입력해주세요</p>
            </div>
            <BudgetTable v-model:budgetList="budgetList" />
          </div>
          <div v-show="tab.current && tab.href == 2" class="pr-12">
            <div class="sm:flex-auto">
              <h1 class="text-base font-semibold leading-6 text-gray-900">저축예산</h1>
              <p class="mt-2 text-sm text-gray-700">1년중 저축에대한 예산을 입력해주세요</p>
            </div>
            <BudgetTable v-model:budgetList="budgetList" />
          </div>
          <div v-show="tab.current && tab.href == 3" class="pr-12">
            <div class="sm:flex-auto">
              <h1 class="text-base font-semibold leading-6 text-gray-900">투자예산</h1>
              <p class="mt-2 text-sm text-gray-700">1년중 투자에대한 예산을 입력해주세요</p>
            </div>
            <BudgetTable v-model:budgetList="budgetList" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TabsInPill from "@/components/TabsInPill.vue";
import BudgetTable from "./components/BudgetTable.vue";


/** tabs  */
const tabs = ref([
  { name: "수입", href: 0, current: true },
  { name: "지출", href: 1, current: false },
  { name: "저축", href: 2, current: false },
  { name: "투자", href: 3, current: false },
]);

/** 예산 목록 */
const budgetList = ref([{ category: "주수입", contents: "월급", am: 10000, role: "계좌" }]);

const addbudget = (dsc:number) =>{
  // 0수입 1지출 3저축 4투자
  
}

</script>
