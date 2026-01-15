<script setup>
defineProps({ user: Object });
</script>

<template>
  <router-link
    :to="`/profile/${user.handle.slice(1)}`"
    class="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
  >
    <div
      class="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold bg-accent text-text-invert"
    >
      {{ user.avatar }}
    </div>
    <div>
      <p class="font-semibold text-sm text-text-heading">{{ user.name }}</p>
      <p class="text-xs text-text">{{ user.handle }}</p>
    </div>
  </router-link>
  <button
    class="px-3 py-1 rounded-full text-sm font-semibold transition-all cursor-pointer hover:opacity-80 bg-primary text-text-invert"
  >
    Follow
  </button>
</template>
