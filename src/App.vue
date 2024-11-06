<template>
  <main class="min-h-screen bg-black">
    <aside
      class="fixed top-0 left-0 w-80 h-full backdrop-blur bg-zinc-950/65 overflow-y-auto scrollbar-hide z-50 transition-transform duration-300"
      :class="{ 'translate-x-0': menuOpen, '-translate-x-full': !menuOpen }"
    >
    <div class="px-6 pt-5 pb-2">
      <div class="flex items-center justify-between">
        <AnOutlinedStock class="size-12 text-indigo-600" />
        <button class="inline-block md:hidden items-center cursor-pointer p-2.5 my-2 hover:bg-white/10 transition-colors rounded-lg" @click="menuOpen = !menuOpen">
          <ClCloseMd/>
        </button>
      </div>
        <h1 class="text-2xl font-semibold">
           Inversiones
        </h1>
      </div>
      <nav class="py-4">
        <ul class="space-y-1.5">
          <ListItem v-for="item in menuItems" :key="item.name" :item="item" />
        </ul>
      </nav>
    </aside>
    <div class="ml-0 md:ml-72 md:px-20 md:py-12 px-8 py-8" >
      <label class="inline-block md:hidden items-center cursor-pointer p-2.5 my-2 hover:bg-white/10 transition-colors rounded-lg">
        <input type="checkbox" class="hidden" v-model="menuOpen" />
        <ChMenuHamburger/>
      </label>
      <router-view v-slot="{ Component, route }">
        <transition name="fade-up" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
      <!-- <RouterView /> -->
    </div>
  </main>
</template>
<script setup lang="jsx">
  import {
    AkDashboard,
    AkInfo,
    AnOutlinedStock,
    BsGoogle,
    BsNvidia,
    ChMenuHamburger,
    ClCloseMd,
    CoBrandBitcoin,
    HeOutlineMedicines,
    MdTwoToneVaccines,
    SiIbm,
    SiIntel,
    SiMcdonalds,
    SiMicrosoft,
    SiShell,
    SiStarbucks,
    SiTesla,
  } from "@kalimahapps/vue-icons";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
  import { defineComponent, ref } from "vue";
  import { RouterLink } from "vue-router";

  const breakpoint = useBreakpoints(breakpointsTailwind)
  const menuOpen = ref(breakpoint.smaller('sm').value ? false : true);

  const menuItems = [
    {
      name: "General",
      separator: true,
      icon: null,
      class: "!text-indigo-500 !bg-indigo-950",
    },
    {
      name: "Vista General",
      path: "/",
      icon: AkDashboard,
      class: "!text-indigo-500 !bg-indigo-950",
    },
    {
      name: "Empresas",
      separator: true,
      icon: null,
      class: "!text-indigo-500 !bg-indigo-950",
    },
    {
      name: "Intel Corp",
      path: "/stock/intel",
      icon: SiIntel,
      class: "!text-indigo-500 !bg-indigo-950",
    },
    {
      name: "Pfizer Inc",
      path: "/stock/pfizer",
      icon: HeOutlineMedicines,
      class: "!text-indigo-500 !bg-indigo-950",
    },
    {
      name: "Shell Corp",
      path: "/stock/shell",
      icon: SiShell,
      class: "!text-yellow-500 !bg-yellow-950",
    },
    {
      name: "Moderna Inc",
      path: "/stock/moderna",
      icon: MdTwoToneVaccines,
      class: "!text-blue-500 !bg-blue-950",
    },
    {
      name: "IBM Corp",
      path: "/stock/ibm",
      icon: SiIbm,
      class: "!text-blue-500 !bg-blue-950",
    },
    {
      name: "Starbucks",
      path: "/stock/starbucks",
      icon: SiStarbucks,
      class: "!text-green-500 !bg-green-950",
    },
    {
      name: "NVIDIA Corp",
      path: "/stock/nvidia",
      icon: BsNvidia,
      class: "!text-green-500 !bg-green-950",
    },
    {
      name: "Alphabet (Google)",
      path: "/stock/google",
      icon: BsGoogle,
      class: "!text-red-500 !bg-red-950",
    },
    {
      name: "Tesla Inc",
      path: "/stock/tesla",
      icon: SiTesla,
      class: "!text-red-500 !bg-red-950",
    },
    {
      name: "McDonald's",
      path: "/stock/mcdonalds",
      icon: SiMcdonalds,
      class: "!text-yellow-500 !bg-yellow-950",
    },
    {
      name: "Microsoft Corp",
      path: "/stock/microsoft",
      icon: SiMicrosoft,
      class: "!text-slate-500 !bg-slate-950",
    },
    {
      name: "Bitcoin",
      path: "/stock/bitcoin",
      icon: CoBrandBitcoin,
      class: "!text-yellow-500 !bg-yellow-950",
    },
    {
      name: "Extras",
      separator: true,
      icon: null,
      class: "!text-indigo-500 !bg-indigo-950",
    },
    {
      name: "Acerca de",
      path: "/about",
      icon: AkInfo,
      class: "!text-indigo-500 !bg-indigo-950",
    },
  ];

  const ListItem = defineComponent({
    props: {
      item: Object,
    },
    setup(props) {
      const Icon = props.item.icon;
      return () => (
        <>
          {props.item.separator ? (
            <li class="py-2 pl-6 text-xs font-light uppercase tracking-widest text-gray-300">
              {props.item.name}
            </li>
          ) : (
            <li>
              <RouterLink
                to={props.item.path}
                onClick={() => {breakpoint.smaller('sm').value && (menuOpen.value = false)}}
                active-class={`bg-black font-bold hover:!bg-black px-3 ${props.item.class}`}
                class="py-4 flex items-center gap-3 hover:bg-black  rounded-tl-xl rounded-bl-xl pl-4 ml-4 transition-all"
              >
                <Icon class="w-6 h-6" />
                {props.item.name}
              </RouterLink>
            </li>
          )}
        </>
      );
    },
  });
</script>

<style scoped>
  :root {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  .fade-up-enter-active,
  .fade-up-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }

  .fade-up-enter-from,
  .fade-up-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
</style>
