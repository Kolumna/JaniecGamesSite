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
              <NuxtLink class="relative" to="/games">
                <div class="bg-white w-full h-full absolute -z-10"></div>
                <button class="btn">
                  GRY
                </button>
              </NuxtLink>
            </section>
          </div>
          <div class="flex items-end">
            <NuxtLink class="relative flex items-center" to="/login">
              <i class="material-icons mx-2">login</i>
              <div for="login-btn" class="bg-white flex items-center w-full h-full absolute -z-10">
              </div>
              <button id="login-btn" class="btn">Login</button>
            </NuxtLink>
          </div>
        </section>
      </nav>
    </header>

    <section class="container mx-auto min-h-[500px] p-4">
      <slot />
    </section>

    <footer class="bg-green-400 h-full">
      <section class="h-full w-full container mx-auto p-4">
        <img class="mb-24 pt-8" src="~assets/svg/footerLogo.svg" />
        <div class="">
          <span class="font-black">&COPY;2023 JANIEC<span class=" font-normal">PARADAISE</span></span>
        </div>
      </section>
    </footer>
  </main>
</template>