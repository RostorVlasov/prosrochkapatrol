# 🦊 FreshCheck — Общественный мониторинг качества товаров

Платформа для автоматизации работы активистов проекта **FreshCheck**. Система позволяет:
- 📋 Фиксировать нарушения (продажу товаров с истёкшим сроком годности)
- 🏪 Вести базу данных торговых точек
- 📊 Формировать публичные отчёты по результатам проверок
- 🔐 Управлять данными через удобный административный интерфейс

---

## 📋 Оглавление

- [Стек технологий](#-стек-технологий)
- [Архитектура проекта](#-архитектура-проекта)
- [Локальный запуск](#-локальный-запуск)
- [Структура репозитория](#-структура-репозитория)
- [Деплой](#-деплой-на-сервер-джино)
- [Переменные окружения](#-переменные-окружения)
- [Разработка](#-разработка)

---

## 🛠️ Стек технологий

| Слой | Технология | Версия |
|---|---|---|
| **Фронтенд / SSR** | Nuxt.js 4 (Vue.js 3) | 4.3.0 |
| **Бэкенд / CMS** | Payload CMS | 3.84.1 |
| **Сервер приложений** | Next.js | 15.2.4 |
| **База данных** | SQLite | - |
| **ORM** | Payload DB (SQLite адаптер) | 3.84.1 |
| **UI фреймворк** | Nuxt UI | 4.7.1 |
| **Стилизация** | TailwindCSS | 4.3.0 |
| **Валидация** | Zod | 4.3.6 |
| **State Management** | Pinia | 3.0.4 |
| **Пакетный менеджер** | pnpm | 9+ или 10+ |
| **Язык** | TypeScript | 5.7+ |
| **Тестирование** | Vitest, Playwright | - |

---

## 🏗️ Архитектура проекта

Проект использует **монорепо** структуру с отдельными фронтенд и бэкенд приложениями:

```
prosrochkapatrol/
├── backend/              # Payload CMS + GraphQL API
│   ├── src/
│   │   ├── collections/  # Коллекции данных (Media, Users)
│   │   ├── payload.config.ts
│   │   └── payload-types.ts (автогенерируется)
│   └── package.json
│
├── frontend/             # Nuxt.js SPA приложение
│   ├── app.vue
│   ├── pages/
│   ├── components/
│   ├── stores/           # Pinia хранилища
│   └── package.json
│
└── README.md
```

### Основные сервисы:

- **Backend** (Payload CMS): API, админ-панель, управление медиа
- **Frontend** (Nuxt): Пользовательский интерфейс, SSR
- **Database**: SQLite для хранения всех данных

---

## 🚀 Локальный запуск

### Требования

- **Node.js**: 18.20.2 или >=20.9.0
- **pnpm**: 9+ или 10+
- **Git**

### 1. Клонировать репозиторий

```bash
git clone git@github.com:RostorVlasov/prosrochkapatrol.git
cd prosrochkapatrol
```

### 2. Установить зависимости

```bash
pnpm install
```

Это установит зависимости для обоих приложений (frontend и backend).

### 3. Создать файл `.env` в каждой директории

#### Backend (`.env` в корне проекта или `backend/`)

```env
# Database
DATABASE_URL=file:./database.sqlite

# Payload CMS
PAYLOAD_SECRET=your_super_secret_key_here_change_in_production

# Node
NODE_ENV=development
```

**Примечание**: Оригинальный `.env.example` используется MongoDB URL, но проект настроен на SQLite!

#### Frontend (`.env` в `frontend/`)

```env
# API
NUXT_PUBLIC_API_URL=http://localhost:3000
```

### 4. Запустить приложения

#### Вариант A: Запуск только бэкенда

```bash
cd backend
pnpm run dev
```

Backend будет доступен на: **http://localhost:3000**
- Админ-панель: http://localhost:3000/admin

#### Вариант B: Запуск только фронтенда

```bash
cd frontend
pnpm run dev
```

Frontend будет доступен на: **http://localhost:3000** (по умолчанию)

#### Вариант C: Запуск обоих (рекомендуется для локальной разработки)

**Терминал 1** - Backend:
```bash
cd backend
pnpm run dev
```

**Терминал 2** - Frontend:
```bash
cd frontend
pnpm run dev
```

### 5. Проверить установку

Откройте в браузере:
- Backend админ-панель: **http://localhost:3000/admin**
- Frontend приложение: **http://localhost:3000** (если запущен фронтенд на другом порте, он будет на http://localhost:3001)

---

## 📁 Структура репозитория

```
prosrochkapatrol/
│
├── backend/
│   ├── src/
│   │   ├── collections/
│   │   │   ├── Users.ts        # Коллекция пользователей
│   │   │   └── Media.ts        # Коллекция медиа-файлов
│   │   ├── app.ts              # Next.js приложение
│   │   └── payload.config.ts   # Конфигурация Payload CMS
│   │
│   ├── package.json            # Зависимости бэкенда
│   ├── .env.example            # Пример переменных окружения
│   ├── next.config.js          # Конфигурация Next.js
│   ├── tsconfig.json           # TypeScript конфигурация
│   └── vitest.config.mts       # Конфигурация юнит-тестов
│
├── frontend/
│   ├── app.vue                 # Корневой компонент
│   ├── pages/                  # Страницы приложения
│   ├── components/             # Переиспользуемые компоненты
│   ├── stores/                 # Pinia хранилища состояния
│   ├── package.json            # Зависимости фронтенда
│   ├── nuxt.config.ts          # Конфигурация Nuxt
│   └── tsconfig.json           # TypeScript конфигурация
│
├── .gitignore
├── README.md                   # Этот файл
└── package.json               # Корневой package.json (если есть)
```

---

## 🌍 Деплой на сервер (Джино)

### Обновление production-версии через SSH

```bash
# Подключиться к серверу
ssh j06939231@7e49d50600f.hosting.myjino.ru

# Перейти в директорию сайта
cd domains/7e49d50600f.hosting.myjino.ru

# Подтянуть изменения из main
git pull origin main

# Переустановить зависимости (если были изменения)
pnpm install

# Пересобрать приложение
pnpm run build

# Перезагрузить сервис (команда зависит от конфигурации хостера)
```

### Production переменные окружения

На production сервере убедитесь, что установлены:

```env
NODE_ENV=production
PAYLOAD_SECRET=your_secure_production_secret
DATABASE_URL=file:/path/to/production/database.sqlite
# Другие переменные в зависимости от конфигурации
```

---

## 🔐 Переменные окружения

### Backend (Payload CMS)

| Переменная | Описание | Пример | Обязательна |
|---|---|---|---|
| `DATABASE_URL` | URL базы данных SQLite | `file:./database.sqlite` | ✅ |
| `PAYLOAD_SECRET` | Секретный ключ для CMS | `your_secret_key` | ✅ |
| `NODE_ENV` | Окружение (development/production) | `development` | ❌ |

### Frontend (Nuxt)

| Переменная | Описание | Пример | Обязательна |
|---|---|---|---|
| `NUXT_PUBLIC_API_URL` | URL бэкенд API | `http://localhost:3000` | ❌ |
| `NUXT_HOST` | Хост фронтенда | `localhost` | ❌ |
| `NUXT_PORT` | Порт фронтенда | `3001` | ❌ |

---

## 💻 Разработка

### Доступные команды

#### Backend

```bash
cd backend

# Разработка
pnpm run dev           # Запуск dev сервера
pnpm run devsafe       # Очистка .next и запуск (если проблемы)

# Production
pnpm run build         # Сборка приложения
pnpm run start         # Запуск продакшена

# CMS
pnpm run payload       # Управление Payload CMS
pnpm run generate:types    # Генерация TypeScript типов
pnpm run generate:importmap # Генерация import map

# Качество кода
pnpm run lint          # ESLint проверка
pnpm run test:int      # Unit тесты (Vitest)
pnpm run test:e2e      # E2E тесты (Playwright)
pnpm run test          # Все тесты
```

#### Frontend

```bash
cd frontend

# Разработка
pnpm run dev           # Запуск dev сервера

# Production
pnpm run build         # Сборка для продакшена
pnpm run start         # Запуск продакшена
pnpm run generate      # Статическая генерация сайта

# Тестирование
pnpm run preview       # Preview собранного приложения
```

### Основные фреймворки и библиотеки

- **Payload CMS**: Управление контентом, API, админ-панель
- **Nuxt.js**: Meta-фреймворк для Vue.js с SSR и SSG
- **GraphQL**: API язык запросов (включен в Payload)
- **TailwindCSS**: Утилити-классы для стилизации
- **Pinia**: State management для Vue.js
- **Zod**: TypeScript-first валидация схем

### Расширение проекта

#### Добавление новой коллекции в Payload CMS

1. Создайте файл `backend/src/collections/YourCollection.ts`:

```typescript
import type { CollectionConfig } from 'payload'

export const YourCollection: CollectionConfig = {
  slug: 'your-collection',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}
```

2. Добавьте в `backend/src/payload.config.ts`:

```typescript
import { YourCollection } from './collections/YourCollection'

// ...
collections: [Users, Media, YourCollection],
```

3. Пересоберите типы:

```bash
pnpm run generate:types
```

#### Добавление новой страницы в Nuxt

1. Создайте файл `frontend/pages/your-page.vue`:

```vue
<template>
  <div>
    <h1>Ваша новая страница</h1>
  </div>
</template>

<script setup lang="ts">
// Ваш код здесь
</script>
```

2. Страница автоматически доступна по маршруту `/your-page`

---

## 🤝 Контрибьютинг

При разработке пожалуйста:
1. Создавайте отдельные ветки для новых фич
2. Пишите понятные commit messages
3. Проходите все тесты перед PR
4. Обновляйте эту документацию при необходимости

---

## 📄 Лицензия

Copyright (c) 2026 Roman Troshin, Boris Stepanenko (FreshCheck). All rights reserved.

Все права защищены. Никакая часть данного исходного кода или связанных с ним файлов документации не может быть воспроизведена, распространена или передана в любой форме и любыми средствами без предварительного письменного разрешения правообладателей.

---
## 📞 Контакты

Проект: **FreshCheck** — Общественный мониторинг качества товаров

Репозиторий: [github.com/RostorVlasov/prosrochkapatrol](https://github.com/RostorVlasov/prosrochkapatrol)

---

**Последнее обновление**: май 2026
