<template>
  <div>
    <header class="sticky top-0 px-8  md:pt-12 md:px-20  z-10 bg-black/30 backdrop-blur-xl text-2xl font-semibold py-6">
      <h1 >Vista General</h1>
    </header>
    <section class="md:px-20 px-8  pb-20">

    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
      <div
        v-for="item in indexData.topCards"
        :key="item.title"
        class="ring-1 ring-white/15 shadow-md rounded-lg p-4 bg-gradient-to-br from-neutral-800/10 to-neutral-700/40"
      >
        <div class="flex justify-between items-center">
          <div class="flex flex-col gap-y-2">
            <component :is="item.icon" class="size-7 text-white mb-2" />
            <h6 class="text-2xl font-semibold" :class="item.class">
              {{ item.title }}
            </h6>
            <code
              :class="{
                'font-black !text-2xl': item.title === 'Rendimiento Total',
                'text-red-500':
                  item.value < 0 && item.title === 'Rendimiento Total',
                'text-green-500':
                  item.value >= 0 && item.title === 'Rendimiento Total',
              }"
              class="text-xl font-semibold"
              >{{
                item.value.toLocaleString("en-GB", {
                  style: "currency",
                  currency: "USD",
                  signDisplay: item.title === 'Rendimiento Total' ? 'exceptZero' : 'auto'
                })
              }}</code
            >
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-2xl font-semibold py-6">Flujo general de inversión</h1>
  </section>
  </div>
</template>
<script setup>
  import { indexData } from "../data/indexData";
</script>
<style scoped></style>
