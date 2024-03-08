<template>
  <div>
    <div class="bg-white sm:bg-gray-200 min-h-screen w-screen flex flex-col justify-center items-center">
      <div class="bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 h-screen sm:h-auto py-8">
        <div class="text-center w-full font-bold text-3xl text-gray-600 p-4">LOGIN</div>
        <div class="w-full bg-gray-200 my-3" style="height: 1px"></div>
        <form>
          <div class="flex flex-col gap-4 px-0 py-4">
            <div>
              <label class="text-gray-700">Email address</label>
              <svg xmlns="http://www.w3.org/2000/svg" class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input class="py-2 pl-10 border border-gray-200 w-full" placeholder="Email address" type="email" />
            </div>
            <div>
              <label class="text-gray-700">Password</label>
              <!-- <LockClosedIcon class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" /> -->
              <svg xmlns="http://www.w3.org/2000/svg" class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <input class="py-2 pl-10 border border-gray-200 w-full" placeholder="Password" type="password" />
            </div>
            <div class="w-full flex flex-row gap-2">
              <button
                class="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-0 flex flex-row justify-center items-center gap-1"
                type="submit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Login
              </button>
              <router-link
                :to="{ path: 'sign' }"
                class="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-2 flex flex-row justify-center items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Sign-up
              </router-link>
            </div>
            <div class="my-2 flex flex-row justify-center">
              <span class="absolute bg-white px-4">or</span>
              <div class="w-full bg-gray-200 mt-3" style="height: 1px"></div>
            </div>
            <div class="w-full flex flex-col gap-2">
              <button class="bg-red-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-red-600 duration-100 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="w-5"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
                Sign-in with Google
              </button>
              <button class="bg-yellow-400 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-yellow-500 duration-100 ease-in-out">
                <img
                  src="data:image/png;base64,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"
                  class="w-6 h-6 rounded-full"
                />
                Sign-in with Kakao
              </button>
              <button class="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-gray-800 duration-100 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="w-5"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
                Sign-in with Github
              </button>
            </div>
            <div class="w-full flex flex-row justify-end">
              <div class="border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 flex flex-row justify-center items-center p-1">
                <a href="#">Forgot password </a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="p-4">© kanne-Dev 2024</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { module, sidebarContents } from "@/stores/ui";
import { onMounted } from "vue";

const store = module();

onMounted(() => {
  store.setSide(false);
  store.setTop(false);
});
</script>
