<template>
  <div
    class="relative block w-full rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
  >
    <p
      v-for="number in numbers"
      :key="number"
      class="mb-1 text-xl font-normal text-gray-700 dark:text-gray-400"
    >
      {{ number }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  numbers: number[];
}>();
</script>
