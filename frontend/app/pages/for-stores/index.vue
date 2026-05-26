<template>
  <div class="min-h-screen bg-[#FFFFFF] dark:bg-[#1a1a1a] text-[#2B2B2B] dark:text-[#E7DDCD] font-sans">
    
    <section class="min-h-[60vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-40 dark:opacity-20">
        <div class="absolute top-20 right-10 w-96 h-96 bg-[#E7DDCD] rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#A0876E]/20 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-5xl mx-auto text-center relative z-10">
        <div class="mb-8">
          <span class="inline-flex items-center gap-2 px-6 py-3 bg-[#E7DDCD] dark:bg-[#2B2B2B] text-[#3F4245] dark:text-[#E7DDCD] rounded-full text-sm font-bold uppercase tracking-widest border border-[#A0876E]/30">
            Для руководителей и сотрудников магазинов
          </span>
        </div>
        
        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 max-w-4xl mx-auto text-[#2B2B2B] dark:text-[#FFFFFF]">
          Общественный мониторинг<br/>
          <span class="text-[#A0876E] italic">для магазинов Астрахани</span>
        </h1>
        
        <p class="text-lg md:text-xl text-[#3F4245] dark:text-[#E7DDCD]/80 max-w-2xl mx-auto leading-relaxed mb-12">
          Почему это законно и выгодно вам. Общественный мониторинг без штрафов — только диалог и помощь.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#how-visit" class="group px-8 py-4 bg-[#2B2B2B] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#2B2B2B] rounded-xl font-bold text-lg hover:bg-[#3F4245] dark:hover:bg-[#E7DDCD] transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#2B2B2B]/20">
            <UIcon name="i-heroicons-arrow-down-20-solid" class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
            Как проходит визит
          </a>
          <a href="#contacts" class="px-8 py-4 bg-[#A0876E] hover:bg-[#8a7358] text-[#FFFFFF] rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg shadow-[#A0876E]/30 flex items-center justify-center gap-2">
            <UIcon name="i-heroicons-chat-bubble-left-right-20-solid" class="w-5 h-5" />
            Связаться с нами
          </a>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          О проекте
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Кто мы и <span class="italic text-[#A0876E]">зачем приходим</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="space-y-6">
          <p class="text-lg text-[#3F4245] dark:text-[#E7DDCD]/80 leading-relaxed">
            <span class="font-bold text-[#2B2B2B] dark:text-[#FFFFFF]">FreshCheck</span> — независимая гражданская инициатива жителей Астрахани, действующая с августа 2025 года.
          </p>
          <p class="text-lg text-[#3F4245] dark:text-[#E7DDCD]/80 leading-relaxed">
            Мы обращаем внимание на <span class="font-bold">качество товаров</span>: просрочка, помятые консервы, продукты с плесенью, вскрытые упаковки, повреждённые этикетки и другие дефекты. Оперативно информируем администрацию магазина.
          </p>
          <div class="bg-[#E7DDCD]/20 dark:bg-[#3F4245]/20 rounded-2xl p-6 border border-[#A0876E]/20">
            <h3 class="font-bold text-xl mb-3 flex items-center gap-2"><UIcon name="i-heroicons-check-circle-20-solid" class="w-6 h-6 text-[#A0876E]" /> Наши цели</h3>
            <ul class="space-y-2 text-[#3F4245] dark:text-[#E7DDCD]/80">
              <li class="flex gap-2"><UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5 text-[#A0876E] shrink-0 mt-0.5" /> Защитить покупателей от некачественных товаров</li>
              <li class="flex gap-2"><UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5 text-[#A0876E] shrink-0 mt-0.5" /> Помочь магазину оперативно выявить и устранить любые дефекты товаров</li>
              <li class="flex gap-2"><UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5 text-[#A0876E] shrink-0 mt-0.5" /> Способствовать формированию культуры, при которой некачественные товары не попадают к покупателю</li>
            </ul>
          </div>
        </div>
        <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl p-8 border border-[#E7DDCD] dark:border-[#3F4245] shadow-sm">
          <h3 class="font-bold text-xl mb-4 flex items-center gap-2"><UIcon name="i-heroicons-x-circle-20-solid" class="w-6 h-6 text-[#A0876E]" /> Мы НЕ делаем</h3>
          <ul class="space-y-3">
            <li class="flex gap-2"><UIcon name="i-heroicons-minus-20-solid" class="w-5 h-5 text-[#A0876E] shrink-0 mt-0.5" /> Не выписываем штрафы</li>
            <li class="flex gap-2"><UIcon name="i-heroicons-minus-20-solid" class="w-5 h-5 text-[#A0876E] shrink-0 mt-0.5" /> Не составляем официальные протоколы и акты</li>
            <li class="flex gap-2"><UIcon name="i-heroicons-minus-20-solid" class="w-5 h-5 text-[#A0876E] shrink-0 mt-0.5" /> Не имеем права закрывать магазин</li>
            <li class="flex gap-2"><UIcon name="i-heroicons-minus-20-solid" class="w-5 h-5 text-[#A0876E] shrink-0 mt-0.5" /> Не являемся представителями государственных органов</li>
            <li class="flex gap-2"><UIcon name="i-heroicons-minus-20-solid" class="w-5 h-5 text-[#A0876E] shrink-0 mt-0.5" /> Не передаём материалы в Роспотребнадзор без предварительного диалога</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-[#E7DDCD]/30 dark:bg-[#1a1a1a] py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
            Правовые основания
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Почему наша работа <span class="italic text-[#A0876E]">полностью законна</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl p-8 border border-[#E7DDCD] dark:border-[#3F4245]">
            <div class="w-14 h-14 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-2xl flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-camera-20-solid" class="w-7 h-7 text-[#A0876E]" />
            </div>
            <h3 class="text-2xl font-bold mb-4">Что мы можем фиксировать (фото/видео)</h3>
            <ul class="space-y-4 text-[#3F4245] dark:text-[#E7DDCD]/80">
              <li class="flex gap-3"><UIcon name="i-heroicons-check-circle-20-solid" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> <span><span class="font-bold">Статья 29 Конституции РФ</span> — право свободно искать и получать информацию.</span></li>
              <li class="flex gap-3"><UIcon name="i-heroicons-check-circle-20-solid" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> <span><span class="font-bold">Постановление № 2463 (п. 2)</span> — запрет ограничивать потребителей в фотографировании товара.</span></li>
              <li class="flex gap-3"><UIcon name="i-heroicons-check-circle-20-solid" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> <span><span class="font-bold">Статья 152.1 ГК РФ</span> — съёмка в месте открытого доступа без согласия, если лицо не главный объект.</span></li>
            </ul>
            <p class="mt-6 text-sm text-[#A0876E]">Мы всегда замазываем лица людей, случайно попавших в кадр, перед публикацией.</p>
          </div>

          <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl p-8 border border-[#E7DDCD] dark:border-[#3F4245]">
            <div class="w-14 h-14 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-2xl flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-scale-20-solid" class="w-7 h-7 text-[#A0876E]" />
            </div>
            <h3 class="text-2xl font-bold mb-4">Почему общественный мониторинг законен</h3>
            <ul class="space-y-4 text-[#3F4245] dark:text-[#E7DDCD]/80">
              <li class="flex gap-3"><UIcon name="i-heroicons-check-circle-20-solid" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> <span><span class="font-bold">Статья 29 Конституции РФ</span> — право распространять информацию любым законным способом.</span></li>
              <li class="flex gap-3"><UIcon name="i-heroicons-check-circle-20-solid" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> <span><span class="font-bold">Закон о защите прав потребителей</span> (ст. 7 — безопасность товара, ст. 8–10 — право на информацию, ст. 18 — возврат некачественного товара).</span></li>
              <li class="flex gap-3"><UIcon name="i-heroicons-check-circle-20-solid" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> <span>Никакого специального разрешения не требуется — мы обычные покупатели.</span></li>
            </ul>
            <p class="mt-6 text-sm text-[#A0876E]">Наши внутренние документы (Публичная политика, Положение о деятельности, Декларация принципов) открыты и не налагают на вас обязательств.</p>
          </div>
        </div>

        <div class="mt-12 p-8 bg-[#E7DDCD]/20 dark:bg-[#3F4245]/20 rounded-3xl border border-[#A0876E]/30">
          <div class="flex flex-col md:flex-row gap-6 items-start">
            <div class="w-12 h-12 bg-[#A0876E] rounded-xl flex items-center justify-center flex-shrink-0">
              <UIcon name="i-heroicons-document-arrow-down-20-solid" class="w-6 h-6 text-white" />
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-xl mb-2">Наши официальные документы (для скачивания)</h3>
              <div class="flex flex-wrap gap-4">
                <a href="/docs/FC-PP-2026-01_Publichnaya-politika.pdf" class="inline-flex items-center gap-2 text-[#A0876E] font-bold hover:underline">
                  <UIcon name="i-heroicons-document-arrow-down-20-solid" class="w-5 h-5" />
                  Публичная политика (FC-PP-2026-01)
                </a>
                <a href="/docs/FC-PD-2026-02_Polozhenie.pdf" class="inline-flex items-center gap-2 text-[#A0876E] font-bold hover:underline">
                  <UIcon name="i-heroicons-document-arrow-down-20-solid" class="w-5 h-5" />
                  Положение о деятельности (FC-PD-2026-02)
                </a>
                <a href="/docs/FC-DP-2026-03_Deklaraciya.pdf" class="inline-flex items-center gap-2 text-[#A0876E] font-bold hover:underline">
                  <UIcon name="i-heroicons-document-arrow-down-20-solid" class="w-5 h-5" />
                  Декларация принципов (FC-DP-2026-03)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="how-visit" class="max-w-7xl mx-auto px-6 py-24">
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Процесс
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Как проходит <span class="italic text-[#A0876E]">наш визит</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="text-center group">
          <div class="w-20 h-20 bg-[#A0876E] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-4xl font-black text-[#FFFFFF]">1</span>
          </div>
          <h3 class="font-bold text-xl mb-2">Заходим как обычные покупатели</h3>
          <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">Без спецодежды и официальных предписаний.</p>
        </div>
        <div class="text-center group">
          <div class="w-20 h-20 bg-[#A0876E] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-4xl font-black text-[#FFFFFF]">2</span>
          </div>
          <h3 class="font-bold text-xl mb-2">Представляемся администрации</h3>
          <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">«Здравствуйте, я участник FreshCheck, фиксирую информацию о товарах. Не представитель госорганов.»</p>
        </div>
        <div class="text-center group">
          <div class="w-20 h-20 bg-[#A0876E] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-4xl font-black text-[#FFFFFF]">3</span>
          </div>
          <h3 class="font-bold text-xl mb-2">Осматриваем зал и фиксируем</h3>
          <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">Сроки годности, целостность упаковки, плесень, повреждения, условия хранения. Фото только товаров и полок.</p>
        </div>
        <div class="text-center group">
          <div class="w-20 h-20 bg-[#A0876E] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-4xl font-black text-[#FFFFFF]">4</span>
          </div>
          <h3 class="font-bold text-xl mb-2">Информируем и публикуем</h3>
          <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">Сообщаем о нарушениях, даём рекомендации. Отчёт с рейтингом выходит через 1–3 дня.</p>
        </div>
      </div>
    </section>

    <section class="bg-[#E7DDCD]/30 dark:bg-[#1a1a1a] py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
            Конфиденциальность
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Что мы публикуем, а что <span class="italic text-[#A0876E]">никогда</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-8 border border-green-200 dark:border-green-800">
            <h3 class="font-bold text-2xl mb-4 flex items-center gap-2 text-green-700 dark:text-green-400"><UIcon name="i-heroicons-check-circle-20-solid" class="w-7 h-7" /> Публикуем</h3>
            <ul class="space-y-3">
              <li class="flex gap-2"><UIcon name="i-heroicons-check-20-solid" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Фото товаров, полок и ценников</li>
              <li class="flex gap-2"><UIcon name="i-heroicons-check-20-solid" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Текстовый отчёт с рейтингом 1–5</li>
              <li class="flex gap-2"><UIcon name="i-heroicons-check-20-solid" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Фото нарушений (с замазанными лицами)</li>
            </ul>
          </div>
          <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-8 border border-red-200 dark:border-red-800">
            <h3 class="font-bold text-2xl mb-4 flex items-center gap-2 text-red-700 dark:text-red-400"><UIcon name="i-heroicons-x-circle-20-solid" class="w-7 h-7" /> Никогда не публикуем</h3>
            <ul class="space-y-3">
              <li class="flex gap-2"><UIcon name="i-heroicons-x-mark-20-solid" class="w-5 h-5 text-red-600 shrink-0 mt-0.5" /> Полное видео визита</li>
              <li class="flex gap-2"><UIcon name="i-heroicons-x-mark-20-solid" class="w-5 h-5 text-red-600 shrink-0 mt-0.5" /> Голоса и лица сотрудников</li>
              <li class="flex gap-2"><UIcon name="i-heroicons-x-mark-20-solid" class="w-5 h-5 text-red-600 shrink-0 mt-0.5" /> Фото с видимыми лицами людей</li>
            </ul>
          </div>
        </div>
        <p class="text-center text-sm text-[#3F4245] dark:text-[#E7DDCD]/60 mt-8">Служебная видеозапись хранится в зашифрованном виде не более 3 месяцев.</p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Идентификация
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Как отличить <span class="italic text-[#A0876E]">настоящего участника</span>
        </h2>
        <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl mx-auto">
          Каждый участник проекта имеет персональный бейдж с уникальным кодом
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl p-8 border border-[#E7DDCD] dark:border-[#3F4245]">
          <h3 class="text-2xl font-bold mb-4">Формат кода бейджа</h3>
          <code class="block bg-[#E7DDCD] dark:bg-[#3F4245] p-4 rounded-xl font-mono text-lg mb-6">#[ТИП][НОМЕР]-AST[БУКВА]</code>
          <ul class="space-y-3 text-[#3F4245] dark:text-[#E7DDCD]/80">
            <li><span class="font-bold">#P</span> — Проверяющий (проводит мониторинг)</li>
            <li><span class="font-bold">#YOU</span> — Блогер (ведёт видеосъёмку для каналов)</li>
            <li><span class="font-bold">НОМЕР</span> — уникальный номер (01, 02, …)</li>
            <li><span class="font-bold">AST</span> — код Астрахани</li>
            <li><span class="font-bold">БУКВА (опционально)</span> — именной суффикс (R, D, RK, A)</li>
          </ul>
          <div class="mt-6 p-4 bg-[#E7DDCD]/30 dark:bg-[#3F4245]/30 rounded-xl">
            <p class="text-sm font-mono">Примеры: #P01-ASTR (Роман Трошин), #P04-AST (неперсональный), #YOU1-ASTA (блогер Артём)</p>
          </div>
        </div>
        <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl p-8 border border-[#E7DDCD] dark:border-[#3F4245]">
          <h3 class="text-2xl font-bold mb-4">Проверка подлинности</h3>
          <p class="mb-4">Актуальный реестр бейджей публикуется на сайте проекта:</p>
          <a href="/badges" target="_blank" class="inline-flex items-center gap-2 text-[#A0876E] font-bold hover:underline break-all">
            /badges
            <UIcon name="i-heroicons-arrow-top-right-on-square-20-solid" class="w-4 h-4" />
          </a>
          <div class="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <p class="text-sm font-semibold text-red-800 dark:text-red-300">Признаки поддельного бейджа:</p>
            <ul class="list-disc list-inside text-sm text-red-700 dark:text-red-300 mt-2 space-y-1">
              <li>Код не содержит # или -AST</li>
              <li>Номера нет в реестре на сайте</li>
              <li>Есть символика госорганов</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#E7DDCD]/30 dark:bg-[#1a1a1a] py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
            Выгода
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Что получает магазин от <span class="italic text-[#A0876E]">сотрудничества</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 text-center hover:shadow-xl transition-all">
            <div class="w-16 h-16 bg-[#A0876E] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-clock-20-solid" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-bold text-lg mb-2">Раннее выявление</h3>
            <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">Убрать некачественные товары до того, как их заметит покупатель</p>
          </div>
          <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 text-center hover:shadow-xl transition-all">
            <div class="w-16 h-16 bg-[#A0876E] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-eye-20-solid" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-bold text-lg mb-2">Бесплатный аудит</h3>
            <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">Независимый взгляд со стороны на свои полки</p>
          </div>
          <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 text-center hover:shadow-xl transition-all">
            <div class="w-16 h-16 bg-[#A0876E] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-star-20-solid" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-bold text-lg mb-2">Высокий рейтинг</h3>
            <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">Шанс получить 5/5 и наклейку «Проверено FreshCheck»</p>
          </div>
          <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 text-center hover:shadow-xl transition-all">
            <div class="w-16 h-16 bg-[#A0876E] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-shield-check-20-solid" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-bold text-lg mb-2">Аргументированная защита</h3>
            <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">Вы получаете аргументированную защиту перед покупателем: «магазин уже прошёл независимый контроль»</p>
          </div>
        </div>
        <p class="text-center text-lg text-[#3F4245] dark:text-[#E7DDCD]/80 mt-12 max-w-3xl mx-auto">
          Наш главный принцип: <span class="font-bold">помощь, а не наказание</span>. Обращение в контролирующие органы — крайняя мера при систематических и грубых нарушениях после нескольких предупреждений.
        </p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2B2B2B] via-[#3F4245] to-[#2B2B2B] p-12 text-[#FFFFFF]">
        <div class="absolute top-0 right-0 w-96 h-96 bg-[#A0876E]/20 rounded-full blur-3xl"></div>
        <div class="relative z-10 text-center max-w-3xl mx-auto">
          <div class="inline-block px-4 py-2 bg-[#A0876E] rounded-full text-xs font-bold uppercase tracking-widest text-white mb-6">
            Открыты к диалогу
          </div>
          <h2 class="text-4xl md:text-5xl font-black mb-6">Мы готовы учитывать особенности вашего магазина</h2>
          <p class="text-lg text-[#E7DDCD]/80 mb-8">Предварительное уведомление о визитах, фиксированные дни проверок, любые другие предложения — обсуждаемо.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm inline-flex items-center gap-2">
              <UIcon name="i-heroicons-calendar-20-solid" class="w-4 h-4" />
              Предупреждение заранее
            </div>
            <div class="bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm inline-flex items-center gap-2">
              <UIcon name="i-heroicons-user-group-20-solid" class="w-4 h-4" />
              Личное знакомство с администрацией
            </div>
            <div class="bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm inline-flex items-center gap-2">
              <UIcon name="i-heroicons-pencil-20-solid" class="w-4 h-4" />
              Корректировка формы представления
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-[#E7DDCD]/30 dark:bg-[#1a1a1a]">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
            Частые вопросы
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            Всё, что вы хотели <span class="italic text-[#A0876E]">спросить</span>
          </h2>
          <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl mx-auto">
            Отвечаем честно и на основании законов
          </p>
        </div>

        <div class="space-y-3">
          <div v-for="(item, i) in adminFaq" :key="i"
               class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] overflow-hidden hover:border-[#A0876E] transition-colors duration-300">
            <button @click="toggleAdminFaq(i)" class="w-full p-6 flex justify-between items-center gap-4 text-left">
              <span class="font-bold text-lg text-[#2B2B2B] dark:text-[#FFFFFF]">{{ item.q }}</span>
              <UIcon :name="openAdminFaq === i ? 'i-heroicons-minus-20-solid' : 'i-heroicons-plus-20-solid'"
                     class="w-6 h-6 text-[#A0876E] flex-shrink-0 transition-transform duration-500" />
            </button>
            <div class="faq-content" :class="{ 'faq-open': openAdminFaq === i }">
              <div class="px-6 pb-6">
                <div class="pt-4 border-t border-[#E7DDCD] dark:border-[#3F4245]">
                  <p class="text-[#3F4245] dark:text-[#E7DDCD]/80 leading-relaxed">{{ item.a }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contacts" class="bg-[#E7DDCD]/30 dark:bg-[#1a1a1a] py-24">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="inline-block px-4 py-2 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Связь
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Остались вопросы? <span class="italic text-[#A0876E]">Пишите</span>
        </h2>
        <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-2xl mx-auto mb-12">
          Основатель проекта отвечает быстро и по-честному
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a href="mailto:none@prosrochkapatrol.ru" class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all group">
            <UIcon name="i-heroicons-envelope-20-solid" class="w-10 h-10 text-[#A0876E] mx-auto mb-3" />
            <div class="font-bold">Email</div>
            <div class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">none@prosrochkapatrol.ru</div>
          </a>
          <a href="tg://resolve?domain=RomanTroshinRF" target="_blank" class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all group">
            <UIcon name="i-simple-icons-telegram" class="w-10 h-10 text-[#A0876E] mx-auto mb-3" />
            <div class="font-bold">Telegram</div>
            <div class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">@RomanTroshinRF</div>
          </a>
          <a href="tel:89885951161" class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all group">
            <UIcon name="i-heroicons-phone-20-solid" class="w-10 h-10 text-[#A0876E] mx-auto mb-3" />
            <div class="font-bold">Телефон</div>
            <div class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">8 (988) 595-11-61</div>
          </a>
        </div>
        <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/60 mt-8">Часы ответа: 9:00 – 20:00 по Самаре</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const openAdminFaq = ref<number | null>(null)

const toggleAdminFaq = (index: number) => {
  openAdminFaq.value = openAdminFaq.value === index ? null : index
}

const adminFaq = [
  { 
    q: 'На каком основании вы вообще ходите по магазинам и проверяете товары?', 
    a: 'Мы действуем как обычные покупатели. Основания: 1) Статья 29 Конституции РФ — право искать и получать информацию. 2) Постановление Правительства № 2463 (п. 2) — запрет ограничивать потребителей в фотографировании товара. 3) Закон о защите прав потребителей (ст. 7, 8-10, 18). Никакого специального разрешения не требуется.' 
  },
  { 
    q: 'Может ли магазин запретить мне снимать?', 
    a: 'Нет. Постановление Правительства № 2463 (п. 2) прямо запрещает ограничивать потребителей в фотографировании товаров и ценников. Вы вправе снимать, но мы рекомендуем делать это вежливо, не мешая работе магазина. Если сотрудник препятствует — напомните ему об этом пункте. В случае агрессии вызывайте полицию — защита своих прав законна.' 
  },
  { 
    q: 'Что делать, если участник FreshCheck ведёт себя некорректно?', 
    a: 'Сообщите нам. Мы строго следим за соблюдением наших внутренних документов. Свяжитесь с основателем проекта: Telegram @RomanTroshinRF, телефон 8 (988) 595-11-61. Мы разберём ситуацию, при необходимости извинимся и примем меры к участнику. Каждый участник подписывает обязательство следовать нашим принципам (уважение, законность, диалог).' 
  },
  { 
    q: 'Вы имеете право требовать что-то от администрации магазина?', 
    a: 'Нет. Мы не имеем права отдавать приказы или требовать. Мы только информируем, рекомендуем и предлагаем. В 98% случаев администрация идёт навстречу, потому что заинтересована в качестве. Принуждение — прерогатива госорганов.' 
  },
  { 
    q: 'Что будет, если магазин откажется общаться или не исправит недостатки?', 
    a: 'Мы не применяем санкций. Публикуем честный отчёт с рейтингом, где указываем, что магазин не пошёл на контакт или не устранил недочёты. При систематических грубых нарушениях (три+ визита с 10+ единицами просрочки) переходим к доказательной закупке и помогаем жителям составить обращение в Роспотребнадзор.' 
  },
  { 
    q: 'Вы из Роспотребнадзора или полиции?', 
    a: 'Нет. FreshCheck — независимая гражданская инициатива. Мы не являемся государственным органом, не выдаём предписаний и не выписываем штрафов. Мы обычные жители Астрахани.' 
  },
  { 
    q: 'Законно ли снимать в магазине?', 
    a: 'Да. Постановление № 2463 (п. 2) подтверждает право фотографировать товары и ценники. Ст. 152.1 ГК РФ разрешает съёмку в местах открытого доступа без согласия, если человек не главный объект. Мы всегда замазываем лица.' 
  },
  { 
    q: 'Вы штрафуете магазины или берёте деньги?', 
    a: 'Нет. FreshCheck — некоммерческий волонтёрский проект. Всё бесплатно.' 
  },
  { 
    q: 'Кто вам платит? Вы независимы?', 
    a: 'Никто. Участники работают добровольно. Рейтинги не продаются и не покупаются. Проект не зарегистрирован как юрлицо.' 
  }
]
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
</style>