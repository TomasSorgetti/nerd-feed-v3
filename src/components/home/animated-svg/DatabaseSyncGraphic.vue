<template>
  <svg
    class="db-sync-graphic"
    width="100%"
    height="100%"
    viewBox="0 0 300 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.8">
      <ellipse cx="60" cy="60" rx="35" ry="12" />
      <path d="M25 60 L25 120 Q25 132 60 132 Q95 132 95 120 L95 60" />
      <ellipse cx="60" cy="120" rx="35" ry="12" opacity="0.5" />

      <rect x="35" y="75" width="50" height="4" rx="2" class="row r1" />
      <rect x="35" y="85" width="40" height="4" rx="2" class="row r2" />
      <rect x="35" y="95" width="45" height="4" rx="2" class="row r3" />

      <ellipse cx="240" cy="60" rx="35" ry="12" />
      <path d="M205 60 L205 120 Q205 132 240 132 Q275 132 275 120 L275 60" />
      <ellipse cx="240" cy="120" rx="35" ry="12" opacity="0.5" />

      <rect x="215" y="75" width="50" height="4" rx="2" class="row r4" />
      <rect x="215" y="85" width="40" height="4" rx="2" class="row r5" />
      <rect x="215" y="95" width="45" height="4" rx="2" class="row r6" />
    </g>

    <path d="M100 75 L200 75" class="arrow forward" />
    <path d="M200 105 L100 105" class="arrow reverse" />

    <circle cx="150" cy="75" r="4" class="pulse p1" />
    <circle cx="150" cy="105" r="4" class="pulse p2" />

    <circle cx="150" cy="90" r="15" opacity="0.5" />
    <path d="M143 90 L150 83 L157 90 M150 83 L150 97" class="center-icon" />
  </svg>
</template>

<script setup lang="ts"></script>

<style scoped>
.db-sync-graphic * {
  stroke: currentColor;
  fill: none;
  stroke-width: 1.5;
}

.row {
  fill: currentColor;
  opacity: 0.4;
  animation: float-row 2s ease-in-out infinite;
}

.r2 {
  opacity: 0.3;
  animation-delay: 0.2s;
}
.r3 {
  animation-delay: 0.4s;
}
.r4 {
  animation-delay: 0.1s;
}
.r5 {
  opacity: 0.3;
  animation-delay: 0.3s;
}
.r6 {
  animation-delay: 0.5s;
}

.arrow {
  stroke-dasharray: 4 4;
  animation: data-flow 1s linear infinite;
}

.arrow.reverse {
  animation-direction: reverse;
}

.pulse {
  fill: currentColor;
  animation: pulse-db 1.5s ease-in-out infinite;
}

.p2 {
  animation-delay: 0.5s;
}

.center-icon {
  transform-origin: 150px 90px;
  animation: pulse-db 2s ease-in-out infinite;
}

@keyframes pulse-db {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

@keyframes data-flow {
  from {
    stroke-dashoffset: 20;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes float-row {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
}
</style>
