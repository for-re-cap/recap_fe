<template>
  <div>
    <span class="pl-4">카테고리선택</span>
    <div class="m-auto text-center">
      <LoadingSpinner v-if="loading" class=""/>
    </div>
    
    <CardList :categoryList="actions" />
  </div>
</template>

<script setup lang="ts">
import CardList from "@/components/grid-list/CardList.vue";
import { AcademicCapIcon, BanknotesIcon, EllipsisVerticalIcon, CheckBadgeIcon, ClockIcon, ReceiptRefundIcon, UsersIcon } from "@heroicons/vue/24/outline";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import axios from "axios";
import { ref } from "vue";

const loading = ref(true);

/**************************** 카테고리 들어가는 내용 데이터 백에서 호출로 변경되어야함~! ********************************************************/

const get_category = () => {
  
  axios
    .get("/api/v1/recap/library-category")
    .then((resp: any) => {
      console.log(resp);
      resp.data.data.forEach((el: any) => {
        let tempArr: { code: string; name: string }[] = [];
        el.data.forEach((sub: any) => {
          tempArr.push(sub);
        });
        actions.value.push({
          title: el.name,
          icon: ClockIcon,
          contents: tempArr,
          iconForeground: "text-teal-700",
          iconBackground: "bg-teal-50",
        });
      });
    }).then(()=>loading.value = false)
    .catch((err: any) => {
      console.log(err);
    });
};
get_category();

const actions = ref<
  {
    title: string;
    icon: any;
    contents: {
      code: string;
      name: string;
    }[];
    iconForeground: string;
    iconBackground: string;
  }[]
>([]);

// const actions = [
//   {
//     title: "식사",
//     icon: ClockIcon,
//     contents: ["고기", "기타", "배달", "분식", "뷔페", "식재료", "아시아음식", "양식", "일반식당", "일식", "중식", "치킨", "패밀리레스토랑", "패스트푸드", "한식"],
//     iconForeground: "text-teal-700",
//     iconBackground: "bg-teal-50",
//   },
//   {
//     title: "카페/간식",
//     icon: CheckBadgeIcon,
//     iconForeground: "text-purple-700",
//     iconBackground: "bg-purple-50",
//   },
//   {
//     title: "술/유흥",
//     icon: UsersIcon,
//     iconForeground: "text-sky-700",
//     iconBackground: "bg-sky-50",
//   },
//   {
//     title: "생활/마트",
//     icon: BanknotesIcon,
//     iconForeground: "text-yellow-700",
//     iconBackground: "bg-yellow-50",
//   },
//   {
//     title: "온라인쇼핑",
//     icon: ReceiptRefundIcon,
//     iconForeground: "text-rose-700",
//     iconBackground: "bg-rose-50",
//   },
//   {
//     title: "백화점/패션",
//     icon: AcademicCapIcon,
//     iconForeground: "text-indigo-700",
//     iconBackground: "bg-indigo-50",
//   },
// ];
</script>
