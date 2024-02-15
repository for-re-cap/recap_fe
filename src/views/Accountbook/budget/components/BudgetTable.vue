<template>
  <BudgetAdd
    v-if="budgetAdd"
    v-model:open="budgetAdd"
    @update:open="
      (data) => {
        addBudget(data);
      }
    "
  />
  <div class="pr-2">
    <div class="sm:flex sm:items-center">
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          class="fixed right-5 bottom-5 block rounded-full bg-indigo-600 px-2 py-2 font-bold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="budgetAdd = true"
        >
          <PlusIcon class="w-6 h-6" />
        </button>
      </div>
    </div>
    <div class="-mx-4 mt-8 sm:-mx-0">
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="">
          <tr>
            <th scope="col" colspan="7" class="sticky top-0  py-1 pr-3 text-sm font-semibold text-gray-700 bg-orange-300">
              <p class="flex gap-3 float-right">
                <button><SquaresPlusIcon class="w-5 h-5" /></button>
                <button><PencilIcon class="w-5 h-5" /></button>
                <button><TrashIcon class="w-5 h-5" /></button>
                <button><TagIcon class="w-5 h-5" /></button>
              </p>
            </th>
          </tr>
          <tr >
            <th scope="col" class="sticky top-7 bg-orange-100 py-2 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0 text-center">항목</th>
            <th scope="col" class="sticky top-7 bg-orange-100 max-sm:hidden py-2 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0 text-center">카테고리</th>
            <th scope="col" class="sticky top-7 bg-orange-100 px-3 py-2 text-sm font-semibold text-gray-900 text-center">내용</th>
            <th scope="col" class="sticky top-7 bg-orange-100 px-3 py-2 text-sm font-semibold text-gray-900 text-center">금액</th>
            <th scope="col" class="sticky top-7 bg-orange-100 px-3 py-2 text-sm font-semibold text-gray-900 text-center">일자</th>
            <th scope="col" class="sticky top-7 bg-orange-100 max-sm:hidden px-3 py-2 text-sm font-semibold text-gray-900 text-center">결제</th>
            <th scope="col" class="sticky top-7 bg-orange-100 max-sm:hidden px-3 py-2 text-sm font-semibold text-gray-900 text-center">비고</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="(budget, idx) in budgetList" :key="budget.am">
            <td class="px-3 py-4 text-sm text-gray-500">
              <p class="flex w-fit">
                {{ budget.budgetDsc }} 
                <div class="flex sm:hidden items-center justify-center">
                  <button @click="budgetMobile[idx] = !budgetMobile[idx]" >
                    <ChevronRightIcon v-if="!budgetMobile[idx]" class="w-4 h-4" />
                    <ChevronDownIcon  v-if="budgetMobile[idx]" class="w-4 h-4" />
                  </button>
                </div>
              </p>
              <dl class="font-normal sm:hidden" v-if="budgetMobile[idx]">
                <dt class="sr-only">카테고리</dt>
                <dd class="mt-1 truncate text-gray-500">{{ budget.category }} / {{ budget.detailCate }}</dd>
                <!-- <dt class="sr-only">내용</dt>
                <dd class="mt-1 truncate text-gray-500">{{ budget.contents }}</dd> -->
                <!-- <dt class="sr-only">금액</dt>
                <dd class="mt-1 truncate text-gray-500">{{ fnum(budget.am) }}</dd> -->
              </dl>
            </td>
            <td class="max-sm:hidden py-4 pl-4 pr-3 text-sm font-medium text-gray-500">
              {{ budget.category }}
            </td>
            <td class="px-3 py-4 text-sm text-gray-500">{{ budget.contents }}</td>
            <td class="px-3 py-4 text-sm text-gray-500 text-right">{{ fnum(budget.am) }}</td>
            <td class="px-3 py-4 text-sm text-gray-500 text-center">{{ budget.days }}</td>
            <td class="max-sm:hidden px-3 py-4 text-sm text-gray-500">{{ budget.payMethod }}</td>
            <td class="max-sm:hidden px-3 py-4 text-sm text-gray-500">{{ budget.cntn }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlusIcon } from "@heroicons/vue/24/outline";
import { fnum } from "@/ts/utils";
import BudgetAdd from "./BudgetAdd.vue";
import { computed, ref } from "vue";
import { PencilIcon, TrashIcon, TagIcon, SquaresPlusIcon, ChevronRightIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import type { Budget } from "@/types";
import { sortAndDeduplicateDiagnostics } from "typescript";

const budgetAdd = ref(false);

const emit = defineEmits(["addBudget"]);

const props = defineProps<{
  budgetList: Budget[];
}>();

const budgetMobile = ref<boolean[]>([])


const budgetMobilea = computed({
  get(){
    let mobile: boolean[] = [];
  props.budgetList.forEach(() => {
    mobile.push(false);
  });
  budgetMobile.value = mobile
  return mobile;
  },
  set(newvalue){
    console.log(newvalue)
  },
  
});

const addBudget = (data: { dsc: boolean; budget: Budget }) => {
  budgetAdd.value = data.dsc;
  if (data.dsc){
    emit("addBudget", data.budget);
  }else{
    budgetAdd.value = data.dsc
  } 

};
</script>
