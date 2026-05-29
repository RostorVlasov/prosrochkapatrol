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
            Документы проекта FreshCheck
          </span>
        </div>
          
        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 max-w-4xl mx-auto text-[#2B2B2B] dark:text-[#FFFFFF]">
          Правовой фундамент<br/>
          <span class="text-[#A0876E] italic">нашей инициативы</span>
        </h1>
        <h1 class="text-5xl dark:text-white text-black">ЕЩЕ НЕ ГОТОВА СТРАНИЦА НЕ ПИШИ МНЕ РОМАН ПО ПОВОДУ НЕЕ</h1>
        <p class="text-lg md:text-xl text-[#3F4245] dark:text-[#E7DDCD]/80 max-w-2xl mx-auto leading-relaxed mb-12">
          Мы действуем строго в правовом поле РФ. Здесь собраны внутренние регламенты, публичные стандарты и декларации, определяющие принципы нашего мониторинга.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#documents-list" class="group px-8 py-4 bg-[#2B2B2B] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#2B2B2B] rounded-xl font-bold text-lg hover:bg-[#3F4245] dark:hover:bg-[#E7DDCD] transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#2B2B2B]/20">
            <UIcon name="i-heroicons-document-text-20-solid" class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
            Смотреть документы
          </a>
          <a href="#faq" class="px-8 py-4 bg-[#A0876E] hover:bg-[#8a7358] text-[#FFFFFF] rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg shadow-[#A0876E]/30 flex items-center justify-center gap-2">
            <UIcon name="i-heroicons-question-mark-circle-20-solid" class="w-5 h-5" />
            Юридический FAQ
          </a>
        </div>
      </div>
    </section>

    <section id="documents-list" class="max-w-7xl mx-auto px-6 py-24 scroll-mt-6">
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Реестр документов
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Документы <span class="italic text-[#A0876E]">проекта</span>
        </h2>
        <p class="text-lg text-[#3F4245] dark:text-[#E7DDCD]/80 max-w-2xl mx-auto mb-8">
          Все документы приняты основателем проекта, открыты для ознакомления и опубликованы в публичном доступе.
        </p>
        <div class="max-w-3xl mx-auto p-4 bg-[#FEF3C7] dark:bg-[#3F4245]/30 rounded-xl border border-[#F59E0B]/30 text-left">
          <div class="flex items-start gap-3">
            <UIcon name="i-heroicons-exclamation-triangle-20-solid" class="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
            <p class="text-sm text-[#92400E] dark:text-[#FDE68A]">
              <span class="font-bold">Важно:</span> эти документы являются внутренними регламентами гражданской инициативы, принятыми на добровольной основе. Они не имеют статуса нормативных правовых актов и не налагают обязательств на торговые организации, государственные органы или иных третьих лиц.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(doc, index) in projectDocs" :key="index" class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-3xl p-8 border border-[#E7DDCD] dark:border-[#3F4245] shadow-sm flex flex-col justify-between hover:border-[#A0876E] transition-colors duration-300">
          <div>
            <div class="flex justify-between items-start mb-6">
              <div class="w-14 h-14 bg-[#E7DDCD] dark:bg-[#3F4245] rounded-2xl flex items-center justify-center">
                <UIcon :name="doc.icon" class="w-7 h-7 text-[#A0876E]" />
              </div>
              <span class="font-mono text-sm px-3 py-1 bg-[#E7DDCD]/50 dark:bg-[#3F4245]/50 rounded-md text-[#A0876E] font-bold">
                {{ doc.code }}
              </span>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-[#2B2B2B] dark:text-[#FFFFFF]">{{ doc.title }}</h3>
            <p class="text-sm text-[#A0876E] mb-4">Дата принятия: {{ doc.date }}</p>
            <p class="text-[#3F4245] dark:text-[#E7DDCD]/80 mb-6 leading-relaxed">{{ doc.description }}</p>
          </div>
          
          <div class="pt-6 border-t border-[#E7DDCD] dark:border-[#3F4245] flex flex-col sm:flex-row gap-4 items-center justify-between">
            <span class="text-xs text-[#3F4245]/60 dark:text-[#E7DDCD]/40">Статус: Действует</span>
            <a :href="doc.link" download class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#A0876E] hover:bg-[#8a7358] text-white rounded-xl text-sm font-bold transition-colors duration-300 shadow-md">
              <UIcon name="i-heroicons-arrow-down-tray-20-solid" class="w-4 h-4" />
              Скачать PDF
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 mb-24">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2B2B2B] via-[#3F4245] to-[#2B2B2B] p-10 md:p-12 text-[#FFFFFF]">
        <div class="absolute top-0 right-0 w-96 h-96 bg-[#A0876E]/20 rounded-full blur-3xl"></div>
        <div class="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
          <div class="w-16 h-16 bg-[#A0876E] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <UIcon name="i-heroicons-shield-check-20-solid" class="w-9 h-9 text-white" />
          </div>
          <div class="flex-1 text-left">
            <h3 class="text-2xl font-bold mb-3">Правовая оговорка</h3>
            <p class="text-md text-[#E7DDCD]/90 leading-relaxed max-w-4xl">
              FreshCheck — независимая гражданская инициатива жителей Астрахани, действующая на добровольной основе. Проект не является юридическим лицом, коммерческой или некоммерческой организацией (НКО), а также не представляет государственные или муниципальные органы власти (включая Роспотребнадзор). Внутренние документы обязательны исключительно для участников проекта на добровольной основе и не налагают обязанностей на третьих лиц, включая торговые сети.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="py-24 bg-[#E7DDCD]/30 dark:bg-[#1a1a1a] scroll-mt-6">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
            Правовые вопросы
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            Юридическая <span class="italic text-[#A0876E]">чистота</span>
          </h2>
          <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-3xl mx-auto">
            Ответы на ключевые вопросы о законности общественного мониторинга
          </p>
        </div>

        <div class="space-y-3">
          <div v-for="(item, i) in legalFaq" :key="i"
               class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl border border-[#E7DDCD] dark:border-[#3F4245] overflow-hidden hover:border-[#A0876E] transition-colors duration-300">
            <button @click="toggleLegalFaq(i)" class="w-full p-6 flex justify-between items-center gap-4 text-left">
              <span class="font-bold text-lg text-[#2B2B2B] dark:text-[#FFFFFF]">{{ item.q }}</span>
              <UIcon :name="openLegalFaq === i ? 'i-heroicons-minus-20-solid' : 'i-heroicons-plus-20-solid'"
                     class="w-6 h-6 text-[#A0876E] flex-shrink-0 transition-transform duration-500" />
            </button>
            <div class="faq-content" :class="{ 'faq-open': openLegalFaq === i }">
              <div class="px-6 pb-6">
                <div class="pt-4 border-t border-[#E7DDCD] dark:border-[#3F4245]">
                  <p class="text-[#3F4245] dark:text-[#E7DDCD]/80 leading-relaxed whitespace-pre-line">{{ item.a }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contacts" class="bg-[#FFFFFF] dark:bg-[#1a1a1a] py-24">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="inline-block px-4 py-2 bg-[#E7DDCD]/50 dark:bg-[#2B2B2B] rounded-full text-xs font-bold uppercase tracking-widest text-[#A0876E] mb-6">
          Поддержка и связь
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Появились правовые <span class="italic text-[#A0876E]">претензии?</span>
        </h2>
        <p class="text-xl text-[#3F4245] dark:text-[#E7DDCD]/70 max-w-2xl mx-auto mb-12">
          Мы полностью открыты к цивилизованному диалогу с представителями бизнеса, юристами и СМИ.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a href="mailto:none@prosrochkapatrol.ru" class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all group">
            <UIcon name="i-heroicons-envelope-20-solid" class="w-10 h-10 text-[#A0876E] mx-auto mb-3" />
            <div class="font-bold">Email для запросов</div>
            <div class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70 break-all">none@prosrochkapatrol.ru</div>
          </a>
          <a href="tg://resolve?domain=FreshCheckAstraAdmin" target="_blank" class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all group">
            <UIcon name="i-simple-icons-telegram" class="w-10 h-10 text-[#A0876E] mx-auto mb-3" />
            <div class="font-bold">Telegram Администрация</div>
            <div class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">@FreshCheckAstraAdmin</div>
          </a>
          <a href="tel:+79885951161" class="bg-[#FFFFFF] dark:bg-[#2B2B2B] rounded-2xl p-6 border border-[#E7DDCD] dark:border-[#3F4245] hover:border-[#A0876E] transition-all group">
            <UIcon name="i-heroicons-phone-20-solid" class="w-10 h-10 text-[#A0876E] mx-auto mb-3" />
            <div class="font-bold">Горячая линия</div>
            <div class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/70">+7 (988) 595-11-61</div>
          </a>
        </div>
        <p class="text-sm text-[#3F4245] dark:text-[#E7DDCD]/60 mt-8">Принимаем обращения граждан и администрации торговых сетей с 9:00 до 20:00</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const openLegalFaq = ref<number | null>(null)

const toggleLegalFaq = (index: number) => {
  openLegalFaq.value = openLegalFaq.value === index ? null : index
}

const projectDocs = [
  {
    code: 'FC-PP-2026-01',
    title: 'Публичная политика',
    date: '02 апреля 2026 г. (Редакция от 01 июня 2026 г.)',
    icon: 'i-heroicons-document-text-20-solid',
    description: 'Правовой статус, цели, правовые основания, порядок мониторинга, рейтинговая система, ответственность. Документ носит открытый характер и может быть предъявлен в споре как доказательство прозрачности и законности работы проекта.',
    link: '/docs/FC-PP-2026-01_Publichnaya-politika.pdf'
  },
  {
    code: 'FC-PD-2026-02',
    title: 'Положение о деятельности',
    date: '02 апреля 2026 г. (Редакция от 01 июня 2026 г.)',
    icon: 'i-heroicons-clipboard-document-check-20-solid',
    description: 'Основной внутренний регламент: права и обязанности участников, этапы визита, публикация материалов, хранение записей, взаимодействие с надзорными органами, использование материалов СМИ.',
    link: '/docs/FC-PD-2026-02_Polozhenie.pdf'
  },
  {
    code: 'FC-DP-2026-03',
    title: 'Декларация принципов',
    date: '02 апреля 2026 г. (Редакция от 01 июня 2026 г.)',
    icon: 'i-heroicons-academic-cap-20-solid',
    description: '10 ценностей и нравственных обязательств: законность, честность, прозрачность, партнёрство, безопасность, соразмерность, уважение, независимость, диалог, общественная польза. Идеологическая основа проекта.',
    link: '/docs/FC-DP-2026-03_Deklaraciya.pdf'
  },
  {
    code: 'FC-BB-2026-04',
    title: 'Положение о системе бейджей',
    date: '28 апреля 2026 г. (Редакция от 01 июня 2026 г.)',
    icon: 'i-heroicons-identification-20-solid',
    description: 'Формат кодов #[ТИП][НОМЕР]-AST[БУКВА], правила проверки подлинности, реестр на сайте, признаки поддельного бейджа. Защита жителей и бизнеса от самозванцев.',
    link: '/docs/FC-BB-2026-04_Beydzhi.pdf'
  }
]

const legalFaq = [
  {
    q: 'Каков правовой статус документов проекта FreshCheck?',
    a: 'Наши документы являются внутними регламентами гражданской инициативы, принятыми основателем на добровольной основе. Они не имеют статуса нормативных правовых актов и не налагают обязательств на торговые организации, государственные органы или иных третьих лиц. Они описывают методику и принципы деятельности, обязательны для участников исключительно на добровольной основе.'
  },
  {
    q: 'Где торговая сеть может проверить подлинность документов и участников?',
    a: 'Все документы находятся в актуальном состоянии на странице /docs. Подлинность участников и их персональных бейджей (формат #[ТИП][НОМЕР]-AST[БУКВА]) проверяется в режиме реального времени на странице /badges. Бейдж не является документом государственного образца и не наделяет властными полномочиями.'
  },
  {
    q: 'Какими законами руководствуется проект при фиксации нарушений?',
    a: 'Мы опираемся исключительно на федеральное законодательство РФ:\n— ст. 29 Конституции РФ (право свободно искать, получать, передавать, производить и распространять информацию);\n— п. 2 Постановления Правительства РФ № 2463 (прямой запрет на ограничение фотосъёмки товаров и ценников);\n— ст. 7, 8–10 Закона РФ «О защите прав потребителей» (право на безопасность товара и информацию о нём);\n— ст. 152.1 ГК РФ (съёмка в местах открытого доступа без согласия, если лицо не является главным объектом);\n— ст. 77 ГПК РФ (фиксация даты, времени и обстоятельств съёмки для использования как доказательств).'
  },
  {
    q: 'Каковы правовые последствия фиксации дефектов для магазинов?',
    a: 'Деятельность FreshCheck носит строго информационный и общественный характер. Проект не уполномочен составлять административные протоколы, выписывать штрафы, изымать товары или закрывать объекты. Цель — оперативное информирование администрации торговой точки для добровольного устранения недостатков. При систематических грубых нарушениях проект может содействовать гражданам в обращении в Роспотребнадзор.'
  },
  {
    q: 'Можно ли использовать материалы проекта в СМИ?',
    a: 'Да. Любой желающий вправе использовать информацию и тексты публикаций проекта на своих ресурсах при условии сохранения ссылки на источник. При цитировании материалов СМИ мы руководствуемся ст. 1274 ГК РФ: цитирование в объёме, оправданном целью, с обязательным указанием источника и автора. Полное воспроизведение чужих текстов без разрешения правообладателя запрещено (ст. 1270 ГК РФ).'
  },
  {
    q: 'Влияет ли партнёрство на оценки магазинов?',
    a: 'Нет. Партнёрство с любыми организациями не влияет на объективность наших оценок и публикаций. Мы оставляем за собой право публиковать критические отчёты независимо от наличия партнёрских отношений. Проект независим от политических структур, коммерческих интересов и конкурентов магазинов. Это закреплено в Декларации принципов (FC-DP-2026-03) и Публичной политике (FC-PP-2026-01).'
  },
  {
    q: 'FreshCheck зарегистрирован как юрлицо или НКО?',
    a: 'Нет. Проект не зарегистрирован как юридическое лицо, индивидуальный предприниматель, некоммерческая организация или общественное объединение. Все участники действуют как граждане РФ на правах обычных потребителей, реализуя конституционные права. Проект не является государственным, муниципальным органом либо их представителем; не является Роспотребнадзором, органами полиции или иными контролирующими структурами.'
  },
  {
    q: 'Проект принимает деньги от магазинов или партнёров?',
    a: 'Проект некоммерческий. Участники не получают вознаграждения за мониторинг. Мы вправе принимать гостевые подарки и пожертвования от торговых объектов и граждан, которые не влияют на объективность оценок и рейтинги. Рейтинги не продаются и не покупаются.'
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