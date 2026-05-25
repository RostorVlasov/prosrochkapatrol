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
          Проект FreshCheck — независимая гражданская инициатива. Рассказываем, на каком основании мы работаем, как проходят визиты и что даёт сотрудничество.
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
            Мы обращаем внимание на нарушения сроков годности и условий хранения товаров и оперативно информируем администрацию магазина.
          </p>
          <div class="bg-[#E7DDCD]/20 dark:bg-[#3F4245]/20 rounded-2xl p-6 border border-[#A0876E]/20">
            <h3 class="font-bold text-xl mb-3 flex items-center gap-2"><UIcon name="i-heroicons-check-circle-20-solid" class="w-6 h-6 text-[#A0876E]" /> Наши цели</h3>
            <ul class="space-y-2 text-[#3F4245] dark:text-[#E7DDCD]/80">
              <li class="flex gap-2"><UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5 text-[#A0876E] shrink-0 mt-0.5" /> Защитить покупателей от просроченных и потенциально опасных товаров</li>
              <li class="flex gap-2"><UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5 text-[#A0876E] shrink-0 mt-0.5" /> Помочь магазину оперативно выявить и устранить нарушения</li>
              <li class="flex gap-2"><UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5 text-[#A0876E] shrink-0 mt-0.5" /> Способствовать формированию культуры, при которой просрочка на полке — исключение</li>
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
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-[#E7DDCD]/30 dark:bg-[#1a1a1a] py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
            Законность
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            На каком основании мы ведём <span class="italic text-[#A0876E]">фото- и видеосъёмку</span>
          </h2>
          <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl mx-auto">
            Мы фиксируем только товары, полки, ценники, витрины — в месте свободного доступа
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 border border-[#E7DDCD] dark:border-[#3F4245]">
            <div class="w-12 h-12 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-xl flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-document-text-20-solid" class="w-6 h-6 text-[#A0876E]" />
            </div>
            <h3 class="font-bold text-lg mb-2">Статья 29 Конституции РФ</h3>
            <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">Каждый имеет право свободно искать, получать, передавать, производить и распространять информацию любым законным способом.</p>
          </div>
          <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 border border-[#E7DDCD] dark:border-[#3F4245]">
            <div class="w-12 h-12 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-xl flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-document-text-20-solid" class="w-6 h-6 text-[#A0876E]" />
            </div>
            <h3 class="font-bold text-lg mb-2">Постановление № 2463 (п. 2)</h3>
            <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">На торговых объектах не допускается ограничение прав потребителей на поиск и получение информации, в том числе путём фотографирования товара.</p>
          </div>
          <div class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 border border-[#E7DDCD] dark:border-[#3F4245]">
            <div class="w-12 h-12 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-xl flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-document-text-20-solid" class="w-6 h-6 text-[#A0876E]" />
            </div>
            <h3 class="font-bold text-lg mb-2">Статья 152.1 ГК РФ</h3>
            <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">Согласие на обнародование изображения не требуется, если съёмка в месте открытого доступа и человек не является главным объектом.</p>
          </div>
        </div>
        <p class="text-center text-sm text-[#3F4245] dark:text-[#E7DDCD]/60 mt-8">Мы всегда замазываем лица людей, случайно попавших в кадр, перед публикацией.</p>
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
          <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">Короткая формула (20–40 секунд): «Здравствуйте, я участник проекта FreshCheck, фиксирую информацию о товарах. Не представитель госорганов.»</p>
        </div>
        <div class="text-center group">
          <div class="w-20 h-20 bg-[#A0876E] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-4xl font-black text-[#FFFFFF]">3</span>
          </div>
          <h3 class="font-bold text-xl mb-2">Осматриваем зал и фиксируем</h3>
          <p class="text-[#3F4245] dark:text-[#E7DDCD]/70">Сроки годности, температура, условия хранения. Фото только товаров и полок.</p>
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
        <p class="text-center text-sm text-[#3F4245] dark:text-[#E7DDCD]/60 mt-8">Служебная видеозапись хранится в зашифрованном виде не более 3 месяцев и используется только для защиты в спорных ситуациях.</p>
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
          <a href="https://prosrochkapatrol.ru/беиджи/" target="_blank" class="inline-flex items-center gap-2 text-[#A0876E] font-bold hover:underline break-all">
            https://prosrochkapatrol.ru/беиджи/
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
            <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">Убрать просрочку до того, как её купит покупатель</p>
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
              <UIcon name="i-heroicons-document-check-20-solid" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-bold text-lg mb-2">Снижение жалоб</h3>
            <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">Меньше обращений покупателей в Роспотребнадзор</p>
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
            <div class="bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">📅 Предупреждение заранее</div>
            <div class="bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">🤝 Личное знакомство с администрацией</div>
            <div class="bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">📝 Корректировка формы представления</div>
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
          <a href="https://max.ru" class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all group">
            <UIcon name="i-heroicons-phone-20-solid" class="w-10 h-10 text-[#A0876E] mx-auto mb-3" />
            <div class="font-bold">Мессенджер Max</div>
            <div class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">+7 917 176 6746</div>
          </a>
        </div>
        <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/60 mt-8">Часы ответа: 9:00 – 20:00 по Самаре</p>
      </div>
    </section>
  </div>
</template>