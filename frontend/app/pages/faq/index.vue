<template>
  <div class="min-h-screen bg-[#FFFFFF] dark:bg-[#1a1a1a] text-[#2B2B2B] dark:text-[#E7DDCD] font-sans">
    
    <section class="min-h-[40vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-40 dark:opacity-20">
        <div class="absolute top-20 right-10 w-96 h-96 bg-[#E7DDCD] rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#A0876E]/20 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-4xl mx-auto text-center relative z-10">
        <div class="mb-8">
          <span class="inline-flex items-center gap-2 px-6 py-3 bg-[#E7DDCD] dark:bg-[#2B2B2B] text-[#3F4245] dark:text-[#E7DDCD] rounded-full text-sm font-bold uppercase tracking-widest border border-[#A0876E]/30">
            Часто задаваемые вопросы
          </span>
        </div>
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6 text-[#2B2B2B] dark:text-[#FFFFFF]">
          Всё, что вы хотели <span class="text-[#A0876E] italic">спросить</span>
        </h1>
        <p class="text-xl md:text-2xl text-[#3F4245] dark:text-[#E7DDCD]/80 max-w-3xl mx-auto leading-relaxed">
          Ответы на вопросы о проекте FreshCheck, общественном мониторинге, правах потребителей и взаимодействии с магазинами.
        </p>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-6 py-16">
      <div class="space-y-12">
        
        <!-- Категория 1: О проекте и правовом статусе -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-[#A0876E] rounded-xl flex items-center justify-center">
              <UIcon name="i-heroicons-information-circle-20-solid" class="w-6 h-6 text-white" />
            </div>
            <h2 class="text-2xl md:text-3xl font-bold">О проекте и правовом статусе</h2>
          </div>
          <div class="space-y-3">
            <div v-for="(item, i) in faqProject" :key="i" class="faq-item">
              <button @click="toggleFaq('project', i)" class="w-full p-6 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all flex justify-between items-center gap-4 text-left">
                <span class="font-bold text-lg text-[#2B2B2B] dark:text-[#FFFFFF]">{{ item.q }}</span>
                <UIcon :name="openProject === i ? 'i-heroicons-minus-20-solid' : 'i-heroicons-plus-20-solid'" class="w-6 h-6 text-[#A0876E] flex-shrink-0 transition-transform duration-300" />
              </button>
              <div class="faq-content" :class="{ 'faq-open': openProject === i }">
                <div class="px-6 pb-6">
                  <div class="pt-4 border-t border-[#E7DDCD] dark:border-[#3F4245]">
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/80 leading-relaxed" v-html="item.a"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Категория 2: О мониторинге и визитах -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-[#A0876E] rounded-xl flex items-center justify-center">
              <UIcon name="i-heroicons-building-storefront-20-solid" class="w-6 h-6 text-white" />
            </div>
            <h2 class="text-2xl md:text-3xl font-bold">О мониторинге и визитах</h2>
          </div>
          <div class="space-y-3">
            <div v-for="(item, i) in faqVisits" :key="i" class="faq-item">
              <button @click="toggleFaq('visits', i)" class="w-full p-6 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all flex justify-between items-center gap-4 text-left">
                <span class="font-bold text-lg text-[#2B2B2B] dark:text-[#FFFFFF]">{{ item.q }}</span>
                <UIcon :name="openVisits === i ? 'i-heroicons-minus-20-solid' : 'i-heroicons-plus-20-solid'" class="w-6 h-6 text-[#A0876E] flex-shrink-0 transition-transform duration-300" />
              </button>
              <div class="faq-content" :class="{ 'faq-open': openVisits === i }">
                <div class="px-6 pb-6">
                  <div class="pt-4 border-t border-[#E7DDCD] dark:border-[#3F4245]">
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/80 leading-relaxed" v-html="item.a"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Категория 3: О рейтингах и бейджах -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-[#A0876E] rounded-xl flex items-center justify-center">
              <UIcon name="i-heroicons-star-20-solid" class="w-6 h-6 text-white" />
            </div>
            <h2 class="text-2xl md:text-3xl font-bold">О рейтингах и бейджах</h2>
          </div>
          <div class="space-y-3">
            <div v-for="(item, i) in faqRatings" :key="i" class="faq-item">
              <button @click="toggleFaq('ratings', i)" class="w-full p-6 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all flex justify-between items-center gap-4 text-left">
                <span class="font-bold text-lg text-[#2B2B2B] dark:text-[#FFFFFF]">{{ item.q }}</span>
                <UIcon :name="openRatings === i ? 'i-heroicons-minus-20-solid' : 'i-heroicons-plus-20-solid'" class="w-6 h-6 text-[#A0876E] flex-shrink-0 transition-transform duration-300" />
              </button>
              <div class="faq-content" :class="{ 'faq-open': openRatings === i }">
                <div class="px-6 pb-6">
                  <div class="pt-4 border-t border-[#E7DDCD] dark:border-[#3F4245]">
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/80 leading-relaxed" v-html="item.a"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Категория 4: Права потребителей и взаимодействие -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-[#A0876E] rounded-xl flex items-center justify-center">
              <UIcon name="i-heroicons-document-text-20-solid" class="w-6 h-6 text-white" />
            </div>
            <h2 class="text-2xl md:text-3xl font-bold">Права потребителей и взаимодействие</h2>
          </div>
          <div class="space-y-3">
            <div v-for="(item, i) in faqRights" :key="i" class="faq-item">
              <button @click="toggleFaq('rights', i)" class="w-full p-6 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all flex justify-between items-center gap-4 text-left">
                <span class="font-bold text-lg text-[#2B2B2B] dark:text-[#FFFFFF]">{{ item.q }}</span>
                <UIcon :name="openRights === i ? 'i-heroicons-minus-20-solid' : 'i-heroicons-plus-20-solid'" class="w-6 h-6 text-[#A0876E] flex-shrink-0 transition-transform duration-300" />
              </button>
              <div class="faq-content" :class="{ 'faq-open': openRights === i }">
                <div class="px-6 pb-6">
                  <div class="pt-4 border-t border-[#E7DDCD] dark:border-[#3F4245]">
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/80 leading-relaxed" v-html="item.a"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Категория 5: Контакты и документы -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-[#A0876E] rounded-xl flex items-center justify-center">
              <UIcon name="i-heroicons-globe-alt-20-solid" class="w-6 h-6 text-white" />
            </div>
            <h2 class="text-2xl md:text-3xl font-bold">Контакты и документы</h2>
          </div>
          <div class="space-y-3">
            <div v-for="(item, i) in faqContacts" :key="i" class="faq-item">
              <button @click="toggleFaq('contacts', i)" class="w-full p-6 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all flex justify-between items-center gap-4 text-left">
                <span class="font-bold text-lg text-[#2B2B2B] dark:text-[#FFFFFF]">{{ item.q }}</span>
                <UIcon :name="openContacts === i ? 'i-heroicons-minus-20-solid' : 'i-heroicons-plus-20-solid'" class="w-6 h-6 text-[#A0876E] flex-shrink-0 transition-transform duration-300" />
              </button>
              <div class="faq-content" :class="{ 'faq-open': openContacts === i }">
                <div class="px-6 pb-6">
                  <div class="pt-4 border-t border-[#E7DDCD] dark:border-[#3F4245]">
                    <p class="text-[#3F4245] dark:text-[#E7DDCD]/80 leading-relaxed" v-html="item.a"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Блок "Не нашли ответ?" -->
      <div class="mt-16 p-10 bg-gradient-to-r from-[#E7DDCD] to-[#F5EDE0] dark:from-[#2B2B2B] dark:to-[#3F4245] rounded-3xl border border-[#A0876E]/20 text-center">
        <UIcon name="i-heroicons-chat-bubble-left-right-20-solid" class="w-12 h-12 text-[#A0876E] mx-auto mb-4" />
        <p class="text-2xl font-bold mb-2">Не нашли ответ?</p>
        <p class="text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-xl mx-auto mb-6">Свяжитесь с основателем проекта напрямую — он ответит быстро и по существу.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="tg://resolve?domain=RomanTroshinRF" class="inline-flex items-center gap-2 px-6 py-3 bg-[#2AABEE] text-white rounded-xl font-bold hover:bg-[#2290c9] transition-colors">
            <UIcon name="i-simple-icons-telegram" class="w-5 h-5" />
            Telegram
          </a>
          <a href="tel:+79171766746" class="inline-flex items-center gap-2 px-6 py-3 bg-[#2B2B2B] text-white rounded-xl font-bold hover:bg-[#1a1a1a] transition-colors">
            <UIcon name="i-heroicons-phone-20-solid" class="w-5 h-5" />
            +7 (917) 176-67-46
          </a>
          <a href="mailto:none@prosrochkapatrol.ru" class="inline-flex items-center gap-2 px-6 py-3 bg-[#A0876E] text-white rounded-xl font-bold hover:bg-[#8a7358] transition-colors">
            <UIcon name="i-heroicons-envelope-20-solid" class="w-5 h-5" />
            Email
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const openProject = ref<number | null>(null)
const openVisits = ref<number | null>(null)
const openRatings = ref<number | null>(null)
const openRights = ref<number | null>(null)
const openContacts = ref<number | null>(null)

const toggleFaq = (category: string, index: number) => {
  const map: Record<string, any> = {
    project: openProject,
    visits: openVisits,
    ratings: openRatings,
    rights: openRights,
    contacts: openContacts
  }
  const target = map[category]
  target.value = target.value === index ? null : index
}

const faqProject = [
  {
    q: 'Что такое FreshCheck и какова его правовая природа?',
    a: 'FreshCheck — независимая гражданская инициатива жителей г. Астрахани, осуществляющая деятельность на добровольной и некоммерческой основе с августа 2025 года. Проект не зарегистрирован в качестве юридического лица, ИП, НКО или общественного объединения. Все участники действуют как граждане РФ, реализуя конституционное право свободно искать, получать и распространять информацию (ст. 29 Конституции РФ).'
  },
  {
    q: 'Являетесь ли вы государственным или надзорным органом?',
    a: 'Нет. Участники проекта — обычные граждане-потребители. Мы не обладаем властными, контрольными или надзорными полномочиями, не выписываем штрафы, не составляем официальные протоколы и не изымаем товары. Термины «проверка» и «проверяющий» в наших материалах означают исключительно «общественный мониторинг» и «участник общественного мониторинга».'
  },
  {
    q: 'Кто основал проект и как с ним связаться?',
    a: 'Проект основан <strong>Трошиным Романом</strong>. Контакты основателя:<br>• Telegram: <a href="tg://resolve?domain=RomanTroshinRF" class="text-[#A0876E] hover:underline">@RomanTroshinRF</a><br>• Мессенджер Max: <a href="tel:+79171766746" class="text-[#A0876E] hover:underline">+7 (917) 176-67-46</a><br>• Email: <a href="mailto:none@prosrochkapatrol.ru" class="text-[#A0876E] hover:underline">none@prosrochkapatrol.ru</a><br>• Сайт: <a href="https://prosrochkapatrol.ru" class="text-[#A0876E] hover:underline" target="_blank">prosrochkapatrol.ru</a>'
  },
  {
    q: 'На каких правовых основаниях вы работаете?',
    a: 'Деятельность проекта осуществляется на основании:<br>• Ст. 29 Конституции РФ — право на информацию;<br>• Закон РФ № 2300-1 «О защите прав потребителей» (ст. 7, 8–10, 18);<br>• Постановление Правительства РФ № 2463 от 31.12.2020, п. 2 — право фотографировать товары и ценники в торговых залах;<br>• Ст. 152.1 ГК РФ — съёмка в местах свободного посещения;<br>• ФЗ № 149-ФЗ «Об информации», ФЗ № 52-ФЗ «О санитарно-эпидемиологическом благополучии».'
  },
  {
    q: 'Какие принципы лежат в основе вашей деятельности?',
    a: 'Мы руководствуемся Декларацией принципов (документ FC-DP-2026-03), включающей: законность, честность, прозрачность, партнёрство, безопасность потребителей, соразмерность, уважение к личности, независимость, открытость к диалогу и общественную пользу. Все документы проекта опубликованы и доступны на сайте.'
  },
  {
    q: 'Откуда проект получает финансирование?',
    a: 'Проект полностью волонтёрский и некоммерческий. Участники не получают вознаграждения, не берут плату с магазинов за мониторинг или рейтинги, не принимают финансирование, способное повлиять на объективность оценок. Деятельность осуществляется на добровольной основе.'
  }
]

const faqVisits = [
  {
    q: 'Как проходит визит участника в магазин?',
    a: 'Участник входит в торговый объект как обычный покупатель. При возможности представляется администратору: «Здравствуйте. Меня зовут [Имя]. Я участвую в общественном проекте FreshCheck. Нахожусь в магазине как обычный посетитель и фиксирую информацию о сроках годности и условиях хранения товаров. Не являюсь представителем государственных органов.» Далее проводится осмотр полок, фиксация информации фото/видео, информирование администрации о нарушениях и вручение письменного уведомления установленной формы.'
  },
  {
    q: 'Предупреждаете ли вы магазины о визитах заранее?',
    a: 'Обычно нет — мы посещаем магазины как обычные покупатели. Однако проект открыт к диалогу: согласно Принципу открытости к диалогу, мы готовы обсуждать с торговыми объектами предварительные уведомления о визитах, фиксированные дни мониторинга и иные форматы взаимодействия.'
  },
  {
    q: 'Что вы делаете при обнаружении просроченного товара?',
    a: 'Участник аккуратно отодвигает товар с истёкшим сроком годности на край полки (чтобы его заметили покупатели и сотрудники), но оставляет его в торговом зале — мы не имеем права изымать товары. Одновременно информируется администрация магазина и вручается письменное уведомление. Цель — дать магазину возможность самостоятельно устранить нарушение.'
  },
  {
    q: 'Публикуете ли вы лица сотрудников или их персональные данные?',
    a: 'Нет. Согласно ст. 152.1 ГК РФ и Принципу уважения к личности, граждане, случайно попавшие в кадр, обезличиваются перед публикацией: лица и иные идентифицирующие признаки замазываются. В бланке уведомления мы не запрашиваем ФИО сотрудников — достаточно должности и подписи. Указание ФИО — добровольное действие самого сотрудника.'
  },
  {
    q: 'Как долго хранятся служебные видеозаписи?',
    a: 'Служебные видеозаписи хранятся в зашифрованном виде не более 3 месяцев и используются исключительно для защиты участников проекта в спорных ситуациях, после чего уничтожаются. Проект не является оператором персональных данных в смысле ФЗ № 152-ФЗ, поскольку не зарегистрирован в качестве юридического лица.'
  },
  {
    q: 'Что происходит после публикации отчёта?',
    a: 'В течение 1–3 рабочих дней после визита публикуется открытый отчёт с фотоматериалами (с обезличиванием лиц) и итоговым рейтингом. Если нарушения не устранены, возможен повторный мониторинг. При систематических грубых нарушениях (3+ визита с 10+ единицами просрочки) проект может перейти к доказательной закупке и содействию в обращении в Роспотребнадзор.'
  }
]

const faqRatings = [
  {
    q: 'Как формируется рейтинг магазина?',
    a: 'Все торговые объекты начинают мониторинг с максимальной оценки <strong>5,00 баллов</strong>. Баллы снижаются за выявленные нарушения:<br>• Некачественный товар (1–3 ед.) — −0,1;<br>• Некачественный товар (4–9 ед.) — −0,2–0,4;<br>• Системная просрочка (10+ ед.) — −0,5–5,0;<br>• Просроченное детское питание — −0,1–5,0;<br>• Препятствование мониторингу / хамство — −0,1–2,0;<br>• Агрессия / угрозы — −0,1–5,0;<br>• Отказ от подписи уведомления — −0,1–0,5.<br>Окончательная оценка определяется участником с учётом совокупности и критичности нарушений.'
  },
  {
    q: 'Что такое знак «Проверено FreshCheck» и как его получить?',
    a: 'Торговые объекты с итоговой оценкой <strong>5,00/5,00</strong> получают право на размещение знака «Проверено FreshCheck». Данный знак является выражением позиции проекта и не является официальным сертификатом или государственным свидетельством. Это способ показать покупателям, что магазин прошёл независимый общественный контроль без выявленных нарушений.'
  },
  {
    q: 'Как проверить подлинность бейджа участника?',
    a: 'Актуальный реестр выданных бейджей публикуется на сайте: <a href="https://prosrochkapatrol.ru/бейджи/" class="text-[#A0876E] hover:underline" target="_blank">prosrochkapatrol.ru/бейджи/</a>. Код бейджа имеет формат <strong>#[ТИП][НОМЕР]-AST[БУКВА]</strong>, где:<br>• #P — Проверяющий, #YOU — Блогер;<br>• НОМЕР — уникальный порядковый номер;<br>• AST — код города (Астрахань);<br>• БУКВА (необязательно) — именной суффикс (R, D, RK, A).<br>Поддельный бейдж не содержит символа # или элемента -AST, либо его код отсутствует в реестре.'
  },
  {
    q: 'Можно ли доверять рейтингам проекта?',
    a: 'Да. Согласно Принципу честности, мы публикуем только то, что зафиксировали своими глазами и камерой. Рейтинги не продаются и не покупаются. Мы не принимаем вознаграждения от магазинов. Каждый отчёт сопровождается фотоматериалами, а методика оценки прозрачна и опубликована в Публичной политике (документ FC-PP-2026-01).'
  }
]

const faqRights = [
  {
    q: 'Могу ли я фотографировать товары и ценники в магазине?',
    a: 'Да. Согласно Постановлению Правительства РФ № 2463 от 31.12.2020, п. 2, на торговых объектах не допускается ограничение прав потребителей на поиск и получение любой информации, в том числе путём фотографирования товара. Эта норма прямо подтверждает право участников проекта и любых покупателей фотографировать товары, ценники и прилавки в торговых залах.'
  },
  {
    q: 'Что делать, если я купил просроченный или некачественный товар?',
    a: 'Вы имеете право на возврат товара ненадлежащего качества согласно ст. 18 Закона РФ «О защите прав потребителей». Обратитесь в магазин с чеком и товаром, потребуйте возврата средств. Если продавец отказывает — напишите претензию в двух экземплярах, один оставьте себе с отметкой о принятии. Далее можно обратиться в Роспотребнадзор или суд.'
  },
  {
    q: 'Помогает ли FreshCheck с составлением жалоб?',
    a: 'Да. При систематических и грубых нарушениях проект содействует в составлении обращений в Роспотребнадзор и другие органы защиты прав потребителей. Мы можем предоставить свои материалы (фото, отчёты, уведомления) в качестве доказательной базы. Однако окончательное решение о подаче жалобы принимает сам потребитель.'
  },
  {
    q: 'Когда проект обращается в Роспотребнадзор?',
    a: 'Обращение в надзорные органы — исключительная мера. Условия эскалации:<br>• Зафиксировано не менее трёх визитов с нарушениями;<br>• При каждом визите выявлено 10 и более единиц товара с истёкшим сроком годности;<br>• Письменные уведомления вручались, но нарушения не устранялись.<br>Решение об обращении принимает исключительно основатель проекта — Трошин Роман.'
  },
  {
    q: 'Можно ли использовать материалы FreshCheck в суде?',
    a: 'Да. Согласно ст. 77 ГПК РФ, фотографии, видеозаписи, бланки уведомлений и отчёты проекта могут быть представлены в суде или контролирующих органах как доказательства фактов. При представлении аудио- или видеозаписи необходимо указать, когда, кем и при каких обстоятельствах она была сделана. Документы проекта не имеют статуса нормативного акта, но могут подтверждать добросовестность и законность деятельности.'
  }
]

const faqContacts = [
  {
    q: 'Где найти актуальные отчёты о проверках?',
    a: 'Все открытые отчёты публикуются на официальном сайте проекта: <a href="https://prosrochkapatrol.ru" class="text-[#A0876E] hover:underline" target="_blank">prosrochkapatrol.ru</a>. Также мы дублируем новости и обзоры в нашем Telegram-канале: <a href="tg://resolve?domain=prosrochka_patrol" class="text-[#A0876E] hover:underline">@prosrochka_patrol</a>.'
  },
  {
    q: 'Как предложить магазин для мониторинга?',
    a: 'Вы можете написать основателю проекта в Telegram: <a href="tg://resolve?domain=RomanTroshinRF" class="text-[#A0876E] hover:underline">@RomanTroshinRF</a> или воспользоваться формой обратной связи на сайте. Укажите название магазина, адрес и описание проблемы — мы включим объект в план мониторинга.'
  },
  {
    q: 'Где скачать официальные документы проекта?',
    a: 'Все документы проекта находятся в открытом доступе:<br>• Публичная политика (FC-PP-2026-01);<br>• Положение о деятельности (FC-PD-2026-02);<br>• Декларация принципов (FC-DP-2026-03);<br>• Положение о системе бейджей (FC-BB-2026-04);<br>• Форма уведомления (FC-NOT-2026-05).<br>Актуальные версии размещены на сайте: <a href="https://prosrochkapatrol.ru" class="text-[#A0876E] hover:underline" target="_blank">prosrochkapatrol.ru</a>.'
  },
  {
    q: 'Можно ли присоединиться к проекту как волонтёр?',
    a: 'Да. Проект открыт для новых участников. Вы должны быть готовы действовать в рамках законодательства РФ, следовать документам проекта, иметь официальный бейдж и соблюдать принципы конфиденциальности. Свяжитесь с основателем: <a href="tg://resolve?domain=RomanTroshinRF" class="text-[#A0876E] hover:underline">@RomanTroshinRF</a> или по телефону <a href="tel:+79171766746" class="text-[#A0876E] hover:underline">+7 (917) 176-67-46</a>.'
  },
  {
    q: 'Является ли информация на сайте юридической консультацией?',
    a: 'Нет. Все публикуемые материалы носят исключительно информационный характер и подготовлены на основе открытых источников. Они не являются юридической консультацией. FreshCheck не несёт ответственности за решения, принятые третьими лицами на основании опубликованных материалов. Каждый участник проекта несёт личную ответственность за соответствие своих действий требованиям законодательства РФ.'
  }
]
</script>

<style scoped>
.faq-content {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.4s ease;
}

.faq-content.faq-open {
  max-height: 1200px;
  opacity: 1;
}

.faq-item :deep(a) {
  color: #A0876E;
  text-decoration: none;
  border-bottom: 1px dashed #A0876E;
  transition: all 0.2s ease;
}

.faq-item :deep(a:hover) {
  color: #8a7358;
  border-bottom-style: solid;
}
</style>