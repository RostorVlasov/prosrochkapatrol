<template>
  <div class="development-page">
    <div class="content-card">
      <!-- Animated construction illustration -->
      <div class="illustration">
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="building-svg">
          <!-- Background circle -->
          <circle cx="100" cy="100" r="90" fill="#F3F4F6" stroke="#E5E7EB" stroke-width="2" class="svg-circle-bg" />

          <!-- Crane base -->
          <rect x="80" y="100" width="40" height="10" fill="#4B5563" rx="2" class="svg-crane-base" />
          <rect x="90" y="80" width="20" height="20" fill="#6B7280" rx="2" class="svg-crane-arm" />

          <!-- Crane arm -->
          <line x1="100" y1="80" x2="140" y2="40" stroke="#374151" stroke-width="6" stroke-linecap="round" class="svg-line" />
          <line x1="140" y1="40" x2="180" y2="40" stroke="#374151" stroke-width="4" stroke-linecap="round" class="svg-line" />

          <!-- Crane hook and line -->
          <line x1="160" y1="40" x2="160" y2="70" stroke="#6B7280" stroke-width="2" stroke-dasharray="4 2" class="svg-line-dash" />
          <path d="M150 70 L170 70 L160 85 Z" fill="#EF4444" class="svg-hook" />

          <!-- Building blocks -->
          <rect x="50" y="120" width="30" height="40" fill="#9CA3AF" rx="2" class="svg-block" />
          <rect x="55" y="110" width="20" height="15" fill="#D1D5DB" rx="2" class="svg-block-light" />

          <!-- Small bricks -->
          <rect x="35" y="140" width="15" height="10" fill="#E5E7EB" rx="1" class="svg-brick" />
          <rect x="55" y="140" width="15" height="10" fill="#E5E7EB" rx="1" class="svg-brick" />
          <rect x="75" y="140" width="15" height="10" fill="#E5E7EB" rx="1" class="svg-brick" />

          <!-- Hard hat -->
          <path d="M110 95 Q120 75 135 95" stroke="#F59E0B" stroke-width="4" fill="none" stroke-linecap="round" class="svg-hat" />
          <rect x="112" y="94" width="21" height="5" fill="#F59E0B" rx="2" class="svg-hat-brim" />

          <!-- Wrench / tools -->
          <circle cx="130" cy="120" r="8" stroke="#3B82F6" stroke-width="3" fill="none" class="svg-wrench" />
          <rect x="126" y="120" width="8" height="15" fill="#3B82F6" rx="2" transform="rotate(20 130 120)" class="svg-wrench-handle" />

          <!-- Sparkles -->
          <circle cx="170" cy="25" r="2" fill="#FBBF24" class="svg-sparkle">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="185" cy="50" r="1.5" fill="#FBBF24" class="svg-sparkle">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="30" cy="100" r="1.5" fill="#FBBF24" class="svg-sparkle">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <!-- Main heading -->
      <h1 class="title">Страница в разработке</h1>

      <!-- Subtitle / decorative line -->
      <div class="divider">
        <span class="dot"></span>
        <span class="line"></span>
        <span class="dot"></span>
      </div>

      <!-- Descriptive text -->
      <p class="description">
        Мы усердно работаем, чтобы представить вам нечто потрясающее.<br />
        Эта страница находится в стадии разработки.
      </p>

      <!-- Status indicator -->
      <div class="status">
        <span class="pulse"></span>
        <span class="status-text">Страница в разработке</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevelopmentPage",
};
</script>

<style scoped>
/* ===== БАЗОВЫЕ СТИЛИ (СВЕТЛАЯ ТЕМА) ===== */
.development-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  padding: 1.5rem;
  margin: 0;
  transition: background 0.3s ease;
}

.content-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 2.5rem;
  padding: 3rem 2.5rem;
  text-align: center;
  box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5);
  max-width: 600px;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

.content-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 50px -15px rgba(0, 0, 0, 0.3);
}

/* Illustration styling */
.illustration {
  margin-bottom: 1.75rem;
  display: flex;
  justify-content: center;
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.1));
  transition: filter 0.3s ease;
}

