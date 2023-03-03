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
            class="w-full relative flex flex-col justify-between h-full bg-green-400 overflow-hidden hover:translate-x-2 hover:translate-y-2 transition-all duration-200"
          >
            <h1 class="text-3xl font-bold p-8">{{ post.dane.title }}</h1>
            <div
              class="bg-zinc-800 w-full h-full text-white justify-center flex items-center"
            >
            <img v-if="post.dane.image" alt="obrazek do postu" title="obrazek" :src="post.dane.image" class="w-full h-full object-cover" />
            <i v-if="!post.dane.image" class="material-icons scale-[4]">
              photo
            </i>
            <div class="flex bottom-8 left-8 absolute items-center gap-2 bg-zinc-800 p-2">
              <div class="h-4 w-6 bg-green-400"></div>
              <span class="font-bold text-green-400">{{ post.dane.date }}</span>
            </div>
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
    </section>
  </main>
</template>
