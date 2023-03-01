<script setup>
definePageMeta({
  layout: "account",
});

const loading = ref(false);
const email = ref("");
const login = ref("");
const password = ref("");
const alert = ref(false);

const CreateAccount = async () => {
  loading.value = true;
  await createUser(email.value, password.value, login.value).then((res) =>
    res ? navigateTo("/") : (alert.value = true)
  );
  loading.value = false;
};
</script>

<template>
  <section class="container mx-auto flex justify-center items-center">
    <section class="flex gap-8 flex-col justify-center items-center h-screen">
      <NuxtLink to="/">
        <img src="~assets/svg/logo.svg" />
      </NuxtLink>
      <div
        :class="[
          !alert ? 'invisible' : '',
          'w-full h-12 bg-red-400 p-4 flex justify-start gap-4 items-center',
        ]"
      >
        <i class="material-icons">info</i
        ><span class="font-bold text-lg"
          >Błąd!! Jesteś podejrzany kolego.🕵️‍♂️</span
        >
      </div>
      <form
        @submit.prevent="CreateAccount"
        class="flex relative flex-col w-full gap-8 justify-center items-center"
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
        <div v-if="!loading" class="relative">
          <div
            class="bg-white flex items-center w-full h-full absolute -z-10"
          ></div>
          <button type="submit" class="btn">ZAREJESTRUJ</button>
        </div>
        <div v-if="loading">
          <svg
            aria-hidden="true"
            class="w-12 h-12 animate-spin text-gray-600 fill-green-400"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </form>
      <NuxtLink
        class="text-white font-black text-xl hover:text-green-400 transition-all duration-200"
        to="/auth/login"
        >Zaloguj się</NuxtLink
      >
    </section>
  </section>
</template>
