<template>
  <div class="rounded-lg border border-gray-200 bg-white p-6 text-xl font-normal text-gray-700 shadow dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
    <span v-for="(number, index) in numbers" :key="index" class="w-fit">
      <span v-if="number !== '$'">{{ number }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
// import Stack from "@/classes/stack";

defineProps<{
  numbers: Array<string>;
}>();
</script>
