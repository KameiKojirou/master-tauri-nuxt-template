<script lang="ts" setup>
import { useMyToastStore } from "../stores/toastStore";
import Toast from "./ToastBox.vue";

// Access the Pinia toast store
const toastStore = useMyToastStore();
</script>

<template>
  <div class="flex flex-col gap-2 toast toast-center">
    <Toast
      v-for="toast in toastStore.toasts"
      :key="toast.id"
      :msgtype="toast.msgtype"
      :message="toast.message"
    />
  </div>
</template>