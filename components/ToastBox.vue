<script lang="ts" setup>
const props = defineProps<{
  message: string;
  msgtype: string;
}>();
</script>

<template>
  <!-- Conditional rendering for different message types -->
  <div v-if="props.msgtype == 'success'" class="alert alert-success my-2">
    <div class="flex flex-row gap-2">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <div>{{ props.message }}</div> <!-- Corrected to double curly braces -->
    </div>
  </div>

  <!-- Similar structure for other message types -->
  <div v-else-if="props.msgtype == 'error'" class="alert alert-error my-2">
    <div class="flex flex-row gap-2">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </div>
      <div>{{ props.message }}</div> <!-- Corrected to double curly braces -->
    </div>
  </div>

  <div v-else-if="props.msgtype == 'info'" class="alert alert-info my-2">
    <div class="flex flex-row gap-2">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25 15 15m-7.5-15L1.5 9m7.5 4.125" />
        </svg>
      </div>
      <div>{{ props.message }}</div> <!-- Corrected to double curly braces -->
    </div>
  </div>

  <div v-else-if="props.msgtype == 'warning'" class="alert alert-warning my-2">
    <div class="flex flex-row gap-2">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </div>
      <div>{{ props.message }}</div> <!-- Corrected to double curly braces -->
    </div>
  </div>
</template>