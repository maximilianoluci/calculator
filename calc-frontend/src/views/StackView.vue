<template>
  <button-component text="Toggle Dark/Light Mode" color="operators" :full-width="true" @click="toggleUiMode" />
  <hr class="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
  hello
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/button/ButtonComponent.vue";

let isDarkMode: boolean = false;

function toggleUiMode(): void {
  const htmlElement = document.querySelector("html");
  if (htmlElement) {
    isDarkMode = !isDarkMode;
    htmlElement.classList.toggle("dark", isDarkMode);
  }
}
</script>
