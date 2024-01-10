<template>
  <div class="h-auto p-3">
    <button-component
      text="Toggle Dark/Light Mode"
      color="dark"
      :full-width="true"
      @click="toggleUiMode"
    />
    <hr class="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
    <textarea-component class="mb-3" :numbers="numbers" />

    <button-component class="mb-3" text="CLEAR" color="secondary" :full-width="true" />

    <div class="mb-3 grid grid-cols-5 gap-3">
      <div class="col-span-4">
        <div class="grid grid-flow-col">
          <div class="grid grid-cols-3 gap-3">
            <button-component text="9" />
            <button-component text="8" />
            <button-component text="7" />
            <button-component text="6" />
            <button-component text="5" />
            <button-component text="4" />
            <button-component text="3" />
            <button-component text="2" />
            <button-component text="1" />
            <div class="col-start-1 col-end-4">
              <button-component text="0" :full-width="true" />
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
    <div class="grid grid-cols-1 gap-y-3">
      <button-component text="ENTER" color="secondary" :full-width="true" />
      <button-component
        text="CALCULATE"
        color="secondary"
        :full-width="true"
        @click="calculate(numbers)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import TextareaComponent from "@/components/textarea/TextareaComponent.vue";
import axios from "axios";

let isDarkMode: boolean = false;

function toggleUiMode(): void {
  const htmlElement = document.querySelector("html");
  if (htmlElement) {
    isDarkMode = !isDarkMode;
    htmlElement.classList.toggle("dark", isDarkMode);
  }
}

const numbers = [0, 0];
const type = "add";
const url = `http://localhost:3000/calculator/${type}?a=${numbers[0]}&b=${numbers[1]}`;

async function calculate(arr: number[]) {
  axios
    .get(url, {
      params: {
        a: arr[0],
        b: arr[1],
      },
    })
    .then((response) => console.log(response.data));
}
</script>
