<template>
  <div>
    <header
      class="sticky top-0 px-8 md:pt-12 md:px-20 z-10 bg-black/30 backdrop-blur-xl text-2xl font-semibold py-6"
    >
      <h1>Vista General</h1>
    </header>
    <section class="md:px-20 px-8 pb-20">
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
                    signDisplay:
                      item.title === "Rendimiento Total"
                        ? "exceptZero"
                        : "auto",
                  })
                }}</code
              >
            </div>
          </div>
        </div>
      </div>
      <h1 class="text-2xl font-semibold py-6">Flujo general de inversión</h1>
      <div class="">
        <div
          ref="chartDiv"
          class="rounded-lg overflow-hidden ring-2 ring-white/15"
        ></div>
      </div>
    </section>
  </div>
</template>
<script setup>
  import { onMounted, ref } from "vue";
  import { indexData } from "../data/indexData";
  import { createChart } from "lightweight-charts";

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
    const areaSeries = chart.addBaselineSeries({
      baseValue: { type: "price", price: 0 },
      topLineColor: "#e9d5ff",
      topFillColor1: "rgba(192,132,252,0.8)",
      topFillColor2: "rgba(126,34,206,0.6)",
      bottomLineColor: "#f9a8d4",
      bottomFillColor1: "rgba(244,114,182,0.8)",
      bottomFillColor2: "rgba(190,24,93,0.6)",
    });

    const data = [
      { value: 0, time: 1723686030 },
      { value: 9_584.1, time: 1724290830 },
      { value: -5_073.93, time: 1724895630 },
      { value: -30_718.62, time: 1725500430 },
      { value: -10_201.75, time: 1726105230 },
      { value: 31_730.69, time: 1726710030 },
      { value: 46_565.06, time: 1727314830 },
      { value: 5_331.91, time: 1727919630 },
      { value: 2_230.38, time: 1728524430 },
      { value: 39_374.32, time: 1729129230 },
      { value: 50_290.29, time: 1729734030 },
      { value: 49_072.61, time: 1730338830 },
    ];

    areaSeries.setData(data);

    chart.timeScale().fitContent();
  });
</script>
<style scoped></style>
