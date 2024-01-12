<template>
  <div class="p-3">
    <button-component text="Toggle Dark/Light Mode" color="operators" :full-width="true" @click="toggleUiMode" />
    <hr class="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />

    <div class="mb-3 grid grid-cols-6 gap-3">
      <div class="col-span-4">
        <div class="grid grid-flow-col">
          <div class="">placeholder</div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="grid grid-cols-1 gap-y-3">
          <div class="flex flex-1 content-evenly gap-3">
            <input-component type="text" />
            <button-component class="w-1/6" text="PUSH" />
          </div>
          <div class="flex gap-3">
            <input-component type="text" />
            <button-component class="w-1/6" text="POP" />
          </div>
          <div class="flex gap-3">
            <input-component type="text" />
            <button-component class="w-1/6" text="PEEK" />
          </div>
          <div class="flex gap-3">
            <input-component type="text" />
            <button-component class="w-1/6" text="SIZE" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import InputComponent from "@/components/input/InputComponent.vue";

let isDarkMode: boolean = false;

function toggleUiMode(): void {
  const htmlElement = document.querySelector("html");
  if (htmlElement) {
    isDarkMode = !isDarkMode;
    htmlElement.classList.toggle("dark", isDarkMode);
  }
}
</script>
