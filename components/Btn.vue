<script lang="ts" setup>
interface Props {
  text: string;
  to: string;
}

const props = defineProps<Props>();
</script>

<template>
  <NuxtLink class="relative" :to="props.to">
    <div class="bg-white flex items-center w-full h-full absolute -z-10"></div>
    <button class="btn">{{ text }}</button>
  </NuxtLink>
</template>
