<script setup></script>

<template>
  <svg
    class="auth-graphic"
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="60" y="90" width="80" height="60" rx="8" class="lock-body" />

    <path
      d="M75 90 L75 70 Q75 50 100 50 Q125 50 125 70 L125 90"
      class="lock-shackle"
    />

    <circle cx="100" cy="115" r="8" class="keyhole" />
    <rect x="97" y="115" width="6" height="15" rx="2" class="keyhole" />

    <g class="key">
      <circle cx="100" cy="115" r="4" class="key-fill" />
      <rect x="100" y="112" width="35" height="6" rx="2" class="key-fill k1" />
      <rect x="125" y="118" width="8" height="4" class="key-fill k2" />
      <rect x="130" y="118" width="4" height="6" class="key-fill k2" />
    </g>

    <circle cx="140" cy="70" r="15" class="check-bg" />
    <path d="M133 70 L138 75 L148 65" class="check-mark" />

    <circle cx="40" cy="100" r="3" class="dot d1" />
    <circle cx="160" cy="140" r="3" class="dot d1" />
    <circle cx="50" cy="160" r="2" class="dot d2" />
  </svg>
</template>

<style scoped>
.auth-graphic * {
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

.lock-body {
  stroke-width: 2;
}

.lock-shackle {
  transform-origin: 100px 90px;
  animation: lock-unlock 4s ease-in-out infinite;
}

.keyhole {
  fill: currentColor;
  opacity: 0.6;
  stroke: none;
}

.key {
  transform-origin: 100px 115px;
  animation: key-rotate 4s ease-in-out infinite;
}

.key-fill {
  fill: currentColor;
  stroke: none;
}

.k1,
.k2 {
  opacity: 0.8;
}

.check-bg {
  fill: currentColor;
  opacity: 0.2;
  stroke: none;
  animation: check-appear 4s ease-in-out infinite;
}

.check-mark {
  animation: check-appear 4s ease-in-out infinite;
}

.dot {
  fill: currentColor;
  stroke: none;
}

.d1 {
  opacity: 0.3;
}
.d2 {
  opacity: 0.2;
}

@keyframes key-rotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-15deg);
  }
  75% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes lock-unlock {
  0%,
  40% {
    transform: translateY(0);
  }
  50%,
  90% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes check-appear {
  0%,
  50% {
    opacity: 0;
    transform: scale(0);
  }
  60%,
  90% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
</style>
