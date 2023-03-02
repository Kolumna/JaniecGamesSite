<script setup>
const user = useUser();
</script>

<template>
  <main class="flex flex-col gap-12">
    <section class="flex flex-col gap-16" v-if="user">
      <h1 class="text-6xl text-white font-bold">DO POBRANIA</h1>
      <section class="flex justify-center items-center py-12">
        <button
          class="bg-green-400 text-7xl p-8 px-16 flex font-bold items-center justify-between gap-12"
        >
          POBIERZ<font-awesome-icon icon="fa-brands fa-windows" />
        </button>
      </section>
      <ul class="text-white text-xl">
        <li class="flex items-center gap-8 mb-4">
          Szmeje Dungeons
          <button
            class="bg-green-400 hover:bg-white transition-all duration-200 p-2 px-4 text-zinc-900 font-bold flex items-center gap-2"
          >
            <i class="material-icons">download</i>POBIERZ
          </button>
        </li>
        <li class="flex items-center gap-8 mb-4">
          Szmeje Dungeons
          <button
            class="bg-green-400 hover:bg-white transition-all duration-200 p-2 px-4 text-zinc-900 font-bold flex items-center gap-2"
          >
            <i class="material-icons">download</i>POBIERZ
          </button>
        </li>
        <li class="flex items-center gap-8 mb-4">
          Szmeje Dungeons
          <button
            class="bg-green-400 hover:bg-white transition-all duration-200 p-2 px-4 text-zinc-900 font-bold flex items-center gap-2"
          >
            <i class="material-icons">download</i>POBIERZ
          </button>
        </li>
        <li class="flex items-center gap-8 mb-4">
          Szmeje Dungeons
          <button
            class="bg-green-400 hover:bg-white transition-all duration-200 p-2 px-4 text-zinc-900 font-bold flex items-center gap-2"
          >
            <i class="material-icons">download</i>POBIERZ
          </button>
        </li>
      </ul>
    </section>
    <section
      v-if="!user"
      class="w-full h-96 bg-zinc-800 animate-pulse"
    ></section>
    <section
      v-if="!user"
      class="w-full h-36 bg-zinc-800 animate-pulse"
    ></section>
  </main>
</template>
