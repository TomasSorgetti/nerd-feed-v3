<script setup></script>

<template>
  <svg
    class="edge-graphic"
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="30" y="40" width="140" height="120" rx="8" class="terminal" />

    <circle cx="48" cy="55" r="4" class="dot" />
    <circle cx="62" cy="55" r="4" class="dot" />
    <circle cx="76" cy="55" r="4" class="dot" />

    <g class="code-scroll">
      <rect x="45" y="75" width="60" height="4" rx="2" class="code l1" />
      <rect x="45" y="85" width="80" height="4" rx="2" class="code l2" />
      <rect x="55" y="95" width="50" height="4" rx="2" class="code l3" />
      <rect x="55" y="105" width="70" height="4" rx="2" class="code l4" />
      <rect x="45" y="115" width="40" height="4" rx="2" class="code l1" />
      <rect x="45" y="125" width="60" height="4" rx="2" class="code l2" />
      <rect x="55" y="135" width="50" height="4" rx="2" class="code l3" />
    </g>

    <g class="lightning">
      <path d="M155 60 L145 90 L155 90 L140 120" stroke-linecap="round" />
    </g>

    <text x="20" y="110" class="bracket left">{</text>
    <text x="170" y="110" class="bracket right">}</text>
  </svg>
</template>

<style scoped>
.edge-graphic * {
  stroke: currentColor;
  stroke-width: 1.5;
  fill: none;
}

.terminal {
  stroke-width: 1.5;
}

.dot {
  fill: currentColor;
  stroke: none;
  opacity: 0.4;
}

.code-scroll {
  animation: code-scroll 3s linear infinite;
}

.code {
  fill: currentColor;
  stroke: none;
}

.l1 {
  opacity: 0.6;
}
.l2 {
  opacity: 0.4;
}
.l3 {
  opacity: 0.5;
}
.l4 {
  opacity: 0.3;
}

.lightning {
  animation: lightning 2s ease-in-out infinite;
}

.lightning path {
  stroke-width: 2;
}

.bracket {
  fill: currentColor;
  stroke: none;
  font-size: 40px;
  font-family: monospace;
  animation: bracket-pulse 2s ease-in-out infinite;
}

.bracket.right {
  animation-delay: 0.5s;
}

@keyframes code-scroll {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}

@keyframes bracket-pulse {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

@keyframes lightning {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}
</style>
