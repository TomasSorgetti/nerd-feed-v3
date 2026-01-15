<script setup>
import {
  Home,
  Compass,
  Bell,
  Bookmark,
  Settings,
  Users,
  Mail,
} from "lucide-vue-next";

const navItems = [
  { icon: Home, label: "Home", href: "/feed", active: true },
  { icon: Compass, label: "Explore", href: "/feed" },
  { icon: Bell, label: "Notifications", href: "/feed" },
  { icon: Mail, label: "Messages", href: "/feed" },
  { icon: Bookmark, label: "Bookmarks", href: "/feed" },
  { icon: Users, label: "Community", href: "/feed" },
  { icon: Settings, label: "Settings", href: "/feed" },
];
</script>

<template>
  <aside
    class="w-64 h-screen sticky top-0 p-4 hidden lg:flex flex-col border-r border-border"
  >
    <router-link to="/" class="flex items-center gap-2 mb-8 cursor-pointer">
      <div
        class="w-8 h-8 rounded-lg flex items-center justify-center bg-primary"
      >
        <Code2 class="w-5 h-5 text-text-invert" />
      </div>
      <span class="font-bold text-lg text-text-heading"> Nerd Feed </span>
    </router-link>

    <nav class="flex-1 space-y-1">
      <router-link
        v-for="item in navItems"
        :key="item.label"
        :to="item.href"
        :class="[
          'flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer hover:opacity-80 hover:shadow-sm',
          item.active
            ? 'bg-background-bis text-text-heading shadow-sm'
            : 'bg-transparent text-text',
        ]"
      >
        <component :is="item.icon" class="w-5 h-5" />
        <span :class="item.active && 'font-semibold'">{{ item.label }}</span>
      </router-link>
    </nav>

    <router-link
      to="/"
      class="flex items-center gap-3 p-3 rounded-xl mt-auto cursor-pointer hover:opacity-80 transition-all bg-background-bis shadow"
    >
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-accent text-text-invert"
      >
        YO
      </div>
      <div>
        <p class="font-semibold text-sm text-text-heading">You</p>
        <p class="text-xs text-text">@you</p>
      </div>
    </router-link>
  </aside>
</template>
