<script setup>
import { TrendingUp } from "lucide-vue-next";
import TopicCard from "./TopicCard.vue";
import SugestedCard from "./SugestedCard.vue";

const trendingTopics = [
  { tag: "typescript", posts: 12400 },
  { tag: "react", posts: 9800 },
  { tag: "nextjs", posts: 7600 },
  { tag: "tailwindcss", posts: 5400 },
  { tag: "rust", posts: 4200 },
];

const suggestedUsers = [
  { name: "Emma Wilson", handle: "@emmawilson", avatar: "EW" },
  { name: "James Lee", handle: "@jameslee", avatar: "JL" },
  { name: "Maria Garcia", handle: "@mariagarcia", avatar: "MG" },
];
</script>

<template>
  <aside class="w-80 h-screen sticky top-0 p-4 hidden xl:block">
    <div class="rounded-xl p-3 mb-6 bg-background-bis border border-border/10">
      <input
        type="text"
        placeholder="Search Nerd Feed..."
        class="w-full bg-transparent focus:outline-none text-text-heading placeholder:text-text"
      />
    </div>

    <div class="rounded-xl p-4 mb-6 bg-background-bis shadow">
      <h3 class="font-bold mb-4 flex items-center gap-2">
        <TrendingUp class="w-5 h-5" />
        Trending Topics
      </h3>
      <ul class="space-y-3">
        <li v-for="topic in trendingTopics" :key="topic.tag">
          <TopicCard :topic="topic" />
        </li>
      </ul>
    </div>

    <div class="rounded-xl p-4 bg-background-bis shadow">
      <h3 class="font-bold mb-4 text-text-heading">Who to follow</h3>
      <ul class="space-y-4">
        <li
          v-for="user in suggestedUsers"
          :key="user.name"
          class="flex items-center justify-between"
        >
          <SugestedCard :user="user" />
        </li>
      </ul>
    </div>
  </aside>
</template>
