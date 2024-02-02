<template>
  <BudgetAdd  v-if="budgetAdd" v-model:open="budgetAdd" @update:open="(data)=> {addBudget(data)} "/>
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
        <thead>
          <tr>
            <th scope="col" colspan="7" class="py-1 pr-3 text-sm font-semibold text-gray-700  bg-orange-300">
              <p class="flex gap-3 float-right">
                <button><SquaresPlusIcon class="w-5 h-5" /></button>
                <button><PencilIcon class="w-5 h-5" /></button>
                <button><TrashIcon class="w-5 h-5" /></button>
                <button><TagIcon class="w-5 h-5" /></button> 
              </p>
            </th>
          </tr>
          <tr>
            <th scope="col" class="py-2 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0 text-center">항목</th>
            <th scope="col" class="py-2 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0 text-center">카테고리</th>
            <th scope="col" class="px-3 py-2 text-sm font-semibold text-gray-900  text-center">내용</th>
            <th scope="col" class="px-3 py-2 text-sm font-semibold text-gray-900 text-center">금액</th>
            <th scope="col" class="max-sm:hidden px-3 py-2 text-sm font-semibold text-gray-900 text-center">일자</th>
            <th scope="col" class="max-sm:hidden px-3 py-2 text-sm font-semibold text-gray-900 text-center">결제</th>
            <th scope="col" class="max-sm:hidden px-3 py-2 text-sm font-semibold text-gray-900 text-center">비고</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="budget in budgetList" :key="budget.am">
            <td class="px-3 py-4 text-sm text-gray-500 ">수입</td>
            <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-500 ">
              {{ budget.category }}
              <dl class="font-normal sm:hidden">
                <dt class="sr-only">내용</dt>
                <dd class="mt-1 truncate text-gray-500">{{ budget.contents }}</dd>
                <dt class="sr-only ">금액</dt>
                <dd class="mt-1 truncate text-gray-500 ">{{ fnum(budget.am) }}</dd>
              </dl>
            </td>
            <td class="px-3 py-4 text-sm text-gray-500 ">{{ budget.contents }}</td>
            <td class="px-3 py-4 text-sm text-gray-500 text-right">{{ fnum(budget.am) }}</td>
            <td class="max-sm:hidden px-3 py-4 text-sm text-gray-500 text-center">{{ budget.days }}</td>
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
import { ref } from "vue";
import { PencilIcon,  TrashIcon,TagIcon ,SquaresPlusIcon} from "@heroicons/vue/24/outline";

const budgetAdd = ref(false)

const emit = defineEmits(['addBudget'])

defineProps<{
  budgetList: {
    budgetDsc : string;
    category: string;
    detailCate : string,
    contents: string;
    am: number;
    days : string;
    payMethod: string;
    cntn : string
  }[];
}>();


const addBudget = (data:{
  dsc : boolean
  budget : any
}) =>{
  budgetAdd.value = data.dsc
  console.log(data.budget)
  emit('addBudget', data.budget)
} 




</script>
