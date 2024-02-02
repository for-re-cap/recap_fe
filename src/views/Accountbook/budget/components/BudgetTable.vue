<template>
  <BudgetAdd  v-if="budgetAdd" v-model:open="budgetAdd" @update:open="(data)=> {budgetAdd = data; } "/>
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
            <th scope="col" colspan="6" class="py-1 pr-3 text-sm font-semibold text-gray-700  bg-orange-300">
              <p class="flex gap-3 float-right">
                <button><SquaresPlusIcon class="w-5 h-5" /></button>
                <button><PencilIcon class="w-5 h-5" /></button>
                <button><TrashIcon class="w-5 h-5" /></button>
                <button><TagIcon class="w-5 h-5" /></button> 
              </p>
            </th>
          </tr>
          <tr>
            <th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">항목</th>
            <th scope="col" class="hidden px-3 py-2 text-left text-sm font-semibold text-gray-900 lg:table-cell">내용</th>
            <th scope="col" class="hidden px-3 py-2 text-left text-sm font-semibold text-gray-900 sm:table-cell">금액</th>
            <th scope="col" class="hidden px-3 py-2 text-left text-sm font-semibold text-gray-900 sm:table-cell">일자</th>
            <th scope="col" class="px-3 py-2 text-left text-sm font-semibold text-gray-900">결제</th>
            <th scope="col" class="px-3 py-2 text-left text-sm font-semibold text-gray-900">비고</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="budget in budgetList" :key="budget.am">
            <td class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
              {{ budget.category }}
              <dl class="font-normal lg:hidden">
                <dt class="sr-only">내용</dt>
                <dd class="mt-1 truncate text-gray-700">{{ budget.contents }}</dd>
                <dt class="sr-only sm:hidden">금액</dt>
                <dd class="mt-1 truncate text-gray-500 sm:hidden">{{ fnum(budget.am) }}</dd>
              </dl>
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{{ budget.contents }}</td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{{ fnum(budget.am) }}</td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">2024-02-01</td>
            <td class="px-3 py-4 text-sm text-gray-500">{{ budget.pay }}</td>
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

defineProps<{
  budgetList: {
    category: string;
    contents: string;
    am: number;
    pay: string;
  }[];
}>();
</script>
