<script lang="ts" setup>
import "../assets/app.css"
import { useMyThemeStore } from '../stores/themeStore'
import { useMyToastStore } from '../stores/toastStore'

const themeStore = useMyThemeStore()
const toastStore = useMyToastStore()

</script>

<template>
  <div class="min-h-screen" :data-theme="themeStore.theme">
    <NavBar />
    <NuxtPage />
    <ToastContainer>
      <Toast
        v-for="toast in toastStore.messages"
        :id="toast.id"
        :key="toast.id"
        :message="toast.message"
        :type="toast.type"
      />
    </ToastContainer>
  </div>
</template>