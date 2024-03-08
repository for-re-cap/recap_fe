<template>
  <div class="bg-gray-200 w-full min-h-screen flex items-center justify-center">
    <div class="w-full py-8">
      <!-- <div class="flex items-center justify-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          ></path>
        </svg>
        <h1 class="text-3xl font-bold text-blue-600 tracking-wider">Template</h1>
      </div> -->
      <div class="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
        <h2 class="text-center text-2xl font-bold tracking-wide text-gray-800">Sign Up</h2>
        <p class="text-center text-sm text-gray-600 mt-2">
          Already have an account? <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">Sign in here</a>
        </p>

        <form class="my-8 text-sm">
          <div class="flex flex-col my-4">
            <label for="name" class="text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
              placeholder="Enter your name"
            />
          </div>

          <div class="flex flex-col my-4">
            <label for="id" class="text-gray-700">ID</label>
            <input
              type="text"
              name="id"
              id="id"
              class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
              placeholder="Enter your ID"
            />
          </div>

          <div class="flex flex-col my-4">
            <label for="pwd" class="text-gray-700">Password</label>
            <input
              type="password"
              name="pwd"
              id="pwd"
              class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
              placeholder="Enter your Password"
            />
          </div>

          <div class="flex flex-col my-4">
            <label for="email" class="text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
              placeholder="Enter your email"
            />
          </div>

          <!-- <div class="flex flex-col my-4">
            <label for="password" class="text-gray-700">Password</label>
            <div x-data="{ show: false }" class="relative flex items-center mt-2">
              <input
                :type="show ? 'text' : 'password'"
                name="password"
                id="password"
                class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                placeholder="Enter your password"
                type="password"
              />
              <button @click="show = !show" type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                <svg x-show="!show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  ></path>
                </svg>

                <svg x-show="show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex flex-col my-4">
            <label for="password_confirmation" class="text-gray-700">Password Confirmation</label>
            <div x-data="{ show: false }" class="relative flex items-center mt-2">
              <input
                :type="show ? 'text' : 'password'"
                name="password_confirmation"
                id="password_confirmation"
                class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                placeholder="Enter your password again"
                type="password"
              />
              <button @click="show = !show" type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                <svg x-show="!show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  ></path>
                </svg>

                <svg x-show="show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </button>
            </div>
          </div> -->

          <div class="flex items-center">
            <input type="checkbox" name="remember_me" id="remember_me" class="mr-2 focus:ring-0 rounded" />
            <label for="remember_me" class="text-gray-700"
              >I accept the <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">terms</a> and
              <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</a></label
            >
          </div>

          <div class="mt-4 flex items-center justify-end space-x-4">
            <button class="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
          </div>
        </form>

        <div class="flex items-center justify-between">
          <div class="w-full h-[1px] bg-gray-300"></div>
          <span class="text-sm uppercase mx-6 text-gray-400">Or</span>
          <div class="w-full h-[1px] bg-gray-300"></div>
        </div>

        <div class="w-full flex flex-col gap-2 mt-7">
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
            Sign-up with Google
          </button>
          <button class="bg-yellow-400 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-yellow-500 duration-100 ease-in-out">
            <img
              src="data:image/png;base64,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"
              class="w-6 h-6 rounded-full"
            />
            Sign-up with Kakao
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
            Sign-up with Github
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { module } from "@/stores/ui";
import { onMounted } from "vue";

const store = module();

onMounted(() => {
  store.setSide(false);
  store.setTop(false);
});
</script>
