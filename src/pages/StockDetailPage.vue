<template>
  <div class="flex flex-col min-h-full pb-20">
    <header
      class="sticky top-0 z-10 bg-black/10 backdrop-blur-lg md:px-20 md:pt-6 px-8 pt-8 pb-2.5"
    >
      <h1 class="text-2xl font-bold">
        <component
          :is="stockData.icon"
          class="size-14 mb-2"
          :class="stockData.class"
        />
        <span>{{ stockData.name }}</span> - <code>{{ stockData.code }}</code>
      </h1>
    </header>
    <h5 class="md:px-20 px-8 pt-2.5 font-black text-xl text-neutral-200">
      Detalles de la inversión
    </h5>
    <div
      class="md:px-20 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5"
    >
      <div
        v-for="item in stockData.cards"
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
              class="text-xl font-semibold flex items-center gap-x-4"
              :class="{
                'font-black !text-2xl': item.title === 'Rendimiento Final',
                'text-red-500':
                  item.value < 0 && item.title === 'Rendimiento Final',
                'text-green-500':
                  item.value >= 0 && item.title === 'Rendimiento Final',
              }"
              >{{
                item.title !== "Acciones Compradas"
                  ? item.value.toLocaleString("en-GB", {
                      style: "currency",
                      currency: "USD",
                      signDisplay:
                        item.title === "Rendimiento Final"
                          ? "exceptZero"
                          : "auto",
                    })
                  : `${item.value} acciones`
              }}
              <FaArrowTrendUp
                v-if="item.title === 'Rendimiento Final' && item.value >= 0"
                class="size-7 text-green-500"
              />
              <FaArrowTrendDown
                v-if="item.title === 'Rendimiento Final' && item.value < 0"
                class="size-7 text-red-500"
              />
            </code>
          </div>
        </div>
      </div>
    </div>
    <h5 class="md:px-20 px-8 py-2.5 font-black text-xl text-neutral-200">
      Gráfica
    </h5>
    <div class="md:px-20 px-8">
      <div
        ref="chartDiv"
        class="rounded-lg overflow-hidden ring-2 ring-white/15"
      ></div>
    </div>
    <h5 class="md:px-20 px-8 pb-3 pt-5 font-black text-xl text-neutral-200">
      Justificación de compra
    </h5>
    <p class="md:px-20 px-8 text-lg leading-relaxed">
      {{ stockData.description }}
    </p>
  </div>
</template>
<script setup>
  import { useRoute } from "vue-router";
  import { stocksIdInfo } from "../data/stocksIdInfo";
  import { FaArrowTrendDown, FaArrowTrendUp } from "@kalimahapps/vue-icons";
  import { createChart } from "lightweight-charts";
  import { h, onMounted, ref } from "vue";

  const route = useRoute();
  const stockData = stocksIdInfo[route.params.name];

  const chartDiv = ref(null);
  onMounted(() => {
    const chartOptions = {
      layout: {
        textColor: "white",
        background: { type: "solid", color: "black" },
      },
      grid: {
        vertLines: {
          color: "rgba(255, 255, 255, 0.05)",
        },
        horzLines: {
          color: "rgba(255, 255, 255, 0.05)",
        },
      },
      height: 500,
      localization: {
        priceFormatter: (price) => {
          return price.toLocaleString("en-GB", {
            style: "currency",
            currency: "USD",
          });
        },
      },
    };
    const chart = createChart(chartDiv.value, chartOptions);
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    if (stockData.history?.length) {
      candlestickSeries.setData(stockData.history);
      chart.timeScale().fitContent();
    }
  });
</script>
<style scoped></style>
