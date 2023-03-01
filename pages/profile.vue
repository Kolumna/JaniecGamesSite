<script setup>
definePageMeta({
  middleware: ["auth"],
});

const user = useUser();
</script>

<template>
  <div v-if="user">
    <ClientOnly>
      <pre class="text-white w-96">
        {{ user }}
      </pre>
    </ClientOnly>
  </div>
</template>