<template>
  <div class="flex gap-3 p-3">
    <router-link to="/">Calculator</router-link>
    <router-link to="/stack">Stack</router-link>
  </div>
  <router-view />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
