<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>

              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                <div class="flex h-16 shrink-0 items-center">
                  <a href="/" class="flex items-center gap-2"><img class="h-8 w-auto" src="@/assets/red_bottle_cap_aih.png" alt="Your Company" />Re;Cap</a>
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="content in contents" :key="content.name">
                          <RouterLink v-slot="{ href, route, navigate, isActive, isExactActive }" :to="content.href" >
                            <a
                              :class="[
                                isActive ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                              ]"
                            >
                              <span
                                :class="[
                                  isActive ? 'text-indigo-600 border-indigo-600' : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white',
                                ]"
                                >{{ content.icon }}</span
                              >
                              <span class="truncate">{{ content.name }}</span>
                            </a>
                          </RouterLink>
                        </li>
                      </ul>
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>

                    </li>
                    <li>
                      <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="(item, i) in navigation" :key="item.name">
                          <router-link v-slot="{ href, route, navigate, isActive, isExactActive }" :to="item.href" @click="subName.setName(item.name)">
                            <a
                              :class="[
                                isActive ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                              ]"
                            >
                              <component
                                :is="item.icon"
                                :class="[isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
                                aria-hidden="true"
                              />
                              {{ item.name }}
                            </a>
                          </router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-56 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <div class="flex h-16 shrink-0 items-center">
          <router-link :to="'/'" class="flex items-center gap-2"><img class="h-8 w-auto" src="@/assets/red_bottle_cap_aih.png" alt="Your Company" />Re;Cap</router-link>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="content in contents" :key="content.name">
                  <router-link :to="content.href" v-slot="{ href, route, navigate, isActive, isExactActive }">
                    <a
                      :class="[
                        isActive ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                      ]"
                    >
                      <span
                        :class="[
                          isActive ? 'text-indigo-600 border-indigo-600' : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                          'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white',
                        ]"
                        >{{ content.icon }}</span
                      >
                      <span class="truncate">{{ content.name }}</span>
                    </a>
                  </router-link>
                </li>
              </ul>
            
            <li >
              <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
              <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="(item, i) in navigation" :key="item.name">
                  <router-link v-slot="{ href, route, navigate, isActive, isExactActive }" :to="item.href" @click="subName.setName(item.name)">
                    <a
                      :class="[
                        isActive ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                      ]"
                    >
                      <component :is="item.icon" :class="[isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </router-link>
                </li>
              </ul>
            </li>
            </li>
            <li class="-mx-6 mt-auto">
              <router-link to="#" class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                <img
                  class="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="flex-1 text-sm font-semibold leading-6 text-gray-900">{{ subName.getName }}</div>
      <router-link to="#">
        <span class="sr-only">Your profile</span>
        <img
          class="h-8 w-8 rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </router-link>
    </div>
    <!-- <main class="py-10 lg:pl-72">
      <div class="px-4 sm:px-6 lg:px-8">
        contents???
      </div>
    </main> -->
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { Bars3Icon, CalendarIcon, ChartPieIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { sidebarContents,getNames } from "@/stores/ui";

const subName = getNames();
const store = sidebarContents();

const navigation = [
  {
    name: "데일리리포트",
    href: "/dailyreport/main",
    icon: HomeIcon,
  },
  { name: "가계부", href: "/accountbook/main", icon: UsersIcon },
  { name: "습관노트", href: "/habbitCard", icon: FolderIcon },
  // { name: "Calendar", href: "#", icon: CalendarIcon },
  // { name: "Documents", href: "#", icon: DocumentDuplicateIcon },
  // { name: "Reports", href: "#", icon: ChartPieIcon },
];

const selectedNav = ref(navigation[0])

const contents = computed(()=> store.sideContent)


const sidebarOpen = ref(false);
</script>

<style></style>
