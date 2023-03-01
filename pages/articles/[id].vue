<script setup>
const { id } = useRoute().params;
const data = ref();
const error = ref(false);

const getData = async () => {
  await getPostDetails(id).then((res) =>
    res ? (data.value = res) : (error.value = true)
  );
  // if (error) {
  //   console.log("oj");
  //   throw createError({
  //     statusCode: 404,
  //     statusMessage: "Product not found",
  //     fatal: true,
  //   });
  // }
};

getData();
</script>

<template>
  <main class="flex flex-col gap-12">
    <section class="flex flex-col gap-12" v-if="data">
      <div class="flex flex-col gap-4">
        <h1 class="text-white text-6xl font-bold">
          {{ data.title }}
        </h1>
        <span class="text-xl font-bold text-green-400">{{ data.date }}</span>
      </div>
      <p class="text-white text-3xl">
        {{ data.text }}
      </p>
    </section>
    <section
      v-if="!data"
      class="w-full h-96 bg-zinc-800 animate-pulse"
    ></section>
    <section
      v-if="!data"
      class="w-full h-36 bg-zinc-800 animate-pulse"
    ></section>
  </main>
</template>
