<script setup>
const post = ref();
getPostsData().then((res) => (post.value = res));
</script>

<template>
  <main class="flex lg:flex-row flex-col gap-24 lg:min-h-[512px]">
    <section class="flex flex-col items-center justify-start w-full">
      <section class="w-full bg-white mr-4">
        <section
          class="w-full h-full bg-green-400 translate-x-4 translate-y-4 pb-8"
        >
          <h1 class="text-4xl lg:text-6xl w-full font-bold p-8">News</h1>
          <p class="text-lg lg:text-2xl px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit
            quam id mollitia est numquam eos aspernatur suscipit, pariatur, a
            ratione sint laborum aperiam molestias asperiores quos deleniti
            rerum iure. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Exercitationem modi nobis rem velit illo hic iure blanditiis
            nihil est! Blanditiis tenetur minima eius veritatis nulla illum
            saepe impedit dignissimos pariatur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iusto voluptatem placeat quibusdam,
            blanditiis asperiores deserunt labore inventore repellendus alias
            accusamus iste possimus eveniet suscipit ipsum consectetur earum
            necessitatibus cupiditate. Optio?
          </p>
        </section>
      </section>
    </section>
    <section
      v-if="post"
      class="w-full flex flex-col items-center lg:items-end justify-between"
    >
      <section class="bg-green-400 lg:h-[360px] w-full mr-4">
        <section
          class="bg-white flex justify-between flex-col lg:flex-row h-full translate-x-4 translate-y-4"
        >
          <section
            class="bg-gray-200 w-full min-h-[280px] flex justify-center items-center"
          >
            <i class="material-icons scale-[400%]">photo</i>
          </section>
          <section class="w-full flex flex-col justify-between">
            <h1 class="font-bold text-4xl p-8">
              <NuxtLink
                class="hover:underline"
                :to="'/articles/' + post[0].id"
                >{{ post[0].dane.title }}</NuxtLink
              >
            </h1>
            <div class="flex gap-2 items-center p-8">
              <div class="bg-green-400 w-4 h-4"></div>
              <span class="font-bold">{{ post[0].dane.date }}</span>
            </div>
          </section>
        </section>
      </section>
      <Btn class="mt-16 lg:mt-0" :text="`WIĘCEJ AKTUALNOŚCI`" to="/articles" />
    </section>
    <section
      v-if="!post"
      class="w-full h-96 bg-zinc-800 animate-pulse"
    ></section>
  </main>
</template>
