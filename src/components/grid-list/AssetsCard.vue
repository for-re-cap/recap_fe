<template>
  <div>
    <ul role="list" class="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
      <li v-for="card in List" :key="card.id" class="overflow-hidden rounded-xl border border-gray-200">
        <ConnectAsset
          v-if="connectModal"
          v-model:open="connectModal"
          :card="card"
          @update:open="
            (data) => {
              connectModal = data;
            }
          "
        />
        <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
          <img :src="card.img" :alt="card.name" class="h-[30%] w-[20%] flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
          <div class="text-sm font-medium leading-6 text-gray-900">{{ card.name }}</div>
          <Menu as="div" class="relative ml-auto">
            <MenuButton class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Open options</span>
              <EllipsisHorizontalIcon class="h-5 w-5" aria-hidden="true" />
            </MenuButton>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems class="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-xs leading-6 text-gray-900']" @click="showDetailList(card)"
                    >내역보기<span class="sr-only">, {{ card.name }}</span></a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-xs leading-6 text-gray-900']" @click="modifyAsset(card)"
                    >수정<span class="sr-only">, {{ card.name }}</span></a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-xs leading-6 text-gray-900']" @click="mergerAsset(card)"
                    >합치기<span class="sr-only">, {{ card.name }}</span></a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }" v-if="card.dsc == '신용' || card.dsc == '체크'">
                  <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-xs leading-6 text-gray-900']" @click="connectAsset(card)"
                    >계좌 연결<span class="sr-only">, {{ card.name }}</span></a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-xs leading-6 text-gray-900']" @click="deleteAsset(card)"
                    >삭제<span class="sr-only">, {{ card.name }}</span></a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
          <div class="flex justify-between gap-x-4 py-3">
            <dt class="text-gray-500">명의</dt>
            <dd class="text-gray-700">
              <span v-if="!card.modify">{{ card.user }}</span>
              <input v-if="card.modify" class="text-right border" type="text" v-model="card.user" />
            </dd>
          </div>

          <div v-if="card.payDate" class="flex justify-between gap-x-4 py-3">
            <dt class="text-gray-500">기준일</dt>
            <dd class="text-gray-700">
              <span v-if="!card.modify">{{ card.payDate }}</span>
              <input v-if="card.modify" class="text-right border" type="number" v-model="card.payDate" />
              <!-- <time :datetime="card.lastInvoice.dateTime">{{ card.lastInvoice.date }}</time> -->
            </dd>
          </div>

          <div class="flex justify-between gap-x-4 py-3" >
            <dt class="text-gray-500">
              <span v-if="card.dsc == '증권'">예수금</span>
              <span v-else-if="card.dsc == '계좌' || card.dsc == '부채' || card.dsc == '현금'">잔액</span>
              <span v-else-if="card.dsc == '신용' || card.dsc == '체크'">누적</span>
            </dt>
            <dd class="flex items-start gap-x-2">
              <div class="font-medium text-gray-900" v-if="!card.modify">{{ fnum(card.amount) }}원</div>
              <input
                v-if="card.modify && (card.dsc == '계좌' || card.dsc == '증권' || card.dsc == '부채' || card.dsc == '현금')"
                class="text-right border"
                type="number"
                v-model="card.amount"
              />
              <!-- <div :class="[statuses[card.lastInvoice.status], 'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset']">{{ card.lastInvoice.status }}</div> -->
            </dd>
          </div>
          <div class="flex justify-end gap-x-4 py-3" v-if="card.modify">
            <button class="border-2 px-3 py-1 shadow-sm hover:cursor-pointer hover:bg-slate-200" @click="modifyCancel(card)">취소</button>
            <button class="border-2 px-3 py-1 shadow-sm hover:cursor-pointer hover:bg-slate-200">저장</button>
          </div>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { EllipsisHorizontalIcon } from "@heroicons/vue/20/solid";

import type { Asset } from "@/types";
import { fnum } from "@/ts/utils";

import ConnectAsset from "@/views/accountbook/components/ConnectAsset.vue";
import { ref } from "vue";

defineProps<{
  List: Asset[];
}>();

const connectModal = ref(false);

const statuses: any = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};

const showDetailList = (card: Asset) => {
  alert("곧 개발 예정임!!");
};
const mergerAsset = (card: Asset) => {
  alert("곧 개발 예정임!!");
};
const connectAsset = (card: Asset) => {
  connectModal.value = true;
};
const deleteAsset = (card: Asset) => {
  alert("곧 개발 예정임!!");
};

const modifyAsset = (card: Asset) => {
  card.modify = true;
  // alert('곧 개발 예정임!!')
};

const modifyCancel = (card: Asset) => {
  card.modify = false;
};
</script>
