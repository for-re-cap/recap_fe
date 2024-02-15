<template>
  <div>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-[100]">
        <div class="fixed inset-0 z-[100] w-screen overflow-y-auto border-">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed w-screen inset-0 bg-gray-600 bg-opacity-5 transition-opacity" />
          </TransitionChild>
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 shadow-lg">
                <div>
                  <!-- <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                </div> -->
                  <div class="mt-3 text-center sm:mt-5">
                    <div class="flex justify-between items-center">
                      <DialogTitle as="h3" class="mt-4 pb-3 font-semibold leading-6 text-gray-900 ">예산 내역 추가</DialogTitle>
                      <div class="flex gap-2 justify-end text-sm">
                        <button
                          v-for="budget in budgetDsc"
                          :key="budget.id"
                          :class="[budgetAdd.budgetDsc == budget.id ? 'text-red-600' : '', 'px-1 text-smborder inline-block hover:bg-slate-100 hover:cursor-pointer']"
                          @click="budgetAdd.budgetDsc = budget.id"
                        >
                          {{ budget.name }}
                        </button>
                      </div>
                    </div>
                    <div class="mt-2 flex flex-col justify-start gap-y-6">
                      <div class="grid grid-cols-5 grid-rows-2 gap-y-2">
                        <p class="col-span-1 text-sm text-gray-500 font-semibold text-center"><SwatchIcon class="w-5 h-5" /></p>
                        <select class="col-span-4 border" @change="(event:any) => budgetAdd.category = event.target.value">
                          <option>식사</option>
                          <option>식사2</option>
                          <option>식사</option>
                        </select>
                        <p class="col-span-1 text-sm text-gray-500 font-semibold text-center"></p>
                        <select class="col-span-4 border" @change="(event:any) => budgetAdd.detailCate = event.target.value">
                          <option>상세카테고리</option>
                          <option>식사2</option>
                          <option>식사</option>
                        </select>
                      </div>
                      <div class="grid grid-cols-5 grid-rows-1 gap-y-2">
                        <p class="col-span-1 text-sm text-gray-500 font-semibold text-center"><PencilSquareIcon class="w-5 h-5" /></p>
                        <input v-model="budgetAdd.contents" class="col-span-4 border" placeholder="지출내역을 입력해주세요." />
                      </div>
                      <div class="grid grid-cols-5 grid-rows-1 gap-y-2">
                        <p class="col-span-1 text-sm text-gray-500 font-semibold text-center"><BanknotesIcon class="w-5 h-5" /></p>
                        <input v-model="budgetAdd.am" type="number" class="col-span-4 border" placeholder="지출금액을 입력해주세요." />
                      </div>
                      <div class="grid grid-cols-5 grid-rows-1 gap-y-2">
                        <p class="col-span-1 text-sm text-gray-500 font-semibold text-center"><WalletIcon class="w-5 h-5" /></p>
                        <select class="col-span-4 border" @change="(event:any) => budgetAdd.payMethod = event.target.value">
                          <option>자산목록 필요한가?? 상의필요</option>
                          <option>현금/은행/증권/부채</option>
                          <option>자산목록에서</option>
                          <option>자산목록에서</option>
                        </select>
                        <!-- <p class="col-span-1 text-sm text-gray-500 font-semibold text-center"></p>
                      <select class="col-span-4 border">
                        <option>일시불</option>
                      </select> -->
                      </div>
                      <div class="grid grid-cols-5 grid-rows-2 gap-y-2">
                        <p class="col-span-1 text-sm text-gray-500 font-semibold text-center"><CalendarIcon class="w-5 h-5" /></p>
                        <input type="date" v-model="budgetAdd.days" class="col-span-4" />
                        <!-- <VueDatePicker v-model="date" class="col-span-4"></VueDatePicker> -->
                        <p class="col-span-1 text-sm text-gray-500 font-semibold text-center"></p>
                        <select class="col-span-4 border">
                          <option>반복주기</option>
                        </select>
                      </div>
                      <div class="grid grid-cols-5 grid-rows-1 gap-y-2">
                        <p class="col-span-1 text-sm text-gray-500 font-semibold text-center mt-1"><TagIcon class="w-5 h-5" /></p>
                        <div class="col-span-4 text-sm text-gray-500 font-semibold text-left break-words">
                          <span v-for="tag in tagList" :key="tag.id" class="border inline-block mr-2 mt-1 px-1 hover:bg-slate-100 hover:cursor-pointer">{{ tag.name }}</span>
                        </div>
                      </div>
                      <div class="grid grid-cols-5 grid-rows-1 gap-y-2">
                        <p class="col-span-1 text-sm text-gray-500 font-semibold text-center"><DocumentIcon class="w-5 h-5" /></p>
                        <input class="col-span-4 border" v-model="budgetAdd.cntn" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-6 flex justify-end gap-2">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    @click="$emit('update:open', { dsc: true, budget: budgetAdd }) /* TODO 저장기능 만들어줘야행 */"
                  >
                    저장
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    @click="$emit('update:open', { dsc: false, budget: null })"
                  >
                    취소
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { PencilSquareIcon, SwatchIcon, BanknotesIcon, CalendarIcon, TagIcon, WalletIcon, DocumentIcon } from "@heroicons/vue/24/outline";

import { format } from "date-fns";
import type { Budget } from "@/types";

defineProps<{
  open: boolean;
}>();

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const date = format(today, "yyyy-MM-dd");

const tagList = [
  { id: 0, name: "가족" },
  { id: 1, name: "데이트" },
  { id: 2, name: "선물" },
  { id: 3, name: "회사" },
  { id: 4, name: "여행" },
];

const budgetDsc = [
  { id: 0, name: "수입" },
  { id: 1, name: "지출" },
  { id: 2, name: "저축" },
  { id: 3, name: "투자" },
];

const selectedBudget = ref(budgetDsc[0]);

const budgetAdd = ref<Budget>({
  budgetDsc: 0,
  category: "",
  detailCate: "",
  contents: "",
  am: 0,
  days: date,
  payMethod: "",
  cntn: "",
});

const budget = computed(() => {});
</script>
