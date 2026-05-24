<template>
  <div class="min-h-screen bg-[#FFFFFF] dark:bg-[#1a1a1a] text-[#2B2B2B] dark:text-[#E7DDCD] font-sans">
    
    <!-- ============ HERO ============ -->
    <section class="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <!-- Warm background decorations -->
      <div class="absolute inset-0 opacity-40 dark:opacity-20">
        <div class="absolute top-20 right-10 w-96 h-96 bg-[#E7DDCD] rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#A0876E]/20 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-5xl mx-auto text-center relative z-10">
        <div class="mb-8">
          <span class="inline-flex items-center gap-2 px-6 py-3 bg-[#E7DDCD] dark:bg-[#2B2B2B] text-[#3F4245] dark:text-[#E7DDCD] rounded-full text-sm font-bold uppercase tracking-widest border border-[#A0876E]/30">
            Независимый мониторинг • Астрахань
          </span>
        </div>
        
        <h1 class="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8 max-w-4xl mx-auto text-[#2B2B2B] dark:text-[#FFFFFF]">
          Видим то,<br/>
          <span class="text-[#A0876E] italic">что на полках</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-[#3F4245] dark:text-[#E7DDCD]/80 max-w-3xl mx-auto leading-relaxed mb-12">
          Просроченный товар <span class="font-bold text-[#2B2B2B] dark:text-[#FFFFFF]">не имеет шансов</span>. Мы фиксируем нарушения, показываем правду и защищаем здоровье жителей Астрахани.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="scrollToWhat" class="group px-8 py-4 bg-[#2B2B2B] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#2B2B2B] rounded-xl font-bold text-lg hover:scale-105 transition transform duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#2B2B2B]/20">
            <UIcon name="i-heroicons-arrow-down-20-solid" class="w-5 h-5 group-hover:translate-y-1 transition" />
            Узнать подробнее
          </button>
          <button class="px-8 py-4 bg-[#A0876E] hover:bg-[#8a7358] text-[#FFFFFF] rounded-xl font-bold text-lg transition duration-300 shadow-lg shadow-[#A0876E]/30">
            Сообщить о нарушении
          </button>
        </div>
      </div>
    </section>

    <!-- ============ STATS ============ -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="group p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:shadow-2xl hover:border-[#A0876E] transition-all duration-300 transform hover:-translate-y-2">
          <div class="mb-6 w-14 h-14 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-2xl flex items-center justify-center">
            <UIcon name="i-heroicons-shopping-bag-20-solid" class="w-7 h-7 text-[#A0876E]" />
          </div>
          <div class="text-5xl font-black text-[#A0876E] mb-3 tracking-tight">2760+</div>
          <div class="font-bold text-lg mb-2">Товаров убрано</div>
          <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/60">С полок магазинов за время работы проекта</p>
        </div>

        <div class="group p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:shadow-2xl hover:border-[#A0876E] transition-all duration-300 transform hover:-translate-y-2">
          <div class="mb-6 w-14 h-14 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-2xl flex items-center justify-center">
            <UIcon name="i-heroicons-building-storefront-20-solid" class="w-7 h-7 text-[#A0876E]" />
          </div>
          <div class="text-5xl font-black text-[#A0876E] mb-3 tracking-tight">11</div>
          <div class="font-bold text-lg mb-2">Магазинов проверено</div>
          <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/60">В разных районах Астрахани</p>
        </div>

        <div class="group p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:shadow-2xl hover:border-[#A0876E] transition-all duration-300 transform hover:-translate-y-2">
          <div class="mb-6 w-14 h-14 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-2xl flex items-center justify-center">
            <UIcon name="i-heroicons-shield-check-20-solid" class="w-7 h-7 text-[#A0876E]" />
          </div>
          <div class="text-5xl font-black text-[#A0876E] mb-3 tracking-tight">0</div>
          <div class="font-bold text-lg mb-2">Проигранных споров</div>
          <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/60">Работаем строго в рамках закона РФ</p>
        </div>
      </div>
    </section>

    <!-- ============ WHAT WE DO (4 big blocks) ============ -->
    <section id="what" class="max-w-7xl mx-auto px-6 py-24">
      <div class="mb-20">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Методология
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Как мы это <span class="italic text-[#A0876E]">делаем</span>
        </h2>
        <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl">
          Семь дней в неделю мы проверяем полки, документируем нарушения и помогаем жителям Астрахани покупать <span class="font-semibold">безопасные продукты</span>.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <!-- Block 1: Baltic Sea -->
        <div class="group lg:col-span-1 p-12 bg-[#3F4245] rounded-3xl text-[#FFFFFF] overflow-hidden relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-[#A0876E]/20 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 bg-[#A0876E]/20 rounded-2xl flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-magnifying-glass-20-solid" class="w-8 h-8 text-[#E7DDCD]" />
            </div>
            <h3 class="text-3xl font-bold mb-4">Реальный мониторинг</h3>
            <p class="text-lg text-[#E7DDCD]/80 leading-relaxed">
              Мы ходим в магазины как <span class="italic">обычные покупатели</span>, проверяем сроки годности, условия хранения, санитарное состояние. Каждый визит задокументирован фото и видео.
            </p>
          </div>
        </div>

        <!-- Block 2: Dark Beige -->
        <div class="group lg:col-span-1 p-12 bg-[#A0876E] rounded-3xl text-[#FFFFFF] overflow-hidden relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-[#FFFFFF]/10 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 bg-[#FFFFFF]/15 rounded-2xl flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-chat-bubble-left-right-20-solid" class="w-8 h-8 text-[#FFFFFF]" />
            </div>
            <h3 class="text-3xl font-bold mb-4">Диалог, <span class="italic">а не война</span></h3>
            <p class="text-lg text-[#FFFFFF]/90 leading-relaxed">
              Находим нарушение? Сначала разговариваем с администрацией и даём рекомендации. Это помогает быстро решить проблему без конфликтов.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Block 3: Black Slate -->
        <div class="group lg:col-span-1 p-12 bg-[#2B2B2B] rounded-3xl text-[#FFFFFF] overflow-hidden relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-[#A0876E]/20 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 bg-[#A0876E]/20 rounded-2xl flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-document-text-20-solid" class="w-8 h-8 text-[#E7DDCD]" />
            </div>
            <h3 class="text-3xl font-bold mb-4">Открытые отчёты</h3>
            <p class="text-lg text-[#E7DDCD]/80 leading-relaxed">
              Все проверки публикуются <span class="font-semibold">открыто с фотодоказательствами</span> и рейтингом. Жители Астрахани видят реальную информацию и делают осознанный выбор.
            </p>
          </div>
        </div>

        <!-- Block 4: Whitening White -->
        <div class="group lg:col-span-1 p-12 bg-[#E7DDCD] rounded-3xl text-[#2B2B2B] overflow-hidden relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-[#A0876E]/20">
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-[#A0876E]/10 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 bg-[#A0876E]/15 rounded-2xl flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-scale-20-solid" class="w-8 h-8 text-[#A0876E]" />
            </div>
            <h3 class="text-3xl font-bold mb-4">По закону РФ</h3>
            <p class="text-lg text-[#3F4245] leading-relaxed">
              Каждый шаг обоснован <span class="italic">Конституцией</span>, законом о защите прав потребителей и правилами продажи товаров. Мы не выходим за рамки гражданских полномочий.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TIMELINE / PROCESS ============ -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Процесс
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-4 tracking-tight">
          Четыре шага к <span class="italic text-[#A0876E]">результату</span>
        </h2>
        <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl mx-auto">
          От обнаружения просрочки до публикации отчёта — всё по чётким правилам и стандартам
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        <!-- Connecting line (desktop) -->
        <div class="hidden md:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#E7DDCD] via-[#A0876E] to-[#E7DDCD] dark:from-[#3F4245] dark:via-[#A0876E] dark:to-[#3F4245]"></div>

        <div v-for="(step, i) in processSteps" :key="i" class="relative group">
          <div class="p-6 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
            <div class="absolute -top-4 left-6 w-10 h-10 bg-[#A0876E] text-[#FFFFFF] rounded-full flex items-center justify-center font-black text-lg shadow-lg z-10">
              {{ i + 1 }}
            </div>
            <div class="w-12 h-12 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-xl flex items-center justify-center mb-4 mt-4">
              <UIcon :name="step.icon" class="w-6 h-6 text-[#A0876E]" />
            </div>
            <h3 class="font-bold text-xl mb-2">{{ step.title }}</h3>
            <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FOR WHOM (3 AUDIENCES) — BIG SELLING BLOCK ============ -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Для вас
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Что это даёт <span class="italic text-[#A0876E]">именно вам</span>?
        </h2>
        <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl mx-auto">
          FreshCheck полезен каждому участнику торговой цепочки
        </p>
      </div>

      <div class="space-y-6">
        <!-- Buyers -->
        <div class="group bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-[#A0876E]">
          <div class="grid lg:grid-cols-5">
            <div class="lg:col-span-2 p-10 bg-[#E7DDCD] dark:bg-[#1a1a1a] flex flex-col justify-center">
              <div class="w-16 h-16 bg-[#A0876E] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UIcon name="i-heroicons-shopping-bag-20-solid" class="w-8 h-8 text-[#FFFFFF]" />
              </div>
              <h3 class="text-4xl font-black mb-3 tracking-tight">Покупателям</h3>
              <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">Обычным жителям Астрахани, которые хотят покупать безопасные продукты</p>
            </div>
            <div class="lg:col-span-3 p-10">
              <div class="space-y-5">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-bell-alert-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Узнавайте <span class="italic">первыми</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Свежие отчёты и рейтинги магазинов рядом с домом. Выбирайте безопасное место для покупок в вашем микрорайоне.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-heart-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Защищайте <span class="italic">семью</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Избегайте просроченного детского питания, молочки и мяса благодаря нашим проверкам конкретных магазинов.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-cursor-arrow-ripple-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Влияйте на <span class="italic">изменения</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Ваш сигнал запускает проверку именно в том магазине, куда вы ходите. И вы увидите результат.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Employees -->
        <div class="group bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-[#A0876E]">
          <div class="grid lg:grid-cols-5">
            <div class="lg:col-span-2 p-10 bg-[#3F4245] flex flex-col justify-center">
              <div class="w-16 h-16 bg-[#A0876E] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UIcon name="i-heroicons-identification-20-solid" class="w-8 h-8 text-[#FFFFFF]" />
              </div>
              <h3 class="text-4xl font-black mb-3 tracking-tight text-[#FFFFFF]">Сотрудникам</h3>
              <p class="text-[#E7DDCD]/80">Продавцы, кассиры, кладовщики — те, кто каждый день работает в зале</p>
            </div>
            <div class="lg:col-span-3 p-10">
              <div class="space-y-5">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-bolt-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Оперативный <span class="italic">сигнал</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Сразу убираете товар с полки и избегаете претензий от покупателей или серьёзных проверок.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-chat-bubble-bottom-center-text-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Работайте <span class="italic">спокойнее</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Мы начинаем с диалога и рекомендаций. Быстро исправляем нарушение без эскалации в органы.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-star-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Улучшайте <span class="italic">репутацию</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Сотрудники, которые реагируют на замечания, получают положительную отметку в нашем отчёте.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Owners -->
        <div class="group bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-[#A0876E]">
          <div class="grid lg:grid-cols-5">
            <div class="lg:col-span-2 p-10 bg-[#2B2B2B] flex flex-col justify-center">
              <div class="w-16 h-16 bg-[#A0876E] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UIcon name="i-heroicons-building-office-20-solid" class="w-8 h-8 text-[#FFFFFF]" />
              </div>
              <h3 class="text-4xl font-black mb-3 tracking-tight text-[#FFFFFF]">Руководству</h3>
              <p class="text-[#E7DDCD]/80">Директора, владельцы, администрация — те, кто отвечает за всё</p>
            </div>
            <div class="lg:col-span-3 p-10">
              <div class="space-y-5">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-trophy-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Наклейка <span class="italic">«Одобрено FreshCheck»</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Видимый знак качества на входе, который привлекает сознательных покупателей и выделяет ваш магазин.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-arrow-trending-up-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Рост <span class="italic">лояльности</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Честные полки и высокий рейтинг = больше постоянных клиентов из района. Бесплатный маркетинг.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-shield-check-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Избегайте <span class="italic">штрафов</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Наши рекомендации по температуре, хранению и маркировке помогают избежать штрафов Роспотребнадзора.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PRINCIPLES (10) ============ -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Ценности
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-4 tracking-tight">
          На чём мы <span class="italic text-[#A0876E]">стоим</span>
        </h2>
        <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl mx-auto">
          Десять принципов, которые определяют каждый шаг нашей работы
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div v-for="(p, i) in principles" :key="i"
             class="group p-6 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="w-12 h-12 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#A0876E] transition-colors">
            <UIcon :name="p.icon" class="w-6 h-6 text-[#A0876E] group-hover:text-[#FFFFFF] transition-colors" />
          </div>
          <h3 class="font-bold mb-2 text-sm">{{ p.title }}</h3>
          <p class="text-xs text-[#3F4245] dark:text-[#E7DDCD]/60 leading-relaxed">{{ p.desc }}</p>
        </div>
      </div>

      <!-- Callout -->
      <div class="mt-16 p-10 bg-gradient-to-r from-[#E7DDCD] to-[#F5EDE0] dark:from-[#2B2B2B] dark:to-[#3F4245] rounded-3xl border border-[#A0876E]/20 text-center">
        <UIcon name="i-heroicons-hand-raised-20-solid" class="w-12 h-12 text-[#A0876E] mx-auto mb-4" />
        <p class="text-2xl font-bold mb-2">Мы — это вы</p>
        <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-xl mx-auto">
          <span class="font-semibold">FreshCheck</span> — это все мы вместе. За качество, свежесть и безопасность продуктов в Астрахани.
        </p>
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="py-24 bg-[#E7DDCD]/30 dark:bg-[#1a1a1a]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-20">
          <div class="inline-block px-4 py-2 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
            Отзывы
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            Голоса <span class="italic text-[#A0876E]">Астрахани</span>
          </h2>
          <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70">Слова жителей, которым помогли наши проверки</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(t, i) in testimonials" :key="i"
               class="p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div class="flex gap-1 mb-6">
              <UIcon v-for="j in 5" :key="j" name="i-heroicons-star-20-solid" class="w-5 h-5 text-[#A0876E]" />
            </div>
            <p class="text-lg leading-relaxed mb-6 font-medium italic">
              «{{ t.text }}»
            </p>
            <div class="border-t border-[#E7DDCD] dark:border-[#3F4245] pt-6 flex items-center gap-3">
              <div class="w-12 h-12 bg-[#A0876E] rounded-full flex items-center justify-center text-[#FFFFFF] font-bold text-lg">
                {{ t.author.charAt(0) }}
              </div>
              <div>
                <p class="font-bold">{{ t.author }}</p>
                <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/60">{{ t.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ BADGE / STICKER ============ -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2B2B2B] via-[#3F4245] to-[#2B2B2B] p-10 sm:p-16 text-[#FFFFFF]">
        <div class="absolute top-0 right-0 w-96 h-96 bg-[#A0876E]/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#E7DDCD]/10 rounded-full blur-3xl"></div>

        <div class="relative z-10 max-w-3xl">
          <div class="inline-block px-4 py-2 bg-[#A0876E] rounded-full text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-6">
            Знак качества
          </div>
          <h2 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[0.9]">
            «Проверено<br>
            <span class="italic text-[#A0876E]">FreshCheck»</span>
          </h2>
          <p class="text-lg text-[#E7DDCD]/80 mb-8 leading-relaxed">
            Магазины с рейтингом <strong class="text-[#FFFFFF]">5/5</strong> получают право использовать видимый знак качества на входе. Это не государственный сертификат — это мнение жителей, основанное на реальных наблюдениях.
          </p>
          <div class="space-y-3 mb-10">
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle-20-solid" class="w-6 h-6 text-[#A0876E] flex-shrink-0" />
              <span class="text-[#E7DDCD]/90">Покупатели сразу понимают: здесь безопасно и свежо</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle-20-solid" class="w-6 h-6 text-[#A0876E] flex-shrink-0" />
              <span class="text-[#E7DDCD]/90">Рост лояльности — семьи выбирают такие магазины</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle-20-solid" class="w-6 h-6 text-[#A0876E] flex-shrink-0" />
              <span class="text-[#E7DDCD]/90">Бесплатный маркетинг — наклейка работает 24/7</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle-20-solid" class="w-6 h-6 text-[#A0876E] flex-shrink-0" />
              <span class="text-[#E7DDCD]/90">Конкурентное преимущество среди соседних точек</span>
            </div>
          </div>
          <NuxtLink to="/#">
            <button class="inline-flex items-center gap-2 px-8 py-4 bg-[#A0876E] hover:bg-[#8a7358] text-[#FFFFFF] rounded-xl font-bold shadow-xl transition">
              Как получить наклейку
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ============ LATEST SHOPS ============ -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
        <div>
          <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
            В реальном времени
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            Последние <span class="italic text-[#A0876E]">проверки</span>
          </h2>
          <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70">Актуальные рейтинги магазинов Астрахани</p>
        </div>
        <NuxtLink to="/product-review" class="inline-flex items-center gap-2 text-[#A0876E] font-bold hover:text-[#8a7358] transition">
          Смотреть все
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
        </NuxtLink>
      </div>

      <div v-if="loadingShops" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="i in 4" :key="i" class="h-64 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl animate-pulse border border-[#E7DDCD] dark:border-[#3F4245]"></div>
      </div>

      <div v-else-if="latestShops.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="shop in latestShops" :key="shop.id"
             class="group p-6 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div class="flex justify-between items-start mb-4">
            <div class="inline-flex items-center gap-2">
              <span class="text-4xl font-black text-[#A0876E] tracking-tight">{{ formatRating(shop.total_score) }}</span>
              <span class="text-sm text-[#3F4245]/50 dark:text-[#E7DDCD]/50">/5</span>
            </div>
            <UIcon name="i-heroicons-check-circle-20-solid" v-if="shop.total_score === 5" class="w-6 h-6 text-[#A0876E]" />
          </div>
          <h3 class="font-bold text-lg mb-2 group-hover:text-[#A0876E] transition">{{ shop.store_name }}</h3>
          <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70 mb-4 flex items-center gap-1">
            <UIcon name="i-heroicons-map-pin-20-solid" class="w-4 h-4 text-[#A0876E]" />
            {{ shop.address }}
          </p>
          <div class="flex gap-2">
            <span class="text-xs bg-[#E7DDCD] dark:bg-[#3F4245] text-[#3F4245] dark:text-[#E7DDCD] px-3 py-1 rounded-full font-mono">
              {{ formatDate(shop.date_checked) }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="max-w-5xl mx-auto px-6 py-24 text-center">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#A0876E] via-[#8a7358] to-[#A0876E] p-12 sm:p-16">
        <div class="absolute inset-0 opacity-10"
             style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 24px 24px;"></div>
        <div class="relative z-10">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-[#FFFFFF]/20 rounded-2xl backdrop-blur-sm mb-8">
            <UIcon name="i-heroicons-megaphone-20-solid" class="w-10 h-10 text-[#FFFFFF]" />
          </div>
          <h2 class="text-5xl md:text-6xl font-black text-[#FFFFFF] tracking-tight mb-6 leading-[0.9]">
            Нашли <span class="italic">просрочку?</span>
          </h2>
          <p class="text-xl text-[#FFFFFF]/90 mb-12 max-w-3xl mx-auto">
            Ваше сообщение — это начало проверки. Мы свяжемся с администрацией и проведём мониторинг магазина.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/RomanTroshinRF" target="_blank"
               class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FFFFFF] text-[#2B2B2B] font-bold text-lg rounded-2xl transition-all transform hover:scale-105 shadow-xl">
              <UIcon name="i-heroicons-paper-airplane-20-solid" class="w-6 h-6" />
              Написать в Telegram
            </a>
            <a href="mailto:none@prosrochkapatrol.ru"
               class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#2B2B2B] text-[#FFFFFF] font-bold text-lg rounded-2xl transition-all transform hover:scale-105 border border-[#FFFFFF]/20">
              <UIcon name="i-heroicons-envelope-20-solid" class="w-6 h-6" />
              Написать email
            </a>
          </div>

          <p class="text-sm text-[#FFFFFF]/70 mt-10">
            Telegram: <span class="font-semibold">@RomanTroshinRF</span> •
            Email: <span class="font-semibold">none@prosrochkapatrol.ru</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const latestShops = ref([])
const loadingShops = ref(true)

const processSteps = [
  {
    icon: 'i-heroicons-user-plus-20-solid',
    title: 'Вход',
    desc: 'Заходим в магазин как обычный покупатель. При возможности представляемся.'
  },
  {
    icon: 'i-heroicons-camera-20-solid',
    title: 'Фиксация',
    desc: 'Фотографируем товары, полки, ценники. Видео — для служебных целей.'
  },
  {
    icon: 'i-heroicons-chat-bubble-20-solid',
    title: 'Уведомление',
    desc: 'Информируем администрацию о нарушениях и даём рекомендации.'
  },
  {
    icon: 'i-heroicons-globe-alt-20-solid',
    title: 'Публикация',
    desc: 'В течение 1-3 дней выкладываем отчёт с рейтингом и фото.'
  }
]

const principles = [
  { icon: 'i-heroicons-scale-20-solid', title: 'Законность', desc: 'Строго в рамках Конституции РФ' },
  { icon: 'i-heroicons-check-circle-20-solid', title: 'Честность', desc: 'Только реальные факты' },
  { icon: 'i-heroicons-eye-20-solid', title: 'Прозрачность', desc: 'Все документы открыты' },
  { icon: 'i-heroicons-hand-raised-20-solid', title: 'Безопасность', desc: 'Здоровье семей в центре' },
  { icon: 'i-heroicons-chat-bubble-left-20-solid', title: 'Партнёрство', desc: 'Диалог, не война' },
  { icon: 'i-heroicons-arrow-path-20-solid', title: 'Соразмерность', desc: 'Реакция = тяжести' },
  { icon: 'i-heroicons-user-20-solid', title: 'Уважение', desc: 'Не публикуем лица людей' },
  { icon: 'i-heroicons-bolt-20-solid', title: 'Независимость', desc: 'Без конфликтов интересов' },
  { icon: 'i-heroicons-chat-bubble-left-right-20-solid', title: 'Диалог', desc: 'Готовы исправлять ошибки' },
  { icon: 'i-heroicons-globe-alt-20-solid', title: 'Общественная польза', desc: 'Среда безопасных продуктов' }
]

const testimonials = [
  {
    text: 'Очень приятно, что кто-то реально следит за качеством. Убрали просроченные грибы и помятые банки в соседнем магазине. Спасибо!',
    author: 'Ирина К.',
    location: 'Кировский район'
  },
  {
    text: 'Сообщила про просроченный йогурт днём. К вечеру всё убрали и даже пост сделали. Теперь доверяю этому магазину намного больше.',
    author: 'Мария Л.',
    location: 'Советский район'
  },
  {
    text: 'Как папа с годовалым малышом скажу: спасибо, что проверяете молочку и детское питание. Для нас это вопрос здоровья сына.',
    author: 'Андрей М.',
    location: 'Ленинский район'
  }
]

const fetchLatestShops = async () => {
  try {
    loadingShops.value = true
    const response = await $fetch('https://api.test.prosrochkapatrol.ru/api/shops', {
      query: { limit: 4, sort: '-date_checked', depth: 1, draft: false }
    })
    if (response && (response as any).docs && Array.isArray((response as any).docs)) {
      latestShops.value = (response as any).docs
    }
  } catch (error) {
    console.error('Ошибка загрузки магазинов:', error)
  } finally {
    loadingShops.value = false
  }
}

const formatRating = (score: any) => {
  if (!score) return '—'
  return parseFloat(score).toFixed(1)
}

const formatDate = (dateString: any) => {
  if (!dateString) return '—'
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  return `${day}.${month}`
}

const scrollToWhat = () => {
  const element = document.getElementById('what')
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  fetchLatestShops()
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>