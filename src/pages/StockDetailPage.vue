<template>
  <div>
    <h1 class="text-3xl font-bold">
      <component :is="stockData.icon" class="size-14 mb-2" :class="stockData.class" />
      <span>{{ stockData.name }}</span> - <code>{{ stockData.code }}</code>
    </h1>
    <p>Detalles de la inversión</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
      <div
        v-for="item in stockData.cards"
        :key="item.title"
        class="bg-neutral-900/80 ring-1 ring-white/15 shadow-md rounded-lg p-4"
      >
        <div class="flex justify-between items-center">
          <div class="flex flex-col gap-y-2">
            <component :is="item.icon" class="size-7 text-white mb-2"/>
            <h6 class="text-2xl font-semibold" :class="item.class">{{ item.title }}</h6>
            <code class="text-xl font-semibold flex items-center gap-x-4"
            :class="
            {
              'font-black !text-2xl': item.title === 'Rendimiento Final',
              'text-red-500': (item.value < 0 && item.title === 'Rendimiento Final'),
              'text-green-500': (item.value >= 0 && item.title === 'Rendimiento Final')
            }
            "
            >{{ item.title !== 'Acciones Compradas' ? item.value.toLocaleString("en-GB",{ style: 'currency', currency: 'USD' }) : `${item.value} acciones` }}
            <FaArrowTrendUp v-if="item.title === 'Rendimiento Final' && item.value >= 0" class="size-7 text-green-500"/>
            <FaArrowTrendDown v-if="item.title === 'Rendimiento Final' && item.value < 0" class="size-7 text-red-500"/>
          </code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { stocksIdInfo } from '../data/stocksIdInfo';
import { FaArrowTrendDown, FaArrowTrendUp } from '@kalimahapps/vue-icons';

const route = useRoute();
const stockData = stocksIdInfo[route.params.name];

</script>
<style scoped>
</style>