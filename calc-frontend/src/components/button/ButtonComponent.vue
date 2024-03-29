<template>
  <button type="button" class="rounded-lg text-center font-medium focus:ring-1" :class="computedClass" @click="onClick">
    <div class="flex items-center justify-center">
      <span>{{ text }}</span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  text: string;
  color?: "numbers" | "operators";
  fullWidth?: boolean;
  size?: "xs" | "sm" | "base" | "lg" | "xl";
}>();

const emit = defineEmits(["click"]);

const computedClass = computed(() => {
  const classes = [];

  if (props.fullWidth) {
    classes.push("w-full");
  }

  switch (props.color) {
    case undefined:
    case null:
    case "numbers":
      classes.push("text-white", "bg-blue-500", "hover:bg-blue-800", "focus:ring-blue-300", "dark:bg-blue-600", "dark:hover:bg-blue-700", "dark:focus:ring-blue-800");
      break;
    case "operators":
      classes.push("text-white", "bg-gray-500", "hover:bg-gray-800", "focus:ring-gray-300", "dark:bg-gray-600", "dark:hover:bg-gray-700", "dark:focus:ring-gray-800");
      break;
  }

  switch (props.size) {
    case "xs":
      classes.push("px-3", "py-2", "text-xs");
      break;
    case "sm":
      classes.push("px-3", "py-2", "text-sm");
      break;
    case "lg":
      classes.push("px-5", "py-3", "text-lg");
      break;
    case "xl":
      classes.push("px-6", "py-3.5", "text-xl");
      break;
    case "base":
    default:
      classes.push("px-5", "py-2.5", "text-base");
      break;
  }

  return classes.join(" ").trim();
});

function onClick() {
  emit("click");
}
</script>
