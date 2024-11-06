<template>
  <div>
    <h1 class="text-3xl font-semibold">Vista General</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
      <div
        v-for="item in indexData.topCards"
        :key="item.title"
        class="bg-neutral-900/80 ring-1 ring-white/15 shadow-md rounded-lg p-4"
      >
        <div class="flex justify-between items-center">
          <div class="flex flex-col gap-y-2">
            <component :is="item.icon" class="size-7 text-white mb-2"/>
            <h6 class="text-2xl font-semibold" :class="item.class">{{ item.title }}</h6>
            <code class="text-xl font-semibold">{{ item.value.toLocaleString("es-GT",{ style: 'currency', currency: 'GTQ' }) }}</code>
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-3xl font-semibold py-6">Flujo general de inversión</h1>
  </div>
</template>
<script setup>
  import { indexData } from "../data/indexData";
</script>
<style scoped></style>
