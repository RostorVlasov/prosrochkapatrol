<template>
  <div class="page">
    <div class="stars" aria-hidden="true">
      <span
        v-for="i in 80"
        :key="i"
        class="star"
        :style="starStyle(i)"
      />
    </div>

    <div class="content">
      <div class="illustration" aria-hidden="true">
        <svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" width="320" height="260">
          <!-- Moon -->
          <circle cx="160" cy="80" r="54" fill="#1e2a4a" />
          <circle cx="182" cy="62" r="54" fill="#0d1117" />

          <!-- Craters -->
          <circle cx="130" cy="72" r="8" fill="#141c30" opacity="0.7"/>
          <circle cx="148" cy="96" r="5" fill="#141c30" opacity="0.6"/>
          <circle cx="118" cy="92" r="4" fill="#141c30" opacity="0.5"/>

          <!-- Moon glow -->
          <circle cx="160" cy="80" r="64" fill="none" stroke="#c9a227" stroke-width="1" opacity="0.18"/>
          <circle cx="160" cy="80" r="74" fill="none" stroke="#c9a227" stroke-width="0.5" opacity="0.08"/>

          <!-- Ground -->
          <ellipse cx="160" cy="230" rx="130" ry="18" fill="#111827" />

          <!-- Astronaut body -->
          <rect x="130" y="160" width="60" height="54" rx="12" fill="#dce8f5"/>

          <!-- Suit highlight -->
          <rect x="134" y="164" width="20" height="22" rx="6" fill="#eaf2fb" opacity="0.5"/>

          <!-- Backpack -->
          <rect x="186" y="166" width="16" height="32" rx="6" fill="#b0c4de"/>

          <!-- Left arm -->
          <rect x="112" y="163" width="20" height="12" rx="6" fill="#dce8f5"/>
          <circle cx="110" cy="169" r="7" fill="#aec6e0"/>

          <!-- Right arm (waving!) -->
          <g transform="rotate(-28, 208, 165)">
            <rect x="188" y="156" width="20" height="12" rx="6" fill="#dce8f5"/>
            <circle cx="210" cy="162" r="7" fill="#aec6e0"/>
          </g>

          <!-- Legs -->
          <rect x="136" y="210" width="18" height="22" rx="6" fill="#b0c4de"/>
          <rect x="162" y="210" width="18" height="22" rx="6" fill="#b0c4de"/>
          <!-- Boots -->
          <rect x="132" y="228" width="24" height="10" rx="5" fill="#7a9cbf"/>
          <rect x="158" y="228" width="24" height="10" rx="5" fill="#7a9cbf"/>

          <!-- Helmet -->
          <circle cx="160" cy="147" r="28" fill="#dce8f5"/>
          <!-- Visor -->
          <path d="M141 138 Q160 128 179 138 Q179 158 160 162 Q141 158 141 138Z" fill="#c9a227" opacity="0.85"/>
          <!-- Visor shine -->
          <ellipse cx="151" cy="139" rx="5" ry="4" fill="white" opacity="0.25" transform="rotate(-15,151,139)"/>

          <!-- Helmet ring -->
          <circle cx="160" cy="147" r="28" fill="none" stroke="#aec6e0" stroke-width="2.5"/>

          <!-- Stars near astronaut -->
          <circle cx="96" cy="110" r="2" fill="#c9a227" opacity="0.9"/>
          <circle cx="240" cy="95" r="1.5" fill="#c9a227" opacity="0.7"/>
          <circle cx="260" cy="140" r="1" fill="white" opacity="0.6"/>
          <circle cx="72" cy="150" r="1.5" fill="white" opacity="0.5"/>

          <!-- Flag pole -->
          <line x1="80" y1="165" x2="80" y2="222" stroke="#7a9cbf" stroke-width="2.5"/>
          <!-- Flag -->
          <rect x="80" y="165" width="36" height="22" rx="3" fill="#c9a227" opacity="0.9"/>
          <text x="98" y="181" text-anchor="middle" font-size="10" font-family="monospace" fill="#0d1117" font-weight="bold">WIP</text>
        </svg>
      </div>

      <h1 class="title">Страница в разработке</h1>
      <p class="subtitle">Мы уже работаем над этим. Скоро здесь будет что-то крутое&nbsp;🚀</p>

      <div class="dots" aria-hidden="true">
        <span class="dot dot--active" />
        <span class="dot" />
        <span class="dot" />
      </div>
    </div>
  </div>
</template>

<script setup>
function starStyle(i) {
  const seed = i * 7919
  const x = ((seed * 9301 + 49297) % 233280) / 233280 * 100
  const y = ((seed * 1231 + 12345) % 233280) / 233280 * 100
  const size = (i % 3 === 0) ? '2px' : '1px'
  const delay = (i % 5) * 0.6 + 's'
  const dur = 2 + (i % 4) * 0.8 + 's'
  return {
    left: x + '%',
    top: y + '%',
    width: size,
    height: size,
    animationDelay: delay,
    animationDuration: dur,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&family=Inter:wght@400;500&display=swap');

.page {
  min-height: 100vh;
  background: #0d1117;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  font-family: 'Inter', sans-serif;
}

.stars {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle var(--dur, 2.4s) ease-in-out infinite alternate;
  opacity: 0.5;
}

@keyframes twinkle {
  from { opacity: 0.15; transform: scale(0.8); }
  to   { opacity: 0.9;  transform: scale(1.3); }
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
}

.illustration {
  margin-bottom: 2rem;
  animation: float 4s ease-in-out infinite;
  filter: drop-shadow(0 0 32px rgba(201, 162, 39, 0.18));
}

@keyframes float {
  0%, 100% { transform: translateY(0);    }
  50%       { transform: translateY(-14px); }
}

.title {
  font-family: 'Russo One', sans-serif;
  font-size: clamp(1.6rem, 5vw, 2.8rem);
  color: #f0e6c8;
  margin: 0 0 0.75rem;
  letter-spacing: 0.03em;
  text-shadow: 0 0 40px rgba(201, 162, 39, 0.25);
}

.subtitle {
  font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  color: #6b7280;
  margin: 0 0 2rem;
  max-width: 340px;
  line-height: 1.6;
}

.dots {
  display: flex;
  gap: 10px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #374151;
  transition: background 0.3s;
}

.dot--active {
  background: #c9a227;
  animation: pulse 1.8s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1);    }
  50%       { opacity: 0.5; transform: scale(0.7); }
}
</style>