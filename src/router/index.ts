import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },


    /*************************** 로그인 페이지 ************************************************* */

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/LoginView.vue')
    },


    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/AboutView.vue')
    },
    {
      path: '/dailyreport',
      name: 'dailyreport',
      component: () => import('@/views/daily_report/DailyReportView.vue')
    },

    // 가계부
    {
      path: '/accountbook',
      name: 'accountbook',
      component: () => import('@/views/accountBook/AccountBook.vue'),
      children: [
        {
          path : 'main',
          name : 'accountMain',
          component : () => import('@/views/accountBook/MainView.vue')
        },
        {
          path : 'budget',
          name : 'budget',
          component : () => import('@/views/accountBook/BudgetView.vue')
        },
        {
          path : 'asset',
          name : 'asset',
          component : () => import('@/views/accountBook/AssetView.vue')
        },
        {
          path : 'books',
          name : 'accountBooks',
          component : () => import('@/views/accountBook/BooksView.vue')
        },
        {
          path : 'callender',
          name : 'accountCallender',
          component : () => import('@/views/accountBook/CallenderView.vue')
        },
        {
          path : 'report',
          name : 'accountReport',
          component : () => import('@/views/accountBook/ReportView.vue')
        },
        {
          path : 'library',
          name : 'accountLibrary',
          component : () => import('@/views/accountBook/LibraryView.vue')
        },
      ]
    },

//  ******************************* ErroPage *****************************************
    {
      path: '/404',
      name : "notFound",
      component: () => import('@/views/error/NotFound.vue')
    },

    {
        path: '/:pathMatch(.*)*',
        redirect: "/404"
    },
  ]
})

export default router
