<script setup></script>

<template>
  <svg
    class="realtime-graphic"
    width="100%"
    height="100%"
    viewBox="0 0 300 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="150" cy="100" r="8" class="core" />

    <circle cx="150" cy="100" r="8" class="wave w1" />
    <circle cx="150" cy="100" r="8" class="wave w2" />
    <circle cx="150" cy="100" r="8" class="wave w3" />

    <g class="node n1">
      <circle cx="60" cy="50" r="20" />
      <rect x="48" y="45" width="24" height="3" rx="1" class="line l1" />
      <rect x="48" y="52" width="18" height="3" rx="1" class="line l2" />
      <line x1="80" y1="60" x2="120" y2="85" class="connector" />
    </g>

    <g class="node n2">
      <circle cx="240" cy="50" r="20" />
      <rect x="228" y="45" width="24" height="3" rx="1" class="line l1" />
      <rect x="228" y="52" width="18" height="3" rx="1" class="line l2" />
      <line x1="220" y1="60" x2="180" y2="85" class="connector" />
    </g>

    <g class="node n3">
      <circle cx="60" cy="150" r="20" />
      <rect x="48" y="145" width="24" height="3" rx="1" class="line l1" />
      <rect x="48" y="152" width="18" height="3" rx="1" class="line l2" />
      <line x1="80" y1="140" x2="120" y2="115" class="connector" />
    </g>

    <g class="node n4">
      <circle cx="240" cy="150" r="20" />
      <rect x="228" y="145" width="24" height="3" rx="1" class="line l1" />
      <rect x="228" y="152" width="18" height="3" rx="1" class="line l2" />
      <line x1="220" y1="140" x2="180" y2="115" class="connector" />
    </g>
  </svg>
</template>

<style scoped>
.realtime-graphic * {
  stroke: currentColor;
  stroke-width: 1.5;
  fill: none;
}

.core {
  fill: currentColor;
  opacity: 0.8;
}

.wave {
  stroke-width: 1;
  animation: wave-pulse 2s ease-out infinite;
}

.w2 {
  animation-delay: 0.5s;
}
.w3 {
  animation-delay: 1s;
}

.node {
  animation: signal-move 3s ease-in-out infinite;
}

.n2 {
  animation-delay: 0.5s;
}
.n3 {
  animation-delay: 1s;
}
.n4 {
  animation-delay: 1.5s;
}

.line {
  fill: currentColor;
}

.l1 {
  opacity: 0.6;
}
.l2 {
  opacity: 0.4;
}

.connector {
  stroke-width: 1;
  stroke-dasharray: 3 3;
  opacity: 0.5;
}

@keyframes wave-pulse {
  0% {
    r: 8;
    opacity: 1;
  }
  100% {
    r: 40;
    opacity: 0;
  }
}

@keyframes signal-move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
