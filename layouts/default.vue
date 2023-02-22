<script setup>
const user = useUser();

const signOut = () => {
  signOutUser();
};
</script>

<template>
  <main class="overflow-x-hidden">
    <header>
      <nav class="container mx-auto pb-2 mb-24 px-4 gap-12 flex justify-between flex-col">
        <section class="flex gap-8">
          <a href="" target="_blank">
            <button class="bg-green-400 p-1 px-4 text-sm font-bold hover:bg-white transition-all duration-200">
              JANIECPARADAISE
            </button>
          </a>
          <a href="https://www.janiectheme.site/" target="_blank">
            <button class="bg-green-400 p-1 px-4 text-sm font-bold hover:bg-white transition-all duration-200">
              WSPÓŁPRACA
            </button>
          </a>
        </section>
        <section class="flex justify-between gap-8">
          <div class="flex gap-8">
            <NuxtLink to="/">
              <img src="~assets/svg/logo.svg" />
            </NuxtLink>
            <section class="flex items-end gap-8">
              <Btn text="GRY" to="/games" />
            </section>
          </div>
          <section class="flex gap-12">
            <div v-if="user" class="flex justify-center items-end">
            <span class="text-white font-black">Cześć <span class="font-thin text-green-400">{{ user.email }}</span>!</span>
          </div>
          <div class="flex items-end">
            <NuxtLink v-if="!user" class="relative flex items-center" to="/profile/login">
              <i class="material-icons mx-2">login</i>
              <div for="login-btn" class="bg-white flex items-center w-full h-full absolute -z-10">
              </div>
              <button id="login-btn" class="btn">LOGIN</button>
            </NuxtLink>
            <div v-if="user" class="relative flex items-center" to="/profile/login">
              <i class="material-icons mx-2">logout</i>
              <div for="login-btn" class="bg-white flex items-center w-full h-full absolute -z-10">
              </div>
              <button @click="signOut" id="login-btn" class="btn">WYLOGUJ</button>
            </div>
          </div>
          </section>
        </section>
      </nav>
    </header>

    <section class="container mx-auto min-h-[750px] p-4">
      <NuxtPage />
    </section>

    <footer class="bg-green-400 h-full">
      <section class="h-full w-full container mx-auto p-4">
        <img class="mb-24 pt-8" src="~assets/svg/footerLogo.svg" />
        <div class="">
          <span>&COPY;2023 JaniecGames</span>
        </div>
      </section>
    </footer>
  </main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>