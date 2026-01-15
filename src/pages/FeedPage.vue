<script setup>
import SideBar from "../components/feed/SideBar.vue";
import UtilityBar from "../components/feed/UtilityBar.vue";
</script>

<template>
  <div class="min-h-screen">
    <div class="max-w-7xl mx-auto flex">
      <SideBar />

      <main class="flex-1 min-h-screen border-r">
        <header class="sticky top-0 z-10 p-4 border-b backdrop-blur">
          <h1 class="text-xl font-bold">Home</h1>
        </header>
      </main>

      <UtilityBar />
    </div>
  </div>
</template>
