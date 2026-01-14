<script setup>
import Navbar from "./components/layouts/Navbar.vue";
</script>

<template>
  <div class="min-h-screen">
    <Navbar />

    <main>
      <router-view />
    </main>
  </div>
</template>
