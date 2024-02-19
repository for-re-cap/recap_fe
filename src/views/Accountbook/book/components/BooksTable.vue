<template>
  <div class="pr-2">
    <div class="sm:flex sm:items-center">
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          class="fixed right-5 bottom-5 block rounded-full bg-indigo-600 px-2 py-2 font-bold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="bookAdd = true"
        >
          <PlusIcon class="w-6 h-6" />
        </button>
      </div>
    </div>
    <div class="-mx-4 mt-8 sm:-mx-0">
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="">
          <tr>
            <th scope="col" colspan="11" class="sticky top-0  py-1 pr-3 text-sm font-semibold text-gray-700 bg-orange-300">
              <p class="flex gap-3 float-right">
                <button><SquaresPlusIcon class="w-5 h-5" /></button>
                <button><PencilIcon class="w-5 h-5" /></button>
                <button><TrashIcon class="w-5 h-5" /></button>
                <button><TagIcon class="w-5 h-5" /></button>
              </p>
            </th>
          </tr>
          <tr >
            <th scope="col" class="sticky top-7 bg-orange-100 py-2 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0 text-center">날짜</th>
            <th scope="col" class="sticky top-7 bg-orange-100 px-3 py-2 text-sm font-semibold text-gray-900 text-center">카테고리</th>
            <th scope="col" class="sticky top-7 bg-orange-100 max-sm:hidden px-3 py-2 text-sm font-semibold text-gray-900 text-center">내용</th>
            <th scope="col" class="sticky top-7 bg-orange-100 max-sm:hidden px-3 py-2 text-sm font-semibold text-gray-900 text-center">금액</th>
            <th scope="col" class="sticky top-7 bg-orange-100 max-sm:hidden px-3 py-2 text-sm font-semibold text-gray-900 text-center">주인</th>
            <th scope="col" class="sticky top-7 bg-orange-100 max-sm:hidden px-3 py-2 text-sm font-semibold text-gray-900 text-center">메모</th>
            <th scope="col" class="sticky top-7 bg-orange-100 max-sm:hidden px-3 py-2 text-sm font-semibold text-gray-900 text-center">태그</th>
            <th scope="col" class="sticky top-7 bg-orange-100 max-sm:hidden px-3 py-2 text-sm font-semibold text-gray-900 text-center">삭제</th>
            <th scope="col" class="sticky top-7 bg-orange-100 max-sm:hidden px-3 py-2 text-sm font-semibold text-gray-900 text-center">복사</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="(book, idx) in bookList" :key="book.am">
            <td class="px-3 py-4 text-sm text-gray-500 text-center">
                {{ book.days }} 
            </td>
            <td class="max-sm:hidden py-4 pl-4 pr-3 text-sm font-medium text-gray-500">
              {{ book.category }}
            </td>
            <td class="px-3 py-4 text-sm text-gray-500">{{ book.contents }}</td>
            <td class="px-3 py-4 text-sm text-gray-500 text-right">{{ fnum(book.am) }}</td>
            <td class="px-3 py-4 text-sm text-gray-500 text-center">{{ book.user }}</td>
            <td class="max-sm:hidden px-3 py-4 text-sm text-gray-500">{{ book.memo }}</td>
            <td class="max-sm:hidden px-3 py-4 text-sm text-gray-500">{{ book.tags }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlusIcon } from "@heroicons/vue/24/outline";
import { fnum } from "@/ts/utils";
// import bookAdd from "./bookAdd.vue";
import { computed, ref } from "vue";
import { PencilIcon, TrashIcon, TagIcon, SquaresPlusIcon, ChevronRightIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import type { AccountBook } from "@/types";
import { sortAndDeduplicateDiagnostics } from "typescript";

const bookAdd = ref(false);

const emit = defineEmits(["addbook"]);

const props = defineProps<{
  bookList: AccountBook[];
}>();

const mobile = ref<boolean[]>([])


const mobilea = computed({
  get(){
    let mob: boolean[] = [];
  props.bookList.forEach(() => {
    mob.push(false);
  });
  mobile.value = mob
  return mob;
  },
  set(newvalue){
    console.log(newvalue)
  },
  
});

const addbook = (data: { dsc: boolean; book: AccountBook }) => {
  bookAdd.value = data.dsc;
  if (data.dsc){
    emit("addbook", data.book);
  }else{
    bookAdd.value = data.dsc
  } 

};

</script>