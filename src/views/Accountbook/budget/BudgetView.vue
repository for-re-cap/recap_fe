<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">2023년도 예산</span>
    </header>
    <main class="pt-2 border h-screen">
      <div class="mt-2 pl-4">
        <div class="">
          <div class="sm:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-gray-900">
              수입예산
            </h1>
            <ListBox
              :propList="propList"
              v-model:selected="selected"
              @update:modelValue="(sel) => selected = sel"
            />
            <p class="mt-2 text-sm text-gray-700">
              1년중 수입에대한 예산을 입력해주세요
            </p>
            <BudgetTable v-model:budgetList="budgetList" @addBudget="addBudget($event)"/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUpdated } from "vue";

import TabsInPill from "@/components/TabsInPill.vue";
import ListBox from "@/components/BasListBox.vue";
import BudgetTable from "./components/BudgetTable.vue";
import type { Budget } from "@/types";


const propList = [
  { name: "전체", id: 0 },
  { name: "수입", id: 1 },
  { name: "지출", id: 2 },
  { name: "저축", id: 3 },
  { name: "투자", id: 4 },
];
const selected = ref(propList[0]);


/** 예산 목록 */
const budgetList = ref<Budget[]>([ // TODO :: budgetDsc number or string 선택해주어야함
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
  { budgetDsc : "수입" , category: "주수입", detailCate :"기타", contents: "월급", am: 10000, days : "2024-02-01" , payMethod: "계좌" ,cntn:"달달하다"},
]);

const addBudget = (budget: any) => {
  // TODO :: 백앤드 저장 연동
  budgetList.value.push(budget)
};
</script>
