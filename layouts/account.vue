<template>
  <main>
    <NuxtPage />
  </main>
</template>

<style scoped>
main {
  overflow-y: hidden;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
