<script setup>
definePageMeta({
  layout: "account",
});

const user = useUser();

const email = ref("");
const login = ref("");
const password = ref("");

const CreateAccount = async () => {
  await createUser(email.value, password.value).then((res) =>
    res ? navigateTo("/") : alert("Error")
  );

  console.log("tworzymy: ", email.value, password.value);
};
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
        @submit.prevent="CreateAccount"
        class="flex flex-col w-full gap-8 justify-center items-center"
      >
        <input
          v-model="email"
          type="email"
          class="p-4 h-12 w-full outline-none transition-all duration-200 font-bold focus:bg-white bg-green-400 placeholder:text-black placeholder:font-bold"
          placeholder="E-MAIL"
          required
        />
        <input
          v-model="login"
          type="text"
          class="p-4 h-12 w-full outline-none transition-all duration-200 font-bold focus:bg-white bg-green-400 placeholder:text-black placeholder:font-bold"
          placeholder="LOGIN"
        />
        <input
          v-model="password"
          type="password"
          class="p-4 h-12 w-full outline-none transition-all duration-200 font-bold focus:bg-white bg-green-400 placeholder:text-black placeholder:font-bold"
          placeholder="HASŁO"
          required
        />
        <div class="relative">
          <div
            class="bg-white flex items-center w-full h-full absolute -z-10"
          ></div>
          <button type="submit" class="btn">ZAREJESTRUJ</button>
        </div>
      </form>
      <NuxtLink
        class="text-white font-black text-xl hover:text-green-400 transition-all duration-200"
        to="/profile/login"
        >Zaloguj się</NuxtLink
      >
      <div v-if="user" class="relative">
        <div
          class="bg-white flex items-center w-full h-full absolute -z-10"
        ></div>
        <button @click="signOut" class="btn">Wyloguj</button>
      </div>
    </section>
  </section>
</template>
