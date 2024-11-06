<template>
  <div>
    <h1 class="text-3xl font-bold">
      <span>Sobre nosotros</span>
    </h1>
    <ReTeamFill class="size-12 my-2 text-indigo-400" />
    <h2 class="text-xl font-semibold mt-4">
      <span class="my-2">Nuestro equipo:</span>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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
