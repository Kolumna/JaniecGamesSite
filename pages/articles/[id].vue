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
  <main class="flex flex-col lg:flex-row justify-between">
    <section class="flex flex-col gap-12">
      <section class="flex flex-col gap-12" v-if="data">
        <div class="flex flex-col gap-4">
          <h1 class="text-white text-lg lg:text-6xl font-bold">
            {{ data.title }}
          </h1>
          <span class="text-sm lg:text-xl font-bold text-green-400 mt-4">{{ data.date }}</span>
        </div>
        <p class="text-white text-xl lg:text-3xl pb-12">
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
    </section>
    <section v-if="data?.image">
      <img :src="data.image" />
    </section>
  </main>
</template>
