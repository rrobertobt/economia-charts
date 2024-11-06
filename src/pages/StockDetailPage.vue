<template>
  <div class="flex flex-col min-h-full">
    <header
      class="sticky top-0 z-10 bg-black/10 backdrop-blur-lg md:px-20 md:pt-10 px-8 pt-8 pb-4"
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
    <h5 class="md:px-20 px-8 pt-2.5 font-semibold text-xl text-neutral-300">
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
    <h5 class="md:px-20 px-8 py-2.5 font-semibold text-xl text-neutral-300">
      Gráfica
    </h5>
    <div class="md:px-20 px-8">
      <div
        ref="chartDiv"
        class="rounded-lg overflow-hidden ring-2 ring-white/15"
      ></div>
    </div>
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

    // const data = [
    //   { open: 10, low: 10, high: 9.55, close: 9.55, time: 1723627546 },
    //   { open: 9.55, low: 9.55, high: 9.94, close: 9.94, time: 1724232346 },
    //   { open: 9.45, low: 9.45, high: 10.94, close: 10.94, time: 1725441946 },
    //   // { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
    //   // { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
    //   // { open: 9.51, high: 10.46, low: 9.1, close: 10.17, time: 1642773476 },
    //   // { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
    //   // { open: 10.47, high: 11.39, low: 10.4, close: 10.81, time: 1642946276 },
    //   // { open: 10.81, high: 11.6, low: 10.3, close: 10.75, time: 1643032676 },
    //   // { open: 10.75, high: 11.6, low: 10.49, close: 10.93, time: 1643119076 },
    //   // { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 },
    // ];

    if (stockData.history?.length) {
      candlestickSeries.setData(stockData.history);
      chart.timeScale().fitContent();
    }
  });
</script>
<style scoped></style>
