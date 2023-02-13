<script setup>
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
  <section class="flex flex-col justify-center items-center h-screen max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl text-slate-200 font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl text-slate-200 ">Ojoj..</p>
    <p class="mt-7 text-slate-200 ">{{ error.message }}</p>
    <div class="relative mt-7">
      <div for="login-btn" class="bg-white flex items-center w-full h-full absolute -z-10"></div>
      <button class="btn" @click="handleClearError">Wróć</button>
    </div>
  </section>
</template>

<style scoped>

</style>