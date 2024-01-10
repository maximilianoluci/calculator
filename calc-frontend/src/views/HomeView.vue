<template>
  <div class="flex h-screen p-3">
    <div class="m-auto">
      <button-component text="Toggle Dark/Light Mode" color="dark" :full-width="true" @click="toggleUiMode" />
      <hr class="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
      <screen-component class="mb-3" :numbers="numbers" />

      <div class="mb-3 grid grid-cols-6 gap-3">
        <div class="col-span-4">
          <div class="grid grid-flow-col">
            <div class="grid grid-cols-3 gap-3">
              <button-component text="9" @click="() => buttonClicked('9')" />
              <button-component text="8" @click="() => buttonClicked('8')" />
              <button-component text="7" @click="() => buttonClicked('7')" />
              <button-component text="6" @click="() => buttonClicked('6')" />
              <button-component text="5" @click="() => buttonClicked('5')" />
              <button-component text="4" @click="() => buttonClicked('4')" />
              <button-component text="3" @click="() => buttonClicked('3')" />
              <button-component text="2" @click="() => buttonClicked('2')" />
              <button-component text="1" @click="() => buttonClicked('1')" />
              <div class="col-start-1 col-end-3">
                <button-component text="0" :full-width="true" @click="() => buttonClicked('0')" />
              </div>
              <button-component text="." @click="() => buttonClicked('.')" />
            </div>
          </div>
        </div>
        <div>
          <div class="grid grid-cols-1 gap-3">
            <button-component text="/" color="operators" @click="() => performOperation('divide')" />
            <button-component text="*" color="operators" @click="() => performOperation('multiply')" />
            <button-component text="-" color="operators" @click="() => performOperation('subtract')" />
            <button-component text="+" color="operators" @click="() => performOperation('add')" />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-y-3">
          <button-component text="AC" color="operators" :full-width="true" @click="emptyArray" />
          <button-component text="CE" color="operators" :full-width="true" @click="emptyLast" />
          <button-component text="&#9166;" color="operators" :full-width="true" @click="enterClicked" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import ScreenComponent from "@/components/screen/ScreenComponent.vue";
import axios from "axios";

let isDarkMode: boolean = false;

function toggleUiMode(): void {
  const htmlElement = document.querySelector("html");
  if (htmlElement) {
    isDarkMode = !isDarkMode;
    htmlElement.classList.toggle("dark", isDarkMode);
  }
}

const numbers = ref<Array<string>>([]);

function emptyArray() {
  numbers.value = [];
}

function emptyLast() {
  numbers.value.splice(numbers.value.length - 1, 1);
}

function buttonClicked(number: string) {
  if (numbers.value.length === 0) {
    numbers.value.push(number);
    return;
  }
  const lastNumber: string = numbers.value[numbers.value.length - 1];

  if (lastNumber === "$") {
    numbers.value[numbers.value.length - 1] = number;
  } else {
    numbers.value[numbers.value.length - 1] = lastNumber + number;
  }
}

function enterClicked() {
  numbers.value.push("$");
}

async function performOperation(type: "add" | "subtract" | "multiply" | "divide") {
  const url = `http://localhost:3000/calculator/${type}`;
  let result: string | undefined;

  const body = {
    a: numbers.value[numbers.value.length - 2],
    b: numbers.value[numbers.value.length - 1],
  };

  if (body.a === undefined || body.b === undefined || Number.isNaN(body.a) || Number.isNaN(body.b)) {
    return;
  }

  numbers.value.splice(numbers.value.length - 2, 2);

  result = await calculate(url, body);

  result && numbers.value.push(result);

  numbers.value.push("$");
}

async function calculate(url: string, body: any): Promise<string | undefined> {
  try {
    const response = await axios.post(url, body);
    return response.data ? response.data : undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
</script>
