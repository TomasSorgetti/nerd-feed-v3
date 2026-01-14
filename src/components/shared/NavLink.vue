<script setup>
import { RouterLink } from "vue-router";
import { cn } from "../../utils/tw-merge";

const props = defineProps({
  to: { type: [String, Object], required: true },
  disabled: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const BASE_STYLES =
  "relative px-1 py-2 text-base font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md";
const ACTIVE_STATE = "font-semibold text-text-heading";
const INACTIVE_STATE = "text-text hover:text-text-heading";
const DISABLED_STATE = "opacity-50 cursor-not-allowed";
</script>

<template>
  <span
    v-if="disabled"
    :class="cn(BASE_STYLES, DISABLED_STATE, props.class)"
    aria-disabled="true"
  >
    <slot />
  </span>

  <RouterLink
    v-else
    :to="to"
    custom
    v-slot="{ href, navigate, isActive, isExactActive }"
  >
    <a
      :href="href"
      @click="navigate"
      :class="
        cn(BASE_STYLES, isActive ? ACTIVE_STATE : INACTIVE_STATE, props.class)
      "
      :aria-current="isExactActive ? 'page' : undefined"
    >
      <slot :is-active="isActive" :is-exact-active="isExactActive" />
    </a>
  </RouterLink>
</template>
