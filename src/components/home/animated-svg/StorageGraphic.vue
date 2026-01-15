<script setup></script>

<template>
  <svg
    class="storage-graphic"
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g class="folder">
      <path
        d="M30 70 L30 150 Q30 160 40 160 L160 160 Q170 160 170 150 L170 70 Z"
      />
      <path
        d="M30 70 L30 60 Q30 50 40 50 L80 50 L90 60 L160 60 Q170 60 170 70"
      />
    </g>

    <g class="file f1">
      <rect x="50" y="85" width="35" height="45" rx="4" class="file-outline" />
      <rect x="55" y="95" width="25" height="3" rx="1" class="file-line l1" />
      <rect x="55" y="102" width="20" height="3" rx="1" class="file-line l2" />
      <rect x="55" y="109" width="22" height="3" rx="1" class="file-line l1" />
    </g>

    <g class="file f2">
      <rect x="95" y="80" width="35" height="45" rx="4" class="file-outline" />
      <rect x="100" y="90" width="25" height="3" rx="1" class="file-line l1" />
      <rect x="100" y="97" width="20" height="3" rx="1" class="file-line l2" />
      <rect x="100" y="104" width="22" height="3" rx="1" class="file-line l1" />
    </g>

    <g class="file f3">
      <rect
        x="140"
        y="90"
        width="20"
        height="28"
        rx="4"
        class="file-outline small"
      />
      <circle cx="150" cy="100" r="5" class="file-dot" />
      <rect x="143" y="108" width="14" height="6" rx="2" class="file-dot" />
    </g>

    <g class="upload">
      <path d="M100 35 L100 15" />
      <path d="M93 22 L100 15 L107 22" fill="none" />
    </g>
  </svg>
</template>

<style scoped>
.storage-graphic * {
  stroke: currentColor;
  stroke-width: 1.5;
  fill: none;
}

.folder {
  animation: folder-pulse 3s ease-in-out infinite;
}

.file {
  animation: file-float 4s ease-in-out infinite;
}

.f2 {
  animation-delay: 0.5s;
}
.f3 {
  animation-delay: 1s;
}

.file-outline {
  opacity: 0.6;
  stroke-width: 1;
}

.file-outline.small {
  opacity: 0.5;
}

.file-line {
  fill: currentColor;
  stroke: none;
}

.l1 {
  opacity: 0.4;
}
.l2 {
  opacity: 0.3;
}

.file-dot {
  fill: currentColor;
  stroke: none;
  opacity: 0.3;
}

.upload {
  animation: upload-arrow 2s ease-in-out infinite;
}

.upload path {
  stroke-width: 2;
  stroke-linecap: round;
}

@keyframes file-float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(2deg);
  }
}

@keyframes upload-arrow {
  0%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-10px);
    opacity: 0.5;
  }
}

@keyframes folder-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}
</style>
