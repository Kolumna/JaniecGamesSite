<script setup>
definePageMeta({
  layout: "products",
});

const user = useUser();

const credentials = ref();

const signIn = async () => {
  const email = "test@test.pl";
  const password = "123456";
  credentials.value = await signInUser(email, password);
};

const signOut = async () => {
  const result = await signOutUser();
};

onMounted(async () => {
  // const email = "test@test.pl";
  // const password = "123456";
  // const credentials = await createUser(email, password);
  // console.log(`credentials: ${credentials}`);
});
</script>

<template>
  <section class="container mx-auto flex justify-center items-center">
    <section class="flex gap-8 flex-col justify-center items-center h-screen">
      <NuxtLink to="/">
        <img src="~assets/svg/logo.svg" />
      </NuxtLink>
      <div class="w-full h-12 bg-red-400 p-4 flex justify-between items-center">
        <i class="material-icons">info</i
        ><span class="font-bold text-lg"
          >Sry, usługi chwilowo nie dostępne :(</span
        >
      </div>
      <input
        type="text"
        class="p-2 h-12 w-full font-bold focus:bg-white bg-green-400 placeholder:text-black placeholder:font-bold"
        placeholder="LOGIN"
      />
      <input
        type="password"
        class="p-2 h-12 w-full font-bold focus:bg-white bg-green-400 placeholder:text-black placeholder:font-bold"
        placeholder="HASŁO"
      />
      <button @click="signIn" class="bg-white p-2">Zaloguj</button>
      <div v-if="user">
        <button @click="signOut" class="bg-white p-2">Wyloguj</button>
        <ClientOnly>
          <pre class="text-white w-96">
        {{ credentials }}
      </pre
          >
        </ClientOnly>
      </div>
    </section>
  </section>
</template>
