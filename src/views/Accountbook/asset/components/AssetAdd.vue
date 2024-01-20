<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-[100]">
      <div class="fixed inset-0 z-[100] w-screen overflow-y-auto">
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
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              <div>
                <!-- <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div> -->
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900 mb-4">자산 등록</DialogTitle>
                  <div class="mt-2 flex flex-col justify-start gap-y-4">
                    <div class="grid grid-cols-3">
                      <p class="text-left col-span-1">타입 :</p>
                      <div class="text-left col-span-2">
                        <span v-for="dsc in assetDsc" :class=" [dsc == selectedAsset ? 'text-blue-600' : '' ,'mr-2 hover:cursor-pointer hover:text-blue-500']" @click="selectDsc(dsc)">{{ dsc }}</span>
                      </div>
                    </div>
                    <div class="grid grid-cols-3" >
                      <p class="text-left col-span-1">별칭 :</p>
                      <p class="text-left col-span-2"><input class="border" /></p>
                    </div>
                    <div class="grid grid-cols-3" v-if="selectedAsset == '체크' || selectedAsset == '신용'">
                      <p class="text-left col-span-1">기준일 :</p>
                      <p class="text-left col-span-2"><input class="border" v-model="payDate" @focusin="dateShow = true" @focusout="dateBye()" /></p>
                    </div>
                    <div class="grid grid-cols-3" v-if="selectedAsset == '증권' || selectedAsset == '계좌' || selectedAsset == '부채'">
                      <p class="text-left col-span-1">잔액 :</p>
                      <p class="text-left col-span-2"><input class="border" v-model="payDate" @focusin="dateShow = true" @focusout="dateBye()" /></p>
                    </div>
                    <div class="grid grid-cols-3">
                      <p class="text-left col-span-1">메모 :</p>
                      <p class="text-left col-span-2"><input class="border" /></p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="dateShow" class="grid grid-cols-6 text-center text-sm bg-slate-200 font-thin right-0 my-4 px-4 py-2">
                <template v-for="day in date">
                  <span @click="selectedDate(day)" class="mr-2 py-1 hover:cursor-pointer hover:text-blue-500 z-[101]">{{ day }}일</span>
                </template>
              </div>
              <div class="mt-5 sm:mt-6 flex justify-end gap-2">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  @click="$emit('update:open', false) /* 저장기능 만들어줘야행 */"
                >
                  저장
                </button>
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  @click="$emit('update:open', false)"
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
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

defineProps<{
  open: boolean;
}>();

const date = ref<number[]>([]);
const dateShow = ref(false);

const assetDsc = ref<string[]>(['체크','신용','계좌','증권','부채'])
const selectedAsset = ref('체크')

const payDate = ref<number>();

onMounted(() => {
  for (var i = 1; i < 31; i++) {
    date.value.push(i);
  }
});

const selectDsc = (dsc:string) =>{
    selectedAsset.value = dsc
}

const selectedDate = (day: number) => {
  console.log(day);
  payDate.value = day;
};
const dateBye = () =>{
    setTimeout(() => {
        dateShow.value =false
    }, 100);
}

</script>
