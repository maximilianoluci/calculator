<template>
  <label :dataTestId="dataTestId" class="block text-sm font-medium text-gray-900 dark:text-white"
    >{{ labelValue }} {{ requiredLabel ? "*" : "" }}</label
  >
  <input
    :type="type"
    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
/*const props = */ defineProps<{
  dataTestId?: string;
  type: "text" | "password" | "email";
  labelValue?: string;
  placeholder?: string;
  requiredLabel?: boolean;
}>();
</script>
