<script setup>
import { Primitive } from "radix-vue";
import { cn } from "../../utils/tw-merge";

const props = defineProps({
  as: {
    type: String,
    default: "span",
  },
  asChild: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "primary",
  },
  dataLabel: {
    type: String,
    default: null,
  },
  class: {
    type: [String, Array, Object],
    default: "",
  },
});

const variants = {
  primary: "bg-background text-text-secondary",
  secondary: "bg-secondary text-text-invert shadow-secondary/30",
};
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    :aria-label="props.dataLabel || undefined"
    :class="
      cn(
        'inline-flex items-center border border-secondary/15 px-2 py-1 rounded-full text-xs font-medium shadow transition-colors',
        variants[props.variant],
        props.class
      )
    "
  >
    <slot />
  </Primitive>
</template>
