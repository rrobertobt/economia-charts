<template>
  <div>
    <h1 class="text-3xl font-bold">
      <component :is="stockData.icon" class="size-14 mb-2" :class="stockData.class" />
      <span>{{ stockData.name }}</span> - <code>{{ stockData.code }}</code>
    </h1>
    <p>Detalles de la inversión</p>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { stocksIdInfo } from '../data/stocksIdInfo';

const route = useRoute();
const stockData = stocksIdInfo[route.params.name];

</script>
<style scoped>
</style>