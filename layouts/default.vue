<script setup>
const user = useUser();
const username = useUserData();

const signOut = () => {
  signOutUser();
};
</script>

<template>
  <main class="overflow-x-hidden">
    <header>
      <nav
        class="container mx-auto pb-2 lg:mb-24 mt-12 lg:mt-0 mb-8 px-4 gap-12 flex justify-between flex-col"
      >
        <section class="flex justify-between">
          <section class="hidden lg:flex gap-4">
            <a href="" target="_blank">
              <button
                class="bg-green-400 h-8 p-1 px-4 text-sm font-bold hover:bg-white transition-all duration-200"
              >
                JANIECPARADAISE
              </button>
            </a>
            <a href="https://www.janiectheme.site/" target="_blank">
              <button
                class="bg-green-400 h-8 p-1 px-4 text-sm font-bold hover:bg-white transition-all duration-200"
              >
                WSPÓŁPRACA
              </button>
            </a>
          </section>
          <section v-if="user" class="hidden lg:flex h-8 gap-4">
            <NuxtLink to="/downloads">
              <section
                class="bg-green-400 hover:bg-white transition-all duration-200 h-full font-bold flex items-center justify-between"
              >
                <div class="flex justify-center items-center">
                  <i class="material-icons mx-2">download</i>
                </div>
                <div class="px-2 pr-4 text-sm">DO POBRANIA</div>
              </section>
            </NuxtLink>
            <section class="flex">
              <div class="bg-green-400 flex justify-center items-center">
                <i class="material-icons mx-2">account_circle</i>
              </div>
              <div
                class="h-full bg-white px-8 flex justify-center items-center font-bold"
              >
                {{ username }}
              </div>
            </section>
          </section>
        </section>
        <section class="flex justify-between gap-8">
          <div class="flex gap-4 w-64 lg:w-auto">
            <NuxtLink class="" to="/">
              <img src="~assets/svg/logo.svg" />
            </NuxtLink>
            <section class="hidden lg:flex items-end gap-8">
              <Btn text="GRY" to="/games" />
            </section>
            <section class="hidden lg:flex items-end gap-8">
              <Btn text="AKTUALNOŚCI" to="/articles" />
            </section>
          </div>
          <section class="lg:hidden">
            <div
              class="w-[45px] h-full flex justify-center items-end flex-col gap-2 cursor-pointer"
            >
              <div class="w-full h-[6px] bg-green-400"></div>
              <div class="w-full h-[6px] bg-green-400"></div>
              <div class="w-full h-[6px] bg-green-400"></div>
            </div>
          </section>
          <section class="hidden lg:flex gap-12">
            <div v-if="user" class="flex justify-center items-end">
              <span class="text-white font-black text-2xl"
                >Cześć
                <span class="font-thin text-green-400">{{ username }}</span
                >!</span
              >
            </div>
            <div class="flex items-end">
              <NuxtLink
                v-if="!user"
                class="relative flex items-center"
                to="/auth/login"
              >
                <i class="material-icons mx-2">login</i>
                <div
                  for="login-btn"
                  class="bg-white flex items-center w-full h-full absolute -z-10"
                ></div>
                <button id="login-btn" class="btn">LOGIN</button>
              </NuxtLink>
              <div
                v-if="user"
                class="relative flex items-center"
                to="/auth/login"
              >
                <i class="material-icons mx-2">logout</i>
                <div
                  for="login-btn"
                  class="bg-white flex items-center w-full h-full absolute -z-10"
                ></div>
                <button @click="signOut" id="login-btn" class="btn">
                  WYLOGUJ
                </button>
              </div>
            </div>
          </section>
        </section>
      </nav>
    </header>

    <section class="container mx-auto min-h-[750px] p-8 lg:p-4 mb-12">
      <NuxtPage />
    </section>

    <footer class="bg-green-400 h-full">
      <section
        class="h-full w-full flex justify-between container mx-auto p-4 pt-12"
      >
        <div class="flex flex-col gap-24">
          <img class="" src="~assets/svg/footerLogo.svg" />
          <div class="font-bold">
            <span>&COPY;2023 JaniecGames</span>
          </div>
        </div>
        <div class="flex items-start">
          <img class="" src="~assets/svg/JLab.svg" />
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
