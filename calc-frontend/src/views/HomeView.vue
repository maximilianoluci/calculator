<template>
  <div class="h-auto p-3">
    <button-component
      text="Toggle Dark/Light Mode"
      color="dark"
      :full-width="true"
      @click="toggleUiMode"
    />
    <hr class="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
    <textarea-component class="mb-3"></textarea-component>
    <div class="mb-3 grid grid-cols-5 gap-3">
      <div class="col-span-4">
        <div class="grid grid-flow-col">
          <div class="grid grid-cols-3 gap-3">
            <button-component text="9" color="primary" />
            <button-component text="8" color="primary" />
            <button-component text="7" color="primary" />
            <button-component text="6" color="primary" />
            <button-component text="5" color="primary" />
            <button-component text="4" color="primary" />
            <button-component text="3" color="primary" />
            <button-component text="2" color="primary" />
            <button-component text="1" color="primary" />
            <div class="col-start-1 col-end-4">
              <button-component text="0" color="primary" :full-width="true" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-1 gap-3">
          <button-component text="/" color="secondary" />
          <button-component text="*" color="secondary" />
          <button-component text="-" color="secondary" />
          <button-component text="+" color="secondary" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-3">
      <button-component text="SELECT A" color="secondary" :full-width="true" />
      <button-component text="SELECT B" color="secondary" :full-width="true" />
      <button-component text="ENTER" color="secondary" :full-width="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import TextareaComponent from "@/components/textarea/TextareaComponent.vue";

let isDarkMode: boolean = false;

function toggleUiMode(): void {
  const htmlElement = document.querySelector("html");
  if (htmlElement) {
    isDarkMode = !isDarkMode;
    htmlElement.classList.toggle("dark", isDarkMode);
  }
}
</script>
