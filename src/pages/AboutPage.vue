<template>
  <div >
    <header class="sticky top-0 px-8  md:py-12 md:px-20 z-10 bg-black/30 backdrop-blur-xl text-2xl font-semibold py-6">
      <h1>Sobre nosotros</h1>
      <h2 class="text-xl font-semibold mt-4">Nuestro equipo:</h2>
    </header>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:px-20 md:py-12 px-8 pt-2 pb-20">
      <div
        v-for="member in team"
        :key="member.ra"
        class="bg-slate-950 rounded-xl shadow-md p-4 flex flex-col items-center gap-4"
      >
        <img
          :src="member.img"
          alt="Foto de perfil"
          class="size-48 object-cover rounded-xl aspect-square"
        />
        <div class="text-center">
          <h3 class="text-lg font-semibold">{{ member.name }}</h3>
          <p class="text-sm text-gray-500">{{ member.ra }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ReTeamFill } from '@kalimahapps/vue-icons';

  const team = [
    {
      name: 'José Roberto Bautista Rojas',
      ra: '202131284',
      img: "/img/roberto.jpg",
    },
    {
      name: 'Cruz Zapil',
      ra: '202131284',
      img: "/img/zapil.jpeg",
    },
    {
      name: 'Carlos López',
      ra: '202131284',
      img: "/img/carlos.jpg",
    },
    {
      name: 'Mario Apellido',
      ra: '202131284',
      img: "/img/mario.jpeg",
    },
    {
      name: 'Mynor Apellido',
      ra: '202131284',
      img: "/img/mynor.jpeg",
    },
  ];
</script>
<style scoped></style>
