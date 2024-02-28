<template>
  <div class="divide-gray-200 rounded-lg sm:grid sm:grid-cols-3">
    <div
      v-for="(action, actionIdx) in categoryList"
      :key="action.title"
      :class="[
        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none ' : '',
        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
        actionIdx === categoryList.length - 2 ? 'sm:rounded-bl-lg' : '',
        actionIdx === categoryList.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
        'group relative bg-white p-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 m-3 border',
      ]"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span :class="[action.iconBackground, action.iconForeground, 'inline-flex rounded-full p-1 ring-3 ring-white']">
            <component :is="action.icon" class="h-6 w-6" aria-hidden="true" />
          </span>
          <a class="focus:outline-none ml-2 text-sm font-semibold">
            {{ action.title }}
          </a>
        </div>
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
                <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Edit<span class="sr-only">, {{}}</span></a>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <div class=" mt-4 gap-2 break-words">
        <!-- <h3 class="text-base font-semibold leading-6 text-gray-900"></h3> -->
        <span class="mt-4 text-[13px] text-gray-500 pl-2" v-for="sub in action.contents">{{ sub.name }}</span>
      </div>
      <span class="pointer-events-none absolute right-6 top-6 text-gray-400 group-hover:text-gray-500"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AcademicCapIcon, BanknotesIcon, EllipsisVerticalIcon, CheckBadgeIcon, ClockIcon, ReceiptRefundIcon, UsersIcon } from "@heroicons/vue/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { EllipsisHorizontalIcon } from "@heroicons/vue/20/solid";

defineProps<{
  categoryList: {
    title: string;
    icon: any;
    contents: {
      code: string;
      name: string;
    }[];
    iconForeground: string;
    iconBackground: string;
  }[];
}>();

const actions = [
  {
    title: "Request time off",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Benefits",
    href: "#",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Schedule a one-on-one",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Payroll",
    href: "#",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "Submit an expense",
    href: "#",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "Training",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];
</script>
