<template>
  <div class="min-h-screen bg-[#FFFFFF] dark:bg-[#1a1a1a] text-[#2B2B2B] dark:text-[#E7DDCD] font-sans">
    
    <!-- ============ HERO ============ -->
    <section class="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-40 dark:opacity-20">
        <div class="absolute top-20 right-10 w-96 h-96 bg-[#E7DDCD] rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#A0876E]/20 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-5xl mx-auto text-center relative z-10">
        <div class="mb-8">
          <span class="inline-flex items-center gap-2 px-6 py-3 bg-[#E7DDCD] dark:bg-[#2B2B2B] text-[#3F4245] dark:text-[#E7DDCD] rounded-full text-sm font-bold uppercase tracking-widest border border-[#A0876E]/30">
            Общественный мониторинг • Астрахань
          </span>
        </div>
        
        <h1 class="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8 max-w-4xl mx-auto text-[#2B2B2B] dark:text-[#FFFFFF]">
          Видим то,<br/>
          <span class="text-[#A0876E] italic">что на полках</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-[#3F4245] dark:text-[#E7DDCD]/80 max-w-3xl mx-auto leading-relaxed mb-12">
          Мы — <span class="font-bold text-[#2B2B2B] dark:text-[#FFFFFF]">неравнодушные соседи</span>, которые помогают магазинам стать лучше, а жителям Астрахани — покупать <span class="font-bold text-[#2B2B2B] dark:text-[#FFFFFF]">свежие и безопасные продукты</span>.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="scrollToWhat" class="group px-8 py-4 bg-[#2B2B2B] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#2B2B2B] rounded-xl font-bold text-lg hover:bg-[#3F4245] dark:hover:bg-[#E7DDCD] transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#2B2B2B]/20">
            <UIcon name="i-heroicons-arrow-down-20-solid" class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
            Как это работает
          </button>
          <a href="/contact" class="px-8 py-4 bg-[#A0876E] hover:bg-[#8a7358] text-[#FFFFFF] rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg shadow-[#A0876E]/30 flex items-center justify-center gap-2">
            <UIcon name="i-heroicons-paper-airplane-20-solid" class="w-5 h-5" />
            Предложить магазин
          </a>
        </div>
      </div>
    </section>

    <!-- ============ STATS ============ -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="group p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:shadow-2xl hover:border-[#A0876E] transition-all duration-500">
          <div class="mb-6 w-14 h-14 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-2xl flex items-center justify-center group-hover:bg-[#A0876E] transition-colors duration-500">
            <UIcon name="i-heroicons-shopping-bag-20-solid" class="w-7 h-7 text-[#A0876E] group-hover:text-[#FFFFFF] transition-colors duration-500" />
          </div>
          <div class="text-5xl font-black text-[#A0876E] mb-3 tracking-tight">2760+</div>
          <div class="font-bold text-lg mb-2">Единиц товара убрано</div>
          <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/60">С полок магазинов в ходе совместной работы с администрацией</p>
        </div>

        <div class="group p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:shadow-2xl hover:border-[#A0876E] transition-all duration-500">
          <div class="mb-6 w-14 h-14 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-2xl flex items-center justify-center group-hover:bg-[#A0876E] transition-colors duration-500">
            <UIcon name="i-heroicons-building-storefront-20-solid" class="w-7 h-7 text-[#A0876E] group-hover:text-[#FFFFFF] transition-colors duration-500" />
          </div>
          <div class="text-5xl font-black text-[#A0876E] mb-3 tracking-tight">11</div>
          <div class="font-bold text-lg mb-2">Магазинов в мониторинге</div>
          <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/60">Регулярно посещаем торговые точки в разных районах Астрахани</p>
        </div>

        <div class="group p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:shadow-2xl hover:border-[#A0876E] transition-all duration-500">
          <div class="mb-6 w-14 h-14 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-2xl flex items-center justify-center group-hover:bg-[#A0876E] transition-colors duration-500">
            <UIcon name="i-heroicons-hand-thumb-up-20-solid" class="w-7 h-7 text-[#A0876E] group-hover:text-[#FFFFFF] transition-colors duration-500" />
          </div>
          <div class="text-5xl font-black text-[#A0876E] mb-3 tracking-tight">98%</div>
          <div class="font-bold text-lg mb-2">Решено на месте</div>
          <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/60">Недочёты устраняются в диалоге с сотрудниками, без эскалации</p>
        </div>
      </div>
    </section>

    <!-- ============ HOW TO REPORT ============ -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Инструкция
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Как <span class="italic text-[#A0876E]">сообщить</span> о проблеме?
        </h2>
        <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl mx-auto">
          Три простых шага — и мы проверим магазин, о котором вы рассказали
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="group p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all duration-500 text-center">
          <div class="w-20 h-20 bg-[#A0876E] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-4xl font-black text-[#FFFFFF]">1</span>
          </div>
          <h3 class="font-bold text-xl mb-3">Напишите нам</h3>
          <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">
            Отправьте сообщение в Telegram или через форму на сайте: укажите название магазина, адрес и суть наблюдения.
          </p>
        </div>

        <div class="group p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all duration-500 text-center">
          <div class="w-20 h-20 bg-[#A0876E] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-4xl font-black text-[#FFFFFF]">2</span>
          </div>
          <h3 class="font-bold text-xl mb-3">Мы проверяем</h3>
          <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">
            В течение 1–3 дней наш волонтёр посещает магазин, фиксирует ситуацию и обсуждает её с администрацией.
          </p>
        </div>

        <div class="group p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all duration-500 text-center">
          <div class="w-20 h-20 bg-[#A0876E] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-4xl font-black text-[#FFFFFF]">3</span>
          </div>
          <h3 class="font-bold text-xl mb-3">Публикуем результат</h3>
          <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">
            Отчёт с фото и рейтингом появляется на сайте и в наших каналах. Вы видите, что изменилось.
          </p>
        </div>
      </div>

      <div class="mt-12 text-center">
        <a href="tg://resolve?domain=prosrochka_patrol" target="_blank"
           class="inline-flex items-center gap-2 px-8 py-4 bg-[#2AABEE] hover:bg-[#2290c9] text-[#FFFFFF] rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg">
          <UIcon name="i-simple-icons-telegram" class="w-6 h-6" />
          Написать в канал проекта
        </a>
      </div>
    </section>

    <!-- ============ WHAT WE DO ============ -->
    <section id="what" class="max-w-7xl mx-auto px-6 py-24">
      <div class="mb-20">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Наш подход
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Как мы <span class="italic text-[#A0876E]">наблюдаем</span>
        </h2>
        <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl">
          Каждую неделю мы осматриваем полки, делимся наблюдениями с администрацией и помогаем жителям Астрахани делать <span class="font-semibold">осознанный выбор</span>.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div class="group lg:col-span-1 p-12 bg-[#3F4245] rounded-3xl text-[#FFFFFF] overflow-hidden relative hover:shadow-2xl transition-shadow duration-500">
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-[#A0876E]/20 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 bg-[#A0876E]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#A0876E]/40 transition-colors duration-500">
              <UIcon name="i-heroicons-magnifying-glass-20-solid" class="w-8 h-8 text-[#E7DDCD]" />
            </div>
            <h3 class="text-3xl font-bold mb-4">Открытый мониторинг</h3>
            <p class="text-lg text-[#E7DDCD]/80 leading-relaxed">
              Мы заходим в магазины как <span class="italic">обычные покупатели</span>, обращаем внимание на сроки годности, условия хранения и чистоту. Каждый визит сопровождается фотофиксацией.
            </p>
          </div>
        </div>

        <div class="group lg:col-span-1 p-12 bg-[#A0876E] rounded-3xl text-[#FFFFFF] overflow-hidden relative hover:shadow-2xl transition-shadow duration-500">
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-[#FFFFFF]/10 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 bg-[#FFFFFF]/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFFFFF]/25 transition-colors duration-500">
              <UIcon name="i-heroicons-chat-bubble-left-right-20-solid" class="w-8 h-8 text-[#FFFFFF]" />
            </div>
            <h3 class="text-3xl font-bold mb-4">Диалог <span class="italic">прежде всего</span></h3>
            <p class="text-lg text-[#FFFFFF]/90 leading-relaxed">
              Замечаем недочёт? Сначала спокойно обсуждаем его с администрацией и даём рекомендации. В 98% случаев проблема решается на месте — без конфликтов и жалоб.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="group lg:col-span-1 p-12 bg-[#2B2B2B] rounded-3xl text-[#FFFFFF] overflow-hidden relative hover:shadow-2xl transition-shadow duration-500">
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-[#A0876E]/20 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 bg-[#A0876E]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#A0876E]/40 transition-colors duration-500">
              <UIcon name="i-heroicons-document-text-20-solid" class="w-8 h-8 text-[#E7DDCD]" />
            </div>
            <h3 class="text-3xl font-bold mb-4">Объективные обзоры</h3>
            <p class="text-lg text-[#E7DDCD]/80 leading-relaxed">
              Все визиты мы описываем <span class="font-semibold">открыто, с фотофиксацией</span> и честным рейтингом. Жители Астрахани видят реальную картину и делают осознанный выбор магазина.
            </p>
          </div>
        </div>

        <div class="group lg:col-span-1 p-12 bg-[#E7DDCD] rounded-3xl text-[#2B2B2B] overflow-hidden relative hover:shadow-2xl transition-shadow duration-500 border border-[#A0876E]/20">
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-[#A0876E]/10 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 bg-[#A0876E]/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#A0876E]/30 transition-colors duration-500">
              <UIcon name="i-heroicons-scale-20-solid" class="w-8 h-8 text-[#A0876E]" />
            </div>
            <h3 class="text-3xl font-bold mb-4">В рамках закона</h3>
            <p class="text-lg text-[#3F4245] leading-relaxed">
              Каждый наш шаг опирается на <span class="italic">Конституцию РФ</span>, закон о защите прав потребителей и правила продажи товаров. Мы действуем как обычные граждане — без претензий на властные полномочия.
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
          От визита в магазин до публикации обзора — всё прозрачно и по чётким правилам
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        <div class="hidden md:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#E7DDCD] via-[#A0876E] to-[#E7DDCD] dark:from-[#3F4245] dark:via-[#A0876E] dark:to-[#3F4245]"></div>

        <div v-for="(step, i) in processSteps" :key="i" class="relative group">
          <div class="p-6 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] hover:shadow-xl transition-all duration-500 h-full">
            <div class="absolute -top-4 left-6 w-10 h-10 bg-[#A0876E] text-[#FFFFFF] rounded-full flex items-center justify-center font-black text-lg shadow-lg z-10">
              {{ i + 1 }}
            </div>
            <div class="w-12 h-12 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-xl flex items-center justify-center mb-4 mt-4 group-hover:bg-[#A0876E] transition-colors duration-500">
              <UIcon :name="step.icon" class="w-6 h-6 text-[#A0876E] group-hover:text-[#FFFFFF] transition-colors duration-500" />
            </div>
            <h3 class="font-bold text-xl mb-2">{{ step.title }}</h3>
            <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ ABOUT TEAM ============ -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Люди проекта
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Кто <span class="italic text-[#A0876E]">мы такие</span>
        </h2>
        <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl mx-auto">
          Мы — не контролирующий орган и не журналисты. Мы обычные жители Астрахани, которым не всё равно
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <!-- Team photos — 4 members -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch justify-items-center">
          <div class="aspect-[3/4] w-full bg-gradient-to-br from-[#A0876E] to-[#8a7358] rounded-3xl flex items-end p-5 relative overflow-hidden">
            <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 20px 20px;"></div>
            <div class="relative z-10 text-[#FFFFFF]">
              <div class="w-10 h-10 bg-[#FFFFFF]/20 rounded-full flex items-center justify-center mb-2 text-base font-black">Р</div>
              <div class="font-bold text-sm leading-tight">Роман Трошин</div>
              <div class="text-xs text-[#FFFFFF]/80 mt-0.5">Основатель</div>
            </div>
          </div>
          <div class="aspect-[3/4] w-full bg-gradient-to-br from-[#3F4245] to-[#2B2B2B] rounded-3xl flex items-end p-5 relative overflow-hidden">
            <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 20px 20px;"></div>
            <div class="relative z-10 text-[#FFFFFF]">
              <div class="w-10 h-10 bg-[#FFFFFF]/20 rounded-full flex items-center justify-center mb-2 text-base font-black">Б</div>
              <div class="font-bold text-sm leading-tight">Борис</div>
              <div class="text-xs text-[#FFFFFF]/80 mt-0.5">Разработчик</div>
            </div>
          </div>
          <div class="aspect-[3/4] w-full bg-gradient-to-br from-[#2B2B2B] to-[#3F4245] rounded-3xl flex items-end p-5 relative overflow-hidden">
            <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 20px 20px;"></div>
            <div class="relative z-10 text-[#FFFFFF]">
              <div class="w-10 h-10 bg-[#FFFFFF]/20 rounded-full flex items-center justify-center mb-2 text-base font-black">Д</div>
              <div class="font-bold text-sm leading-tight">Дарья</div>
              <div class="text-xs text-[#FFFFFF]/80 mt-0.5">Мониторинг</div>
            </div>
          </div>
          <div class="aspect-[3/4] w-full bg-gradient-to-br from-[#E7DDCD] to-[#A0876E]/60 rounded-3xl flex items-end p-5 relative overflow-hidden border border-[#A0876E]/30">
            <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle, #2B2B2B 1px, transparent 1px); background-size: 20px 20px;"></div>
            <div class="relative z-10 text-[#2B2B2B]">
              <div class="w-10 h-10 bg-[#2B2B2B]/20 rounded-full flex items-center justify-center mb-2 text-base font-black">Р</div>
              <div class="font-bold text-sm leading-tight">Роман К.</div>
              <div class="text-xs text-[#2B2B2B]/80 mt-0.5">Мониторинг</div>
            </div>
          </div>
        </div>

        <!-- About text -->
        <div class="space-y-6">
          <div class="p-6 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245]">
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-xl flex items-center justify-center flex-shrink-0">
                <UIcon name="i-heroicons-users-20-solid" class="w-6 h-6 text-[#A0876E]" />
              </div>
              <div>
                <h3 class="font-bold text-lg mb-2">Обычные жители</h3>
                <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm leading-relaxed">
                  Проект запустили в августе 2025 года. Мы не чиновники, не журналисты и не представители надзорных органов. Мы — ваши соседи, родители, покупатели.
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245]">
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-xl flex items-center justify-center flex-shrink-0">
                <UIcon name="i-heroicons-heart-20-solid" class="w-6 h-6 text-[#A0876E]" />
              </div>
              <div>
                <h3 class="font-bold text-lg mb-2">Безвозмездно</h3>
                <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm leading-relaxed">
                  Мы не получаем зарплату, не берём деньги с магазинов и не продаём рейтинги. Это добровольческая инициатива ради общей пользы.
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245]">
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-xl flex items-center justify-center flex-shrink-0">
                <UIcon name="i-heroicons-identification-20-solid" class="w-6 h-6 text-[#A0876E]" />
              </div>
              <div>
                <h3 class="font-bold text-lg mb-2">С бейджами и открыто</h3>
                <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm leading-relaxed">
                  Каждый участник имеет персональный бейдж с кодом, который любой может проверить на нашем сайте. Мы представляемся администрации и не скрываем своих целей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ NEWS UPDATES ============ -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Новости
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Последние <span class="italic text-[#A0876E]">обновления</span>
        </h2>
        <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl mx-auto">
          Следите за развитием проекта и новыми проверками
        </p>
      </div>

      <!-- Loading state -->
      <div v-if="loadingNews" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="i in 3" :key="i" class="h-80 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl animate-pulse border border-[#E7DDCD] dark:border-[#3F4245]"></div>
      </div>

      <!-- Error state -->
      <div v-else-if="newsError" class="text-center py-12">
        <UIcon name="i-heroicons-exclamation-circle-20-solid" class="w-16 h-16 text-[#A0876E] mx-auto mb-4" />
        <p class="text-xl font-bold text-[#2B2B2B] dark:text-[#FFFFFF] mb-2">Ошибка подключения к API</p>
        <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">Не удалось загрузить новости. Попробуйте позже.</p>
      </div>

      <!-- Success state -->
      <div v-else-if="newsUpdates.length" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NuxtLink v-for="news in newsUpdates" :key="news.id" :to="`/post/${news.id}`"
             class="group bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] hover:shadow-xl transition-all duration-500 overflow-hidden">
          <!-- 16:9 Cover Image -->
          <div v-if="news.cover" class="aspect-[16/9] w-full overflow-hidden bg-[#E7DDCD] dark:bg-[#3F4245]">
            <img :src="`https://api.test.prosrochkapatrol.ru${news.cover.url}`" 
                 :alt="news.title"
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div v-else class="aspect-[16/9] w-full bg-[#E7DDCD] dark:bg-[#3F4245] flex items-center justify-center">
            <UIcon name="i-heroicons-newspaper-20-solid" class="w-16 h-16 text-[#A0876E]/40" />
          </div>
          
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4 flex-wrap">
              <span v-for="rubric in news.rubrics" :key="rubric.id" 
                    class="px-3 py-1 bg-[#E7DDCD] dark:bg-[#3F4245] text-[#3F4245] dark:text-[#E7DDCD] text-xs font-bold rounded-full">
                {{ rubric.name }}
              </span>
              <span class="text-xs text-[#3F4245] dark:text-[#E7DDCD]/60 ml-auto">
                {{ formatDate(news.admin_panel?.published_at) }}
              </span>
            </div>
            <h3 class="font-bold text-lg mb-3 group-hover:text-[#A0876E] transition-colors duration-300 line-clamp-2">{{ news.title }}</h3>
            <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70 mb-4 line-clamp-3">
              {{ extractTextFromLexical(news.body) }}
            </p>
            <div class="text-[#A0876E] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
              Читать далее
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4" />
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- No data state -->
      <div v-else class="text-center py-12">
        <UIcon name="i-heroicons-inbox-20-solid" class="w-16 h-16 text-[#A0876E] mx-auto mb-4" />
        <p class="text-xl font-bold text-[#2B2B2B] dark:text-[#FFFFFF] mb-2">Новости пока отсутствуют</p>
        <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">Следите за обновлениями в наших каналах</p>
      </div>
    </section>

    <!-- ============ FOR WHOM ============ -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Для вас
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Что это даёт <span class="italic text-[#A0876E]">именно вам</span>?
        </h2>
        <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl mx-auto">
          FreshCheck приносит пользу каждому участнику торговой цепочки
        </p>
      </div>

      <div class="space-y-6">
        <!-- Buyers -->
        <div class="group bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-[#A0876E]">
          <div class="grid lg:grid-cols-5">
            <div class="lg:col-span-2 p-10 bg-[#E7DDCD] dark:bg-[#1a1a1a] flex flex-col justify-center">
              <div class="w-16 h-16 bg-[#A0876E] rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500">
                <UIcon name="i-heroicons-shopping-bag-20-solid" class="w-8 h-8 text-[#FFFFFF]" />
              </div>
              <h3 class="text-4xl font-black mb-3 tracking-tight">Покупателям</h3>
              <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">Жителям Астрахани, которые хотят уверенности в свежести продуктов</p>
            </div>
            <div class="lg:col-span-3 p-10">
              <div class="space-y-5">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-bell-alert-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Выбирайте <span class="italic">осознанно</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Свежие обзоры и рейтинги магазинов рядом с домом помогают выбрать лучшее место для покупок в вашем микрорайоне.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-heart-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Заботьтесь о <span class="italic">семье</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Обращайте особое внимание на детское питание, молочку и мясо в магазинах с нашими обзорами — и покупайте со спокойной душой.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-cursor-arrow-ripple-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Участвуйте в <span class="italic">улучшениях</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Ваше наблюдение запускает визит именно в тот магазин, куда вы ходите. И вы увидите результат — свежую полку и отзыв администрации.</p>
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
              <div class="w-16 h-16 bg-[#A0876E] rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500">
                <UIcon name="i-heroicons-identification-20-solid" class="w-8 h-8 text-[#FFFFFF]" />
              </div>
              <h3 class="text-4xl font-black mb-3 tracking-tight text-[#FFFFFF]">Сотрудникам</h3>
              <p class="text-[#E7DDCD]/80">Продавцы, кассиры, кладовщики — те, кто каждый день работает в зале</p>
            </div>
            <div class="lg:col-span-3 p-10">
              <div class="space-y-5">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-eye-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Взгляд <span class="italic">со стороны</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Иногда глаз замыливается — мы помогаем вовремя заметить забытый на полке товар, который вы сами бы хотели убрать.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-chat-bubble-bottom-center-text-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Работа <span class="italic">без стресса</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Мы всегда начинаем со спокойного разговора. Никаких конфликтов — только рекомендации и возможность быстро поправить ситуацию.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-star-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Ваша <span class="italic">репутация</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Сотрудники, которые спокойно реагируют на замечания и быстро устраняют недочёты, получают положительную отметку в нашем обзоре.</p>
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
              <div class="w-16 h-16 bg-[#A0876E] rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500">
                <UIcon name="i-heroicons-building-office-20-solid" class="w-8 h-8 text-[#FFFFFF]" />
              </div>
              <h3 class="text-4xl font-black mb-3 tracking-tight text-[#FFFFFF]">Руководству</h3>
              <p class="text-[#E7DDCD]/80">Директора, владельцы, администрация — те, кто отвечает за качество</p>
            </div>
            <div class="lg:col-span-3 p-10">
              <div class="space-y-5">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-clipboard-document-check-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Бесплатный <span class="italic">аудит качества</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Наши визиты — это взгляд внимательного покупателя, который замечает то, что можно упустить в рутине. Ценный источник обратной связи.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-arrow-trending-up-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Укрепление <span class="italic">доверия</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Высокий рейтинг FreshCheck = больше лояльных клиентов из района. Это честный маркетинг, который работает за вас.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-lg flex items-center justify-center">
                    <UIcon name="i-heroicons-trophy-20-solid" class="w-5 h-5 text-[#A0876E]" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">Знак <span class="italic">«Одобрено FreshCheck»</span></h4>
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 text-sm">Видимый знак качества для магазинов с рейтингом 5/5. Выделяет вас среди соседей и привлекает сознательных покупателей.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PRINCIPLES ============ -->
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
             class="group p-6 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] hover:shadow-xl transition-all duration-500">
          <div class="w-12 h-12 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#A0876E] transition-colors duration-500">
            <UIcon :name="p.icon" class="w-6 h-6 text-[#A0876E] group-hover:text-[#FFFFFF] transition-colors duration-500" />
          </div>
          <h3 class="font-bold mb-2 text-sm">{{ p.title }}</h3>
          <p class="text-xs text-[#3F4245] dark:text-[#E7DDCD]/60 leading-relaxed">{{ p.desc }}</p>
        </div>
      </div>

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
          <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70">Слова жителей, которым помогли наши наблюдения</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(t, i) in testimonials" :key="i"
               class="p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] hover:shadow-2xl transition-all duration-500">
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
            «Одобрено<br>
            <span class="italic text-[#E7DDCD] drop-shadow-md">FreshCheck»</span>
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
          <NuxtLink to="/badge">
            <button class="inline-flex items-center gap-2 px-8 py-4 bg-[#A0876E] hover:bg-[#8a7358] text-[#FFFFFF] rounded-xl font-bold shadow-xl transition-colors duration-300">
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
            Актуально
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            Недавние <span class="italic text-[#A0876E]">визиты</span>
          </h2>
          <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70">Свежие обзоры магазинов Астрахани</p>
        </div>
        <NuxtLink to="/product-review" class="inline-flex items-center gap-2 text-[#A0876E] font-bold hover:text-[#8a7358] transition-colors duration-300">
          Все магазины
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
        </NuxtLink>
      </div>

      <!-- Loading state -->
      <div v-if="loadingShops" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="i in 4" :key="i" class="h-80 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl animate-pulse border border-[#E7DDCD] dark:border-[#3F4245]"></div>
      </div>

      <!-- Error state -->
      <div v-else-if="shopsError" class="text-center py-12 col-span-full">
        <UIcon name="i-heroicons-exclamation-circle-20-solid" class="w-16 h-16 text-[#A0876E] mx-auto mb-4" />
        <p class="text-xl font-bold text-[#2B2B2B] dark:text-[#FFFFFF] mb-2">Ошибка подключения к API</p>
        <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">Не удалось загрузить магазины. Попробуйте позже.</p>
      </div>

      <!-- Success state -->
      <div v-else-if="latestShops.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink v-for="shop in latestShops" :key="shop.id" :to="`/product-review/${shop.id}`"
             class="group bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] hover:shadow-xl transition-all duration-500 overflow-hidden">
          <!-- 16:9 Shop Photo -->
          <div v-if="shop.shop_photo" class="aspect-[16/9] w-full overflow-hidden bg-[#E7DDCD] dark:bg-[#3F4245]">
            <img :src="`https://api.test.prosrochkapatrol.ru${shop.shop_photo.url}`" 
                 :alt="shop.store_name"
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div v-else class="aspect-[16/9] w-full bg-[#E7DDCD] dark:bg-[#3F4245] flex items-center justify-center">
            <UIcon name="i-heroicons-building-storefront-20-solid" class="w-16 h-16 text-[#A0876E]/40" />
          </div>
          
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <div class="inline-flex items-center gap-2">
                <span class="text-4xl font-black text-[#A0876E] tracking-tight">{{ formatRating(shop.total_score) }}</span>
                <span class="text-sm text-[#3F4245]/50 dark:text-[#E7DDCD]/50">/5</span>
              </div>
              <UIcon name="i-heroicons-check-circle-20-solid" v-if="shop.total_score === 5" class="w-6 h-6 text-[#A0876E]" />
            </div>
            <h3 class="font-bold text-lg mb-2 group-hover:text-[#A0876E] transition-colors duration-300 line-clamp-1">{{ shop.store_name }}</h3>
            <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70 mb-4 flex items-center gap-1 line-clamp-2">
              <UIcon name="i-heroicons-map-pin-20-solid" class="w-4 h-4 text-[#A0876E] flex-shrink-0" />
              {{ shop.address }}
            </p>
            <div class="flex gap-2">
              <span class="text-xs bg-[#E7DDCD] dark:bg-[#3F4245] text-[#3F4245] dark:text-[#E7DDCD] px-3 py-1 rounded-full font-mono">
                {{ formatDate(shop.date_checked) }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- No data state -->
      <div v-else class="text-center py-12 col-span-full">
        <UIcon name="i-heroicons-inbox-20-solid" class="w-16 h-16 text-[#A0876E] mx-auto mb-4" />
        <p class="text-xl font-bold text-[#2B2B2B] dark:text-[#FFFFFF] mb-2">Проверки пока отсутствуют</p>
        <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">Следите за обновлениями в наших каналах</p>
      </div>
    </section>

    <!-- ============ FAQ ============ -->
    <section class="py-24 bg-[#E7DDCD]/30 dark:bg-[#1a1a1a]">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
            FAQ
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            Частые <span class="italic text-[#A0876E]">вопросы</span>
          </h2>
          <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70">Всё, что стоит знать о FreshCheck</p>
        </div>

        <div class="space-y-3">
          <div v-for="(item, i) in faq" :key="i"
               class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] overflow-hidden hover:border-[#A0876E] transition-colors duration-300">
            <button @click="toggleFaq(i)" class="w-full p-6 flex justify-between items-center gap-4 text-left">
              <span class="font-bold text-lg text-[#2B2B2B] dark:text-[#FFFFFF]">{{ item.q }}</span>
              <UIcon :name="openFaq === i ? 'i-heroicons-minus-20-solid' : 'i-heroicons-plus-20-solid'"
                     class="w-6 h-6 text-[#A0876E] flex-shrink-0 transition-transform duration-500" />
            </button>
            <div class="faq-content" :class="{ 'faq-open': openFaq === i }">
              <div class="px-6 pb-6">
                <div class="pt-4 border-t border-[#E7DDCD] dark:border-[#3F4245]">
                  <p class="text-[#3F4245] dark:text-[#E7DDCD]/80 leading-relaxed">{{ item.a }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Link to full FAQ page -->
        <div class="mt-10 text-center">
          <NuxtLink to="/faq" class="inline-flex items-center gap-2 text-[#A0876E] font-bold hover:text-[#8a7358] transition-colors duration-300 text-lg">
            Смотреть все вопросы
            <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ============ PROJECT CONTACTS ============ -->
    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Контакты проекта
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Наши <span class="italic text-[#A0876E]">каналы</span>
        </h2>
        <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl mx-auto">
          Подписывайтесь, чтобы быть в курсе всех новостей и обзоров
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <!-- Telegram -->
        <a href="tg://resolve?domain=prosrochka_patrol" target="_blank"
           class="group p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#2AABEE] hover:shadow-2xl transition-all duration-500">
          <div class="w-16 h-16 bg-[#2AABEE] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <UIcon name="i-simple-icons-telegram" class="w-8 h-8 text-[#FFFFFF]" />
          </div>
          <h3 class="font-bold text-xl mb-2">Telegram</h3>
          <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70 mb-3">@prosrochka_patrol</p>
          <p class="text-xs text-[#3F4245] dark:text-[#E7DDCD]/60">Оперативные новости и обзоры</p>
        </a>

        <!-- VK -->
        <a href="https://vk.com/prosrochka_patrol_astrakhan" target="_blank"
           class="group p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#4C75A3] hover:shadow-2xl transition-all duration-500">
          <div class="w-16 h-16 bg-[#4C75A3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <UIcon name="i-simple-icons-vk" class="w-8 h-8 text-[#FFFFFF]" />
          </div>
          <h3 class="font-bold text-xl mb-2">ВКонтакте</h3>
          <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70 mb-3">prosrochka_patrol_astrakhan</p>
          <p class="text-xs text-[#3F4245] dark:text-[#E7DDCD]/60">Сообщество проекта</p>
        </a>

        <!-- Instagram -->
        <a href="https://instagram.com/freshcheckastra/" target="_blank"
           class="group p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#E4405F] hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
          <div class="w-16 h-16 bg-gradient-to-br from-[#833AB4] via-[#E4405F] to-[#FCAF45] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <UIcon name="i-simple-icons-instagram" class="w-8 h-8 text-[#FFFFFF]" />
          </div>
          <h3 class="font-bold text-xl mb-2">Instagram*</h3>
          <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70 mb-3">@freshcheckastra</p>
          <p class="text-xs text-[#3F4245] dark:text-[#E7DDCD]/60">Визуальный контент</p>
        </a>

        <!-- TikTok -->
        <a href="https://www.tiktok.com/@freshcheckastra" target="_blank"
           class="group p-8 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#000000] hover:shadow-2xl transition-all duration-500">
          <div class="w-16 h-16 bg-[#000000] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <UIcon name="i-simple-icons-tiktok" class="w-8 h-8 text-[#FFFFFF]" />
          </div>
          <h3 class="font-bold text-xl mb-2">TikTok</h3>
          <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70 mb-3">@freshcheckastra</p>
          <p class="text-xs text-[#3F4245] dark:text-[#E7DDCD]/60">Познавательный контент</p>
        </a>
      </div>

      <!-- Legal disclaimers -->
      <div class="mt-12 max-w-4xl mx-auto p-6 bg-[#FEF3C7] dark:bg-[#3F4245]/30 rounded-2xl border border-[#F59E0B]/30">
        <div class="flex items-start gap-3">
          <UIcon name="i-heroicons-exclamation-triangle-20-solid" class="w-6 h-6 text-[#F59E0B] flex-shrink-0 mt-0.5" />
          <div class="space-y-2">
            <p class="text-sm text-[#92400E] dark:text-[#FDE68A] font-semibold">
              *Meta Platforms Inc. признана экстремистской организацией на территории РФ.
            </p>
            <p class="text-sm text-[#92400E] dark:text-[#FDE68A] font-semibold">
              *Instagram заблокирован на территории РФ.
            </p>
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
            <UIcon name="i-heroicons-chat-bubble-left-right-20-solid" class="w-10 h-10 text-[#FFFFFF]" />
          </div>
          <h2 class="text-5xl md:text-6xl font-black text-[#FFFFFF] tracking-tight mb-6 leading-[0.9]">
            Заметили <span class="italic">что-то не то?</span>
          </h2>
          <p class="text-xl text-[#FFFFFF]/90 mb-12 max-w-3xl mx-auto">
            Поделитесь наблюдением — мы заглянем в магазин, поговорим с администрацией и опубликуем честный обзор.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="tg://resolve?domain=RomanTroshinRF" target="_blank"
               class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FFFFFF] text-[#2B2B2B] font-bold text-lg rounded-2xl hover:bg-[#E7DDCD] transition-colors duration-300 shadow-xl">
              <UIcon name="i-simple-icons-telegram" class="w-6 h-6" />
              Telegram
            </a>
            <a href="https://vk.com/romantroshinastra" target="_blank"
               class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#4C75A3] text-[#FFFFFF] font-bold text-lg rounded-2xl hover:bg-[#3d5f85] transition-colors duration-300 shadow-xl">
              <UIcon name="i-simple-icons-vk" class="w-6 h-6" />
              ВКонтакте
            </a>
            <a href="mailto:none@prosrochkapatrol.ru"
               class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#2B2B2B] text-[#FFFFFF] font-bold text-lg rounded-2xl hover:bg-[#1a1a1a] transition-colors duration-300 border border-[#FFFFFF]/20">
              <UIcon name="i-heroicons-envelope-20-solid" class="w-6 h-6" />
              Email
            </a>
          </div>

          <NuxtLink to="/contact" class="inline-flex items-center gap-2 text-[#FFFFFF] font-bold hover:text-[#E7DDCD] transition-colors duration-300 text-lg underline decoration-[#FFFFFF]/40 hover:decoration-[#FFFFFF] underline-offset-4">
            <UIcon name="i-heroicons-document-text-20-solid" class="w-5 h-5" />
            Отправить жалобу с сайта
          </NuxtLink>

          <div class="mt-10 space-y-2">
            <p class="text-sm text-[#FFFFFF]/70">
              Telegram: <span class="font-semibold">@RomanTroshinRF</span> •
              VK: <span class="font-semibold">vk.com/romantroshinastra</span>
            </p>
            <p class="text-sm text-[#FFFFFF]/70">
              Email: <span class="font-semibold">none@prosrochkapatrol.ru</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const latestShops = ref<any[]>([])
const loadingShops = ref(true)
const shopsError = ref(false)
const newsUpdates = ref<any[]>([])
const loadingNews = ref(true)
const newsError = ref(false)
const openFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}

const processSteps = [
  { icon: 'i-heroicons-user-plus-20-solid', title: 'Визит', desc: 'Заходим в магазин как обычные покупатели. При возможности представляемся администрации.' },
  { icon: 'i-heroicons-camera-20-solid', title: 'Наблюдение', desc: 'Осматриваем полки, фиксируем сроки годности и условия хранения. Делаем фото для отчёта.' },
  { icon: 'i-heroicons-chat-bubble-20-solid', title: 'Диалог', desc: 'Делимся наблюдениями с сотрудниками, даём рекомендации. В большинстве случаев всё решается на месте.' },
  { icon: 'i-heroicons-globe-alt-20-solid', title: 'Обзор', desc: 'В течение 1–3 дней публикуем открытый отчёт с фото и рейтингом — для всех жителей Астрахани.' }
]

const principles = [
  { icon: 'i-heroicons-scale-20-solid', title: 'Законность', desc: 'Строго в рамках Конституции РФ' },
  { icon: 'i-heroicons-check-circle-20-solid', title: 'Честность', desc: 'Только реальные наблюдения' },
  { icon: 'i-heroicons-eye-20-solid', title: 'Прозрачность', desc: 'Все документы открыты' },
  { icon: 'i-heroicons-hand-raised-20-solid', title: 'Безопасность', desc: 'Здоровье семей в центре' },
  { icon: 'i-heroicons-chat-bubble-left-20-solid', title: 'Партнёрство', desc: 'Диалог, а не противостояние' },
  { icon: 'i-heroicons-arrow-path-20-solid', title: 'Соразмерность', desc: 'Реакция = значимости' },
  { icon: 'i-heroicons-user-20-solid', title: 'Уважение', desc: 'Не публикуем лица людей' },
  { icon: 'i-heroicons-bolt-20-solid', title: 'Независимость', desc: 'Без конфликтов интересов' },
  { icon: 'i-heroicons-chat-bubble-left-right-20-solid', title: 'Диалог', desc: 'Готовы исправлять ошибки' },
  { icon: 'i-heroicons-globe-alt-20-solid', title: 'Общественная польза', desc: 'Среда безопасных продуктов' }
]

const testimonials = [
  { text: 'Очень приятно, что кто-то реально следит за качеством. Убрали просроченные грибы и помятые банки в соседнем магазине. Спасибо!', author: 'Ирина К.', location: 'Кировский район' },
  { text: 'Поделилась наблюдением про просроченный йогурт днём. К вечеру всё убрали и даже пост сделали. Теперь доверяю этому магазину намного больше.', author: 'Мария Л.', location: 'Советский район' },
  { text: 'Как папа с годовалым малышом скажу: спасибо, что обращаете внимание на молочку и детское питание. Для нас это вопрос здоровья сына.', author: 'Андрей М.', location: 'Ленинский район' }
]

const faq = [
  { q: 'Вы из Роспотребнадзора или полиции?', a: 'Нет. FreshCheck — независимая гражданская инициатива жителей Астрахани. Мы не являемся государственным органом, не выдаём предписаний и не выписываем штрафов. Мы действуем как обычные покупатели, реализуя конституционное право на информацию (ст. 29 Конституции РФ).' },
  { q: 'Законно ли снимать в магазине?', a: 'Да. Постановление Правительства РФ № 2463 (п. 2) прямо подтверждает право потребителей фотографировать товары и ценники в торговых залах. Съёмка в местах свободного доступа также разрешена ст. 152.1 ГК РФ. Мы снимаем только полки, товары и ценники — лица и голоса людей мы не публикуем.' },
  { q: 'Вы штрафуете магазины или заставляете платить?', a: 'Нет. FreshCheck — некоммерческий волонтёрский проект. Мы не выписываем штрафов, не составляем актов, не берём деньги с магазинов за визиты, рейтинги или наклейки. Наша цель — диалог и рекомендации. В 98% случаев недочёты устраняются на месте, без эскалации.' },
  { q: 'Кто вам платит? Вы независимы?', a: 'Никто. Участники работают добровольно, мы не принимаем финансирования, которое могло бы повлиять на объективность. Рейтинги не продаются и не покупаются — знак «Одобрено FreshCheck» зарабатывается реальным качеством магазина.' },
  { q: 'Что если магазин не отреагирует на ваши рекомендации?', a: 'Мы всегда начинаем с диалога. Если нарушения носят систематический характер и администрация не реагирует после нескольких визитов — мы можем помочь жителям оформить официальное обращение в Роспотребнадзор с нашей фотофиксацией как доказательной базой.' }
]

const fetchLatestShops = async () => {
  try {
    loadingShops.value = true
    shopsError.value = false
    const response = await $fetch('https://api.test.prosrochkapatrol.ru/api/shops', {
      query: { limit: 4, sort: '-date_checked', depth: 2, draft: false }
    })
    if (response && (response as any).docs && Array.isArray((response as any).docs) && (response as any).docs.length > 0) {
      latestShops.value = (response as any).docs
    } else {
      latestShops.value = []
    }
  } catch (error) {
    console.error('Error fetching shops:', error)
    shopsError.value = true
    latestShops.value = []
  } finally {
    loadingShops.value = false
  }
}

const fetchNews = async () => {
  try {
    loadingNews.value = true
    newsError.value = false
    const response = await $fetch('https://api.test.prosrochkapatrol.ru/api/posts', {
      query: { limit: 3, sort: '-admin_panel.published_at', depth: 2, draft: false, 'admin_panel.status': 'published' }
    })
    if (response && (response as any).docs && Array.isArray((response as any).docs) && (response as any).docs.length > 0) {
      newsUpdates.value = (response as any).docs
    } else {
      newsUpdates.value = []
    }
  } catch (error) {
    console.error('Error fetching news:', error)
    newsError.value = true
    newsUpdates.value = []
  } finally {
    loadingNews.value = false
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

const extractTextFromLexical = (lexicalData: any): string => {
  if (!lexicalData || !lexicalData.root || !lexicalData.root.children) return ''
  
  const extractText = (node: any): string => {
    if (node.type === 'text') return node.text || ''
    if (node.children) return node.children.map(extractText).join(' ')
    if (node.type === 'linebreak') return '\n'
    return ''
  }
  
  return lexicalData.root.children.map(extractText).join(' ').slice(0, 150) + '...'
}

const scrollToWhat = () => {
  const element = document.getElementById('what')
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  fetchLatestShops()
  fetchNews()
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.faq-content {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.4s ease;
}

.faq-content.faq-open {
  max-height: 500px;
  opacity: 1;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>