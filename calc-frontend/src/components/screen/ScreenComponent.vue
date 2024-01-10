<template>
  <div class="flex h-64 flex-col overflow-auto rounded-lg border border-gray-200 bg-white p-6 text-xl font-normal text-gray-700 shadow dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
    <span v-for="(number, index) in numbers" :key="index" class="w-fit">
      <span v-if="typeof number !== 'string'">{{ number }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  numbers: Array<number | string>;
}>();
</script>
