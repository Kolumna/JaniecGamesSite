<script setup>
definePageMeta({
  layout: "account",
});

const user = useUser();

const email = ref("");
const password = ref("");

const signIn = async () => {
  signInUser(email.value, password.value);
  password.value = "";
  email.value = "";
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
      <div
        class="invisible w-full h-12 bg-red-400 p-4 flex justify-between items-center"
      >
        <i class="material-icons">info</i
        ><span class="font-bold text-lg"
          >Sry, usługi chwilowo nie dostępne :(</span
        >
      </div>
      <form
        @submit.prevent="signIn"
        class="flex flex-col w-full items-center gap-8"
      >
        <input
          v-model="email"
          type="text"
          class="p-4 h-12 w-full outline-none transition-all duration-200 font-bold focus:bg-white bg-green-400 placeholder:text-black placeholder:font-bold"
          placeholder="LOGIN"
        />
        <input
          v-model="password"
          type="password"
          class="p-4 h-12 w-full outline-none transition-all duration-200 font-bold focus:bg-white bg-green-400 placeholder:text-black placeholder:font-bold"
          placeholder="HASŁO"
        />
        <div class="relative">
          <div
            class="bg-white flex items-center w-full h-full absolute -z-10"
          ></div>
          <button @click="signIn" class="btn">ZALOGUJ</button>
        </div>
        <NuxtLink
          class="text-white font-black text-xl hover:text-green-400 transition-all duration-200"
          to="/profile/register"
          >Załóż konto</NuxtLink
        >
      </form>

      <div v-if="user" class="relative">
        <div
          class="bg-white flex items-center w-full h-full absolute -z-10"
        ></div>
        <button @click="signOut" class="btn">Wyloguj</button>
      </div>
    </section>
  </section>
</template>
