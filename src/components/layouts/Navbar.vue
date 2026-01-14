<script setup>
import { useScrollPosition } from "../../composables/useScrollPosition.js";

import Logo from "../../assets/logo.svg";
import MainButton from "../shared/MainButton.vue";
import NavLink from "../shared/NavLink.vue";

const { isScrolled } = useScrollPosition(20);

const navItems = [
  { name: "Home", to: "/" },
  { name: "Features", to: "/features", disabled: true },
  { name: "Blog", to: "/blog", disabled: true },
  { name: "Demo", to: "/demo", disabled: true },
];
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 py-2 mx-auto w-full transition-all duration-800 ease-in-out"
    :class="isScrolled ? 'max-w-3xl' : 'max-w-7xl'"
  >
    <nav
      aria-label="Main navigation"
      class="relative p-4 flex items-center justify-between rounded-2xl"
      :class="isScrolled && 'bg-white shadow-md'"
    >
      <router-link
        to="/"
        class="relative flex items-center gap-2 pr-5 text-xl font-semibold overflow-hidden duration-1000 ease-in-out"
        :class="isScrolled ? 'w-8' : 'w-auto'"
      >
        <img
          :src="Logo"
          alt="Nerd Feed logo"
          class="w-8 h-auto min-w-8"
          draggable="false"
        />
        <span class="whitespace-nowrap">Nerd Feed</span>
        <span
          class="absolute right-0 bottom-0 h-5 w-5 flex items-center justify-center bg-primary rounded text-xs text-text-invert"
          :class="isScrolled && 'hidden'"
          aria-hidden="true"
        >
          v.2
        </span>
      </router-link>

      <ul class="flex items-center gap-8 flex-1 justify-center">
        <li v-for="item in navItems" :key="item.name">
          <NavLink :to="item.to" :disabled="item.disabled">
            {{ item.name }}
          </NavLink>
        </li>

        <!-- <li v-if="user">
          <router-link to="/feed" class="text-accent font-medium">
            Feed
          </router-link>
        </li> -->
      </ul>

      <ul class="flex items-center gap-4">
        <li>
          <router-link to="/auth/signin" class="hover:underline">
            Sign In
          </router-link>
        </li>
        <li
          :class="
            isScrolled
              ? 'opacity-100 visibility-visible'
              : 'h-0 w-0 visibility-hidden opacity-0'
          "
        >
          <MainButton to="/auth/signup" variant="secondary">
            Sign Up
          </MainButton>
        </li>
      </ul>
    </nav>
  </header>
</template>
