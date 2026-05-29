<template>
  <section class="min-h-[50vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
    <div class="max-w-5xl mx-auto text-center relative z-10">
      <div class="mb-8">
        <SectionPill>Пресса • Партнёры • Организации</SectionPill>
      </div>

      <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 max-w-4xl mx-auto text-slate dark:text-white">
        Информация<br/>
        <span class="text-beige-500 italic">о проекте</span>
      </h1>

      <p class="text-lg md:text-xl text-gray-500 dark:text-off-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
        Документы, факты для СМИ и условия сотрудничества. Всё открыто и проверяемо.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#press" class="group px-8 py-4 bg-slate dark:bg-white text-white dark:text-slate rounded-xl font-bold text-lg hover:bg-gray-600 dark:hover:bg-off-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-slate/20">
          <AppIcon name="newspaper" class="w-5 h-5" />
          Для журналистов
        </a>
        <a href="#partners" class="px-8 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg shadow-beige-500/30 flex items-center justify-center gap-2">
          <AppIcon name="userPlus" class="w-5 h-5" />
          Для партнёров
        </a>
      </div>
    </div>
  </section>
</template>

