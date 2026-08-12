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
- [Переменные окружения](#-переменные-окружения)
- [Разработка](#-разработка)

---

## 🛠️ Стек технологий

| Слой | Технология | Версия |
|---|---|---|
| **Фронтенд / SPA** | Nuxt.js | 4.3.0 |
| **Фронтенд / SPA** | Vue.js | 3.5.27 |
| **Бэкенд / CMS** | Payload CMS | 3.84.1 |
| **Сервер приложений** | Next.js | 15.2.9 |
| **База данных** | MongoDB | — |
| **ORM** | Mongoose (Payload DB адаптер) | 3.84.1 |
| **UI фреймворк** | Nuxt UI | ^4.7.1 |
| **Стилизация** | TailwindCSS | ^4.3.0 |
| **State Management** | Pinia | ^3.0.4 |
| **Пакетный менеджер** | pnpm | ^9 или ^10 |
| **Node.js** | Node.js | ^18.20.2 или >=20.9.0 |
| **Язык** | TypeScript | 5.7.3 (backend) / ^5.9.3 (frontend) |
| **Тестирование** | Vitest | 4.0.18 |
| **Тестирование E2E** | Playwright | 1.58.2 |

---

## 🏗️ Архитектура проекта

Проект использует **монорепо** структуру с отдельными фронтенд и бэкенд приложениями:

```
prosrochkapatrol/
├── backend/              # Payload CMS
│   ├── src/
│   │   ├── collections/  # Коллекции данных
│   │   │   ├── Users.ts
│   │   │   ├── Media.ts
│   │   │   ├── Posts.ts
│   │   │   ├── Shops.ts
│   │   │   ├── Complaints.ts
│   │   │   ├── Rubrics.ts
│   │   │   └── Badges.ts
│   │   ├── globals/      # Глобальные настройки
│   │   │   └── SiteSettings.ts
│   │   ├── app.ts        # Next.js приложение
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

- **Backend** (Payload CMS): API, админ-панель, управление медиа и контентом
- **Frontend** (Nuxt): Пользовательский интерфейс, SPA
- **Database**: MongoDB для хранения всех данных

### Коллекции данных:

- **Users** — пользователи системы
- **Media** — медиа-файлы (изображения, видео)
- **Posts** — статьи/посты
- **Shops** — информация о торговых точках
- **Complaints** — жалобы на нарушения
- **Rubrics** — рубрики/категории
- **Badges** — значки/награды

---

## 🚀 Локальный запуск

### Требования

- Node.js ^18.20.2 или >=20.9.0
- pnpm ^9 или ^10
- MongoDB (локально или удалённая база)

### 1. Клонировать репозиторий

```bash
git clone git@github.com:RostorVlasov/prosrochkapatrol.git
cd prosrochkapatrol
```

### 2. Установить зависимости

```bash
cd backend && pnpm install
cd ../frontend && bun install
```

Зависимости устанавливаются отдельно: Payload backend использует `pnpm`, а Nuxt frontend — `bun`.

### 3. Создать файл `.env` в каждой директории

#### Backend (`backend/.env`)

```env
# Database (MongoDB)
DATABASE_URI=mongodb://127.0.0.1/prosrochkapatrol

# Payload CMS
PAYLOAD_SECRET=your_super_secret_key_here_change_in_production

# Node
NODE_ENV=development

# SMTP для email (опционально)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
```

#### Frontend (`frontend/.env`)

```env
# API
NUXT_PUBLIC_API_URL=http://localhost:3000

# Порт фронтенда (бэкенд занимает 3000)
NUXT_PORT=3001
NUXT_HOST=localhost
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

Frontend будет доступен на: **http://localhost:3001**

#### Вариант C: Запуск обоих (рекомендуется для локальной разработки)

**Терминал 1** — Backend:
```bash
cd backend
pnpm run dev
```

**Терминал 2** — Frontend:
```bash
cd frontend
pnpm run dev
```

### 5. Проверить установку

Откройте в браузере:
- Backend API + админ-панель: **http://localhost:3000/admin**
- Frontend приложение: **http://localhost:3001**

---

## 📁 Структура репозитория

```
prosrochkapatrol/
│
├── backend/
│   ├── src/
│   │   ├── collections/
│   │   │   ├── Users.ts          # Коллекция пользователей
│   │   │   ├── Media.ts          # Коллекция медиа-файлов
│   │   │   ├── Posts.ts          # Коллекция постов/статей
│   │   │   ├── Shops.ts          # Коллекция торговых точек
│   │   │   ├── Complaints.ts     # Коллекция жалоб на нарушения
│   │   │   ├── Rubrics.ts        # Коллекция рубрик
│   │   │   └── Badges.ts         # Коллекция значков/наград
│   │   ├── globals/
│   │   │   └── SiteSettings.ts   # Глобальные настройки сайта
│   │   ├── app.ts                # Next.js приложение
│   │   └── payload.config.ts      # Конфигурация Payload CMS
│   │
│   ├── package.json              # Зависимости бэкенда
│   ├── .env.example              # Пример переменных окружения
│   ├── next.config.js            # Конфигурация Next.js
│   ├── tsconfig.json             # TypeScript конфигурация
│   ├── vitest.config.mts         # Конфигурация юнит-тестов
│   └── playwright.config.ts       # Конфигурация E2E тестов
│
├── frontend/
│   ├── app.vue                   # Корневой компонент
│   ├── pages/                    # Страницы приложения
│   ├── components/               # Переиспользуемые компоненты
│   ├── stores/                   # Pinia хранилища состояния
│   ├── package.json              # Зависимости фронтенда
│   ├── nuxt.config.ts            # Конфигурация Nuxt
│   └── tsconfig.json             # TypeScript конфигурация
│
├── .gitignore
├── README.md                     # Этот файл
└── package.json                  # Корневой package.json (если есть)
```

---

## 🔐 Переменные окружения

### Backend (Payload CMS)

| Переменная | Описание | Пример | Обязательна |
|---|---|---|---|
| `DATABASE_URI` | URI MongoDB | `mongodb://127.0.0.1/prosrochkapatrol` | ✅ |
| `PAYLOAD_SECRET` | Секретный ключ для CMS | `your_secret_key` | ✅ |
| `NODE_ENV` | Окружение (development/production) | `development` | ❌ |
| `SMTP_HOST` | Хост SMTP сервера | `smtp.gmail.com` | ❌ |
| `SMTP_PORT` | Порт SMTP | `587` | ❌ |
| `SMTP_USER` | Пользователь SMTP | `your_email@gmail.com` | ❌ |
| `SMTP_PASS` | Пароль SMTP | `your_app_password` | ❌ |

### Frontend (Nuxt)

| Переменная | Описание | Пример | Обязательна |
|---|---|---|---|
| `NUXT_PUBLIC_API_URL` | URL бэкенд API | `http://localhost:3000` | ❌ |
| `NUXT_HOST` | Хост фронтенда | `localhost` | ❌ |
| `NUXT_PORT` | Порт фронтенда | `3001` | ❌ |

### Production

На production сервере убедитесь, что установлены:

```env
NODE_ENV=production
PAYLOAD_SECRET=your_secure_production_secret
DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/prosrochkapatrol
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_app_password
```

### GitHub Actions и деплой

- `CI` запускается для `push` и `pull_request` в `main`, собирает frontend и проверяет backend (`lint`, `build`, `test:int`).
- `Deploy production` запускается для `push` в `main` и вручную через `workflow_dispatch`.
- Деплой теперь собирает production-артефакты в GitHub Actions и отправляет на сервер уже готовый bundle, без `npm install` и `npm run build` на проде.
- Перед включением деплоя в репозитории должны быть настроены secrets: `SSH_HOST`, `SSH_PORT`, `SSH_USER`, `SSH_KEY`.
- Workflow деплоя использует защиту от параллельных запусков и выполняет smoke-check backend (`/admin`) и frontend (`/`) после перезапуска PM2.

---

## 💻 Разработка

### Доступные команды

#### Backend

```bash
cd backend

# Разработка
pnpm run dev           # Запуск dev сервера
pnpm run devsafe       # Очистка .next и запуск dev сервера

# Production
pnpm run build         # Сборка приложения
pnpm run start         # Запуск продакшена

# CMS
pnpm run payload                    # Управление Payload CMS
pnpm run generate:types             # Генерация TypeScript типов
pnpm run generate:importmap         # Генерация import map

# Тестирование
pnpm run test:int      # Юнит тесты (Vitest)
pnpm run test:e2e      # E2E тесты (Playwright)
pnpm run test          # Все тесты

# Линтинг
pnpm run lint          # Проверка кода ESLint
```

#### Frontend

```bash
cd frontend

# Разработка
pnpm run dev           # Запуск dev сервера

# Production
pnpm run build         # Сборка для продакшена
pnpm run start         # Запуск продакшена (после build)
pnpm run generate      # Статическая генерация сайта
pnpm run preview       # Preview собранного приложения
```

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
collections: [Users, Media, Posts, Rubrics, Shops, Complaints, Badges, YourCollection],
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
3. Проходите все тесты перед PR (`pnpm run test`)
4. Обновляйте эту документацию при необходимости

---

## 📄 Лицензия

Copyright (c) 2026 Roman Troshin, Boris Stepanenko (FreshCheck). All rights reserved.

Все права защищены. Никакая часть данного исходного кода или связанных с ним файлов документации не может быть воспроизведена, распространена или использована в каких-либо целях без письменного разрешения правообладателей.

---

## 📞 Контакты

Проект: **FreshCheck** — Общественный мониторинг качества товаров

Репозиторий: [github.com/RostorVlasov/prosrochkapatrol](https://github.com/RostorVlasov/prosrochkapatrol)

---

**Последнее обновление**: май 2026
