<template>
  <div>
    <h2 class="text-sm font-medium text-gray-500">
      <span class="pl-4">Pinned tags</span>
      <div class="absolute right-4 lg:top-[150px] mt-1 bottom-2">
        <PlusCircleIcon class="w-10 h-10 text-green-600 hover:cursor-pointer" @click="addTags(tags)" />
      </div>
    </h2>

    <ul role="list" class="mt-4 grid grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      <template v-for="tag in tags" :key="tag.name">
        <li class="col-span-1 flex rounded-lg border">
          <div class="flex flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium p-1 ml-3">
            <!-- {{ tag.initials }} -->
            <div class="rounded-full w-7 h-7 flex items-center justify-center p-1">
              <TagIcon class="w-5 h-5" />
            </div>
          </div>
          <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-gray-200 bg-white">
            <div class="flex-1 truncate pl-4 py-2 text-sm">
              <div class="flex justify-between">
                <a href="#" class="font-medium text-gray-900 hover:text-gray-600" v-if="!tag.modify">{{ tag.name }}</a>
                <input v-if="tag.modify" class="border w-full mr-2" v-model="tag.name" />
                <div>
                  <button v-if="tag.modify" class="border px-1 mr-1 hover:bg-slate-100 text-sm">취소</button>
                  <button v-if="tag.modify" class="border px-1 mr-1 hover:bg-slate-100 text-sm">저장</button>
                </div>
              </div>
            </div>
            <div class="flex justify-end items-center">
              <div class="absolute pr-2">
                <Menu as="div" class="relative ml-auto" v-if="!tag.modify">
                  <MenuButton class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Open options</span>
                    <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
                  </MenuButton>
                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <MenuItems class="absolute right-3 top-8 z-20 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      <MenuItem v-slot="{ active }">
                        <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Edit<span class="sr-only">, {{}}</span></a>
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </div>
            <!-- <div class="">
              <div class="triangle-topleft"></div>
              <div class="triangle-topright"></div>
            </div> -->
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { EllipsisVerticalIcon, PlusCircleIcon } from "@heroicons/vue/20/solid";
import { TagIcon } from "@heroicons/vue/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

import type { Tag } from "@/types";

const proops = defineProps<{
  tags: Tag[];
}>();

const addTags = (tags: Tag[]) => {
  proops.tags.push({
    name: "",
    modify: true,
    share: false,
    user: "luke",
  });
  console.log(tags);
};
</script>

<style scoped></style>
