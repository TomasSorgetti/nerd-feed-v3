<script setup>
import { Primitive } from "radix-vue";
import { cn } from "../../utils/tw-merge";

defineOptions({ inheritAttrs: false });

const props = defineProps({
  as: { type: String, default: "button" },
  asChild: { type: Boolean, default: false },
  variant: { type: String, default: "primary" },
  size: { type: String, default: "sm" },
  disabled: { type: Boolean, default: false },
  dataLabel: { type: String, default: "" },
});

const variants = {
  primary:
    "bg-primary text-text-invert hover:bg-secondary active:bg-secondary/70",
  secondary:
    "bg-background text-text hover:bg-background-bis active:bg-background",
  tertiary:
    "bg-secondary text-white hover:bg-secondary/60 active:bg-secondary/40",
};

const sizes = {
  sm: "px-6 py-2 text-sm",
  lg: "px-16 py-2 text-base",
};
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :disabled="disabled"
    :aria-label="dataLabel"
    :aria-disabled="disabled"
    v-bind="$attrs"
    :class="
      cn(
        'relative z-10 text-center font-medium rounded-lg shadow inline-flex items-center justify-center transition',
        variants[variant],
        sizes[size],
        disabled
          ? 'opacity-60 cursor-not-allowed pointer-events-none'
          : 'cursor-pointer',
        $attrs.class
      )
    "
  >
    <slot />
  </Primitive>
</template>
