<script setup>
import AuthGraphic from "./animated-svg/AuthGraphic.vue";
import DatabaseSyncGraphic from "./animated-svg/DatabaseSyncGraphic.vue";
import RealtimeGraphic from "./animated-svg/RealtimeGraphic.vue";
import EdgeFunctionsGraphic from "./animated-svg/EdgeFunctionsGraphic.vue";
import StorageGraphic from "./animated-svg/StorageGraphic.vue";
import AIGraphic from "./animated-svg/AIGraphic.vue";
</script>

<template>
  <section class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 bg-accent/10 text-accent"
        >
          Platform Features
        </span>
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-text-heading">
          Everything you need to <span class="text-accent">ship faster</span>
        </h2>
        <p class="text-lg max-w-2xl mx-auto text-text">
          Built with modern infrastructure to help developers collaborate,
          share, and grow together.
        </p>
      </div>

      <div class="grid grid-cols-12 gap-6">
        <div
          class="col-span-12 lg:col-span-8 rounded-2xl relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] bg-tertiary min-h-80"
        >
          <div
            class="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 group-hover:opacity-50 transition-opacity text-accent"
          >
            <DatabaseSyncGraphic />
          </div>
          <div class="relative z-10 p-8 max-w-[55%]">
            <span
              class="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-accent/10 text-accent"
            >
              Sync & Collaboration
            </span>
            <h3 class="text-2xl font-bold mb-3 text-text-invert">
              Real-time Code Sync
            </h3>
            <p class="text-text">
              Share snippets instantly across your team. Changes propagate in
              milliseconds with zero configuration required.
            </p>
          </div>
        </div>

        <div
          class="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] bg-background-bis border border-border/20 min-h-80"
        >
          <div
            class="absolute bottom-0 right-0 left-0 h-[60%] opacity-30 group-hover:opacity-50 transition-opacity text-accent"
          >
            <AuthGraphic />
          </div>
          <div class="relative z-10 p-8">
            <span
              class="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 text-accent bg-accent/10"
            >
              Authentication
            </span>
            <h3 class="text-xl font-bold mb-3 text-text-heading">
              Secure by Default
            </h3>
            <p class="text-text">
              OAuth, magic links, and 2FA out of the box. Your code stays yours.
            </p>
          </div>
        </div>

        <div
          class="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] bg-background-bis border border-border/20 min-h-70"
        >
          <div
            class="absolute bottom-0 right-0 left-0 h-[55%] opacity-30 group-hover:opacity-50 transition-opacity text-accent"
          >
            <RealtimeGraphic />
          </div>
          <div class="relative z-10 p-8">
            <span
              class="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 text-accent bg-accent/10"
            >
              Live Updates
            </span>
            <h3 class="text-xl font-bold mb-3 text-text-heading">
              Realtime Subscriptions
            </h3>
            <p class="text-text">
              See comments, likes, and shares as they happen. No refresh needed.
            </p>
          </div>
        </div>

        <div
          class="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] bg-background-bis border border-border/20 min-h-70"
        >
          <div
            class="absolute bottom-0 right-0 left-0 h-[55%] opacity-30 group-hover:opacity-50 transition-opacity text-accent"
          >
            <EdgeFunctionsGraphic />
          </div>
          <div class="relative z-10 p-8">
            <span
              class="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 text-accent bg-accent/10"
            >
              Edge Runtime
            </span>
            <h3 class="text-xl font-bold mb-3 text-text-heading">
              Serverless Functions
            </h3>
            <p class="text-text">
              Run code at the edge. Deploy custom logic without managing
              servers.
            </p>
          </div>
        </div>

        <div
          class="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] bg-background-bis border border-border/20 min-h-70"
        >
          <div
            class="absolute bottom-0 right-0 left-0 h-[55%] opacity-30 group-hover:opacity-50 transition-opacity text-accent"
          >
            <StorageGraphic />
          </div>
          <div class="relative z-10 p-8">
            <span
              class="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 text-accent bg-accent/10"
            >
              File Storage
            </span>
            <h3 class="text-xl font-bold mb-3 text-text-heading">
              Snippet Library
            </h3>
            <p class="text-text">
              Store, organize, and share your code. Unlimited storage for all
              your snippets.
            </p>
          </div>
        </div>

        <div
          class="col-span-12 rounded-2xl relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] bg-tertiary min-h-70"
        >
          <div
            class="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 group-hover:opacity-50 transition-opacity text-accent"
          >
            <AIGraphic />
          </div>
          <div class="relative z-10 p-8 max-w-lg">
            <span
              class="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 text-accent bg-accent/10"
            >
              AI-Powered
            </span>
            <h3 class="text-2xl font-bold mb-3 text-text-invert">
              Smart Code Suggestions
            </h3>
            <p class="text-text">
              Get intelligent recommendations, auto-complete snippets, and bug
              detection powered by machine learning. Your coding assistant that
              actually understands context.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
