<script lang="ts" setup>
import ThemeButton from './ThemeButton.vue';


</script>

<template>
  <div class="flex flex-row justify-center p-4">
    <nav class="flex flex-row gap-4 [&>a]:btn [&>a]:btn-ghost">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
    <ThemeButton />
  </div>
</template>

<style scoped>

</style>