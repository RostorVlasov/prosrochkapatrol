<template>
  <div class="min-h-screen flex items-center justify-center font-[Golos_Text,sans-serif] px-4 py-8 bg-beige-50 dark:bg-beige-900">
    <div class="relative z-10 bg-white/90 dark:bg-beige-800/93 backdrop-blur-lg rounded-[2.5rem] p-12 pb-10 text-center border border-beige-300/30 dark:border-beige-700/38 shadow-[0_22px_60px_-10px_rgba(80,55,34,0.16)] dark:shadow-[0_22px_60px_-10px_rgba(0,0,0,0.55)] max-w-[520px] w-full">
      
      <div class="flex justify-center mb-6">
        <svg class="w-[150px] h-[150px] sm:w-[120px] sm:h-[120px]" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75" cy="75" r="68" class="fill-beige-50 dark:fill-beige-900"/>
          <circle cx="75" cy="75" r="68" fill="none" stroke-width="1.5" class="stroke-beige-200 dark:stroke-beige-700"/>
          <rect x="30" y="50" width="90" height="68" rx="8" stroke-width="1.5" class="fill-beige-100 stroke-beige-300 dark:fill-beige-800 dark:stroke-beige-600"/>
          <rect x="30" y="50" width="90" height="16" rx="8" class="fill-beige-200 dark:fill-beige-700"/>
          <rect x="30" y="58" width="90" height="8" class="fill-beige-200 dark:fill-beige-700"/>
          <rect x="42" y="78" width="50" height="4" rx="2" class="fill-beige-300/60 dark:fill-beige-500"/>
          <rect x="42" y="88" width="38" height="4" rx="2" class="fill-beige-300/40 dark:fill-beige-600"/>
          <rect x="42" y="98" width="44" height="4" rx="2" class="fill-beige-300/35 dark:fill-beige-600"/>
          <circle cx="105" cy="103" r="22" stroke-width="1.5" class="fill-beige-50 stroke-beige-200 dark:fill-beige-800 dark:stroke-beige-600"/>
          <circle cx="105" cy="103" r="16" fill="none" stroke-width="2.5" class="stroke-beige-400"/>
          <line x1="116" y1="114" x2="125" y2="123" stroke-width="3" stroke-linecap="round" class="stroke-beige-500 dark:stroke-beige-400"/>
          <text x="105" y="108" text-anchor="middle" font-family="Unbounded, sans-serif" font-size="13" font-weight="900" class="fill-beige-500 dark:fill-beige-300">?</text>
        </svg>
      </div>

      <div class="font-[Unbounded,sans-serif] text-[5.5rem] sm:text-[4rem] font-black leading-none tracking-[-0.04em] mb-0.5 text-beige-500 dark:text-beige-200">
        404
      </div>

      <h1 class="font-[Unbounded,sans-serif] text-lg sm:text-base font-bold tracking-[-0.01em] text-beige-700 dark:text-beige-200 mb-2">
        <slot>Страница не найдена</slot>
      </h1>

      <p class="text-[0.93rem] leading-[1.7] text-beige-700 dark:text-beige-300 mb-8">
        Запрошенная страница не существует или была перемещена.
      </p>

      <div class="flex gap-3 justify-center flex-wrap">
        <router-link to="/" class="inline-flex items-center gap-1.5 bg-beige-500 text-white font-bold px-5 py-2.5 rounded-full hover:bg-beige-600 transition-colors">
          На главную
        </router-link>
        <button @click="$router.back()" class="inline-flex items-center gap-1.5 bg-transparent text-beige-600 px-5 py-2.5 rounded-full border border-beige-500/40 hover:bg-beige-300/10 transition-colors">
          Назад
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
  mounted() {
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
  }
};
</script>
