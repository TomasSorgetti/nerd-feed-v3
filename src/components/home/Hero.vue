<script setup>
import Badge from "../shared/Badge.vue";
import MainButton from "../shared/MainButton.vue";
import HeroBackground from "./HeroBackground.vue";
import HeroPreviewImage from "../../assets/video.webp";
</script>

<template>
  <section
    id="hero"
    aria-labelledby="hero-title"
    class="relative overflow-hidden w-full max-w-7xl container mx-auto rounded-5xl mt-32 bg-background-bis shadow-2xl p-4"
  >
    <div class="absolute top-0 w-full overflow-hidden">
      <HeroBackground />
    </div>

    <div class="relative z-20 text-center pt-10 flex flex-col items-center">
      <Badge> Nerd Feed - For Developers, By Developers </Badge>

      <h1
        id="hero-title"
        class="relative text-8xl font-semibold max-w-2xl mt-2"
      >
        Share your bugs,
        <span class="text-accent animate-pulse">memes</span>, and the code tips
        that save lives.
      </h1>

      <p class="mt-10 max-w-md">
        Nerd Feed is the social network for programmers: a space to share ideas,
        epic bugs, and quick tips.
      </p>

      <MainButton as-child variant="primary" class="mt-6">
        <router-link to="/auth/register">Sign Up</router-link>
      </MainButton>
    </div>

    <figure
      class="relative z-10 w-full min-h-150 mt-20 rounded-2xl overflow-hidden shadow-xl border border-secondary/20"
    >
      <img
        :src="HeroPreviewImage"
        alt="Preview of the Nerd Feed application interface showing developer posts"
        draggable="false"
        loading="eager"
        class="w-full h-full object-cover"
      />

      <figcaption class="sr-only">
        Visual example of the Nerd Feed interface used to share developer
        content.
      </figcaption>
    </figure>
  </section>
</template>
