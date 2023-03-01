<script setup>
const posts = ref();
getPostsData().then((res) => (posts.value = res));
</script>

<template>
  <main>
    <section v-if="posts" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <section v-for="post in posts" class="w-full h-[450px] relative">
        <NuxtLink :to="'/articles/' + post.id">
          <section class="bg-white w-full h-full absolute -z-10"></section>
          <section
            class="p-8 w-full flex flex-col gap-8 justify-between h-full bg-green-400 hover:translate-x-2 hover:translate-y-2 transition-all duration-200"
          >
            <h1 class="text-3xl font-bold">{{ post.dane.title }}</h1>
            <div class="bg-gray-100 w-full h-full">PHOTO</div>
            <div class="flex items-center gap-2">
              <div class="h-4 w-6 bg-zinc-800"></div>
              <span class="font-bold">date DD/MM/RR</span>
            </div>
          </section>
        </NuxtLink>
      </section>
    </section>
    <section v-if="!posts" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <section class="w-full h-96 bg-zinc-800 animate-pulse"></section>
      <section class="w-full h-96 bg-zinc-800 animate-pulse"></section>
      <section class="w-full h-96 bg-zinc-800 animate-pulse"></section>
      <section class="w-full h-96 bg-zinc-800 animate-pulse"></section>
      <section class="w-full h-96 bg-zinc-800 animate-pulse"></section>
      <section class="w-full h-96 bg-zinc-800 animate-pulse"></section>
    </section>
  </main>
</template>
