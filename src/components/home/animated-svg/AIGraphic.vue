<script setup></script>

<template>
  <svg
    class="ai-graphic"
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="60" class="neuron n1" />
    <circle cx="40" cy="100" class="neuron n2" />
    <circle cx="40" cy="140" class="neuron n3" />

    <circle cx="100" cy="50" class="neuron n4" />
    <circle cx="100" cy="100" class="neuron n5 large" />
    <circle cx="100" cy="150" class="neuron n6" />

    <circle cx="160" cy="80" class="neuron n7" />
    <circle cx="160" cy="120" class="neuron n8" />

    <g class="synapses">
      <line x1="46" y1="60" x2="94" y2="50" class="s o4" />
      <line x1="46" y1="60" x2="92" y2="100" class="s o4" />
      <line x1="46" y1="100" x2="94" y2="50" class="s o3" />
      <line x1="46" y1="100" x2="92" y2="100" class="s o5" />
      <line x1="46" y1="100" x2="94" y2="150" class="s o3" />
      <line x1="46" y1="140" x2="92" y2="100" class="s o4" />
      <line x1="46" y1="140" x2="94" y2="150" class="s o4" />

      <line x1="106" y1="50" x2="154" y2="80" class="s o4" />
      <line x1="108" y1="100" x2="154" y2="80" class="s o5" />
      <line x1="108" y1="100" x2="154" y2="120" class="s o5" />
      <line x1="106" y1="150" x2="154" y2="120" class="s o4" />
    </g>

    <g class="brain">
      <circle cx="100" cy="100" r="20" />
    </g>
  </svg>
</template>

<style scoped>
.ai-graphic * {
  stroke: currentColor;
  stroke-width: 1;
  fill: none;
}

.neuron {
  fill: currentColor;
  stroke: none;
  r: 6;
  opacity: 0.3;
  animation: neuron-pulse 2s ease-in-out infinite;
}

.large {
  r: 8;
}

.n2 {
  animation-delay: 0.3s;
}
.n3 {
  animation-delay: 0.6s;
}
.n4 {
  animation-delay: 0.2s;
}
.n5 {
  animation-delay: 0.5s;
}
.n6 {
  animation-delay: 0.8s;
}
.n7 {
  animation-delay: 0.4s;
}
.n8 {
  animation-delay: 0.7s;
}

.synapses {
  stroke-dasharray: 4 2;
  animation: synapse-flow 1.5s linear infinite;
}

.s {
  stroke-width: 1;
}

.o3 {
  opacity: 0.3;
}
.o4 {
  opacity: 0.4;
}
.o5 {
  opacity: 0.5;
}

.brain {
  animation: brain-glow 3s ease-in-out infinite;
}

.brain circle {
  stroke-width: 1.5;
  opacity: 0.3;
}

@keyframes neuron-pulse {
  0%,
  100% {
    opacity: 0.3;
    r: 6;
  }
  50% {
    opacity: 1;
    r: 8;
  }
}

@keyframes synapse-flow {
  from {
    stroke-dashoffset: 20;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes brain-glow {
  0%,
  100% {
    filter: drop-shadow(0 0 2px currentColor);
  }
  50% {
    filter: drop-shadow(0 0 8px currentColor);
  }
}
</style>
