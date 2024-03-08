<template>
  <!-- <PageBreadcrumb v-if="breadcrumbMode == 'full' && breadcrumb" :pages="breadcrumb" :mode="breadcrumbMode" /> -->
  <main class="flex-1">
    <div class="py-6">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <!-- <div v-if="breadcrumbMode == 'simple' && breadcrumb" class="mb-3">
          <PageBreadcrumb :pages="breadcrumb" />
        </div> -->
        <h1 class="text-2xl font-semibold text-gray-900"><slot name="title" /></h1>
      </div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <slot name="main" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

</script>
