<script setup>
defineProps({ topic: Object });
</script>

<template>
  <router-link
    :to="`/explore?tag=${topic.tag}`"
    class="flex items-center justify-between hover:opacity-70 transition-opacity cursor-pointer"
  >
    <div class="flex items-center gap-2">
      <span class="text-accent text-xl font-semibold">#</span>
      <span class="font-medium">{{ topic.tag }}</span>
    </div>
    <span class="text-sm"> {{ (topic.posts / 1000).toFixed(1) }}k posts </span>
  </router-link>
</template>
