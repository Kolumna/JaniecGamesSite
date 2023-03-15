<script setup>
const post = ref();
getPostsData().then((res) => (post.value = res));
</script>

<template>
  <main class="flex lg:flex-row flex-col gap-24 lg:min-h-[512px]">
    <section class="flex items-start justify-start w-full">
      <section class="w-full bg-white mr-4">
        <section
          class="w-full h-full bg-green-400 translate-x-4 translate-y-4 p-8"
        >
          <h1 class="text-4xl lg:text-6xl w-full font-bold mb-9">
            JGamesLauncher
          </h1>
          <div class="text-6xl mb-8">
            <font-awesome-icon icon="fa-brands fa-windows" />
          </div>
          <p class="text-xl lg:text-3xl font-semibold mb-8">
            Już niedługo! :)
          </p>
          <div class="flex justify-end">
            <button
              class="p-4 px-8 bg-zinc-900 text-green-400 font-bold"
            >
              WKRÓTCE
            </button>
          </div>
        </section>
      </section>
    </section>
    <section
      v-if="post"
      class="w-full flex flex-col items-center lg:items-end justify-between"
    >
      <section class="bg-green-400 lg:h-[360px] w-full">
        <NuxtLink :to="'/articles/' + post[0].id">
          <section
            class="bg-white flex justify-between flex-col lg:flex-row h-full transition-all duration-200 hover:translate-x-4 hover:translate-y-4"
          >
            <section
              class="bg-gray-200 w-full min-h-[280px] flex justify-center items-center"
            >
              <img
                v-if="post[0].dane.image"
                alt="obrazek do postu"
                title="obrazek"
                :src="post[0].dane.image"
                class="h-full w-full object-cover"
              />
              <i v-if="!post[0].dane.image" class="material-icons scale-[400%]"
                >photo</i
              >
            </section>
            <section class="w-full flex flex-col justify-between">
              <h1 class="font-bold text-4xl p-8">{{ post[0].dane.title }}</h1>
              <div class="flex gap-2 items-center p-8">
                <div class="bg-green-400 w-4 h-4"></div>
                <span class="font-bold">{{ post[0].dane.date }}</span>
              </div>
            </section>
          </section>
        </NuxtLink>
      </section>
      <Btn class="mt-16 lg:mt-0" :text="`WIĘCEJ AKTUALNOŚCI`" to="/articles" />
    </section>
    <section
      v-if="!post"
      class="w-full h-96 bg-zinc-800 animate-pulse"
    ></section>
  </main>
</template>
