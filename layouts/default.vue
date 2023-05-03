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
        class="container mx-auto pb-2 lg:mb-24 lg:mt-0 mb-4 px-8 lg:px-4 gap-8 lg:gap-12 flex justify-between flex-col"
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
        <section class="flex justify-between items-center gap-8">
          <div class="flex gap-4 w-48 lg:w-auto">
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
              <svg
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_6_20"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="51"
                  height="51"
                >
                  <rect width="50.9675" height="50.9675" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_6_20)">
                  <path
                    d="M10 37V33.1667H44V37H10ZM10 27.4167V23.5833H44V27.4167H10ZM10 17.8333V14H44V17.8333H10Z"
                    fill="#4ade80"
                  />
                </g>
              </svg>
            </div>
          </section>
          <section class="hidden lg:flex gap-12">
            <!--<div v-if="user" class="flex justify-center items-end">
              <span class="text-white font-black text-2xl"
                >Cześć
                <span class="font-thin text-green-400">{{ username }}</span
                >!</span
              >
            </div>-->
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
                <button id="login-btn" class="btn">ZALOGUJ</button>
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
        class="h-full flex-col items-center lg:items-start lg:flex-row w-full flex justify-between container mx-auto p-4 pt-12"
      >
        <div class="flex flex-col gap-12">
          <img class="lg:w-96" width="300" src="~assets/svg/footerLogo.svg" />
          <div class="font-bold text-center lg:text-start">
            <span>&COPY;2023 JaniecGames</span>
          </div>
        </div>
        <div class="flex items-start mt-8 lg:m-0 mb-8">
          <img class="lg:w-64" width="200" src="~assets/svg/JLab.svg" />
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