.building-svg {
  transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

.content-card:hover .building-svg {
  transform: scale(1.02) rotate(1deg);
}

/* Title styling */
.title {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(120deg, #1f2937, #3b82f6, #1f2937);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.02em;
  margin: 0 0 0.75rem 0;
  animation: shimmer 4s linear infinite;
}

@keyframes shimmer {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* Divider with dots */
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0 1.5rem 0;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #3b82f6;
  border-radius: 50%;
  opacity: 0.7;
  transition: background 0.3s ease;
}

.line {
  width: 4rem;
  height: 0.125rem;
  background: linear-gradient(90deg, #9ca3af, #3b82f6, #9ca3af);
  border-radius: 1rem;
  transition: background 0.3s ease;
}

/* Description */
.description {
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
  margin: 1.5rem 0 2rem 0;
  font-weight: 400;
  transition: color 0.3s ease;
}

/* Status indicator */
.status {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  background: #eef2ff;
  padding: 0.5rem 1.25rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #2563eb;
  backdrop-filter: blur(4px);
  transition: background 0.3s ease, color 0.3s ease;
}

.pulse {
  width: 0.625rem;
  height: 0.625rem;
  background-color: #3b82f6;
  border-radius: 50%;
  display: inline-block;
  animation: pulse 1.2s ease-in-out infinite;
  transition: background-color 0.3s ease;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
    background-color: #2563eb;
  }
}

.status-text {
  letter-spacing: 0.01em;
}

/* SVG Colors - Light theme */
.svg-circle-bg {
  fill: #F3F4F6;
  stroke: #E5E7EB;
}

.svg-crane-base {
  fill: #4B5563;
}

.svg-crane-arm {
  fill: #6B7280;
}

.svg-line {
  stroke: #374151;
}

.svg-line-dash {
  stroke: #6B7280;
}

.svg-hook {
  fill: #EF4444;
}

.svg-block {
  fill: #9CA3AF;
}

.svg-block-light {
  fill: #D1D5DB;
}

.svg-brick {
  fill: #E5E7EB;
}

.svg-hat {
  stroke: #F59E0B;
}

.svg-hat-brim {
  fill: #F59E0B;
}

.svg-wrench {
  stroke: #3B82F6;
}

.svg-wrench-handle {
  fill: #3B82F6;
}

.svg-sparkle {
  fill: #FBBF24;
}

/* ===== ТЕМНАЯ ТЕМА ===== */

.dark .content-card {
  background: rgba(30, 30, 46, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.dark .content-card:hover {
  box-shadow: 0 30px 50px -15px rgba(0, 0, 0, 0.6);
}

.dark .illustration {
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.3));
}

/* Title in dark mode */
.dark .title {
  background: linear-gradient(120deg, #e2e8f0, #60a5fa, #e2e8f0);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
}

/* Divider in dark mode */
.dark .dot {
  background: #60a5fa;
}

.dark .line {
  background: linear-gradient(90deg, #4b5563, #60a5fa, #4b5563);
}

/* Description in dark mode */
.dark .description {
  color: #a1a1aa;
}

/* Status in dark mode */
.dark .status {
  background: #1e293b;
  color: #60a5fa;
}

.dark .pulse {
  background-color: #60a5fa;
}

@keyframes darkPulse {
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.6;
    background-color: #60a5fa;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
    background-color: #3b82f6;
  }
}

.dark .pulse {
  animation: darkPulse 1.2s ease-in-out infinite;
}

/* SVG Colors - Dark theme */
.dark .svg-circle-bg {
  fill: #1f2937;
  stroke: #374151;
}

.dark .svg-crane-base {
  fill: #6b7280;
}

.dark .svg-crane-arm {
  fill: #4b5563;
}

.dark .svg-line {
  stroke: #9ca3af;
}

.dark .svg-line-dash {
  stroke: #9ca3af;
}

.dark .svg-hook {
  fill: #f87171;
}

.dark .svg-block {
  fill: #6b7280;
}

.dark .svg-block-light {
  fill: #4b5563;
}

.dark .svg-brick {
  fill: #374151;
}

.dark .svg-hat {
  stroke: #fbbf24;
}

.dark .svg-hat-brim {
  fill: #fbbf24;
}

.dark .svg-wrench {
  stroke: #60a5fa;
}

.dark .svg-wrench-handle {
  fill: #60a5fa;
}

.dark .svg-sparkle {
  fill: #fcd34d;
}

/* ===== АДАПТИВНОСТЬ ===== */
@media (max-width: 640px) {
  .content-card {
    padding: 2rem 1.5rem;
  }
  
  .title {
    font-size: 1.75rem;
  }
  
  .illustration svg {
    width: 140px;
    height: 140px;
  }
  
  .description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.5rem;
  }
  
  .illustration svg {
    width: 120px;
    height: 120px;
  }
  
  .description br {
    display: none;
  }
}
</style>