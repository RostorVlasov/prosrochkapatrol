interface AttemptRecord {
  shortCount: number
  shortResetAt: number
  dailyCount: number
  dailyResetAt: number
  bannedUntil?: number
}

const store = new Map<string, AttemptRecord>()

const SHORT_WINDOW_MS = 10 * 60 * 1000   // 10 минут
const SHORT_LIMIT = 5                     // макс попыток за 10 минут
const DAILY_WINDOW_MS = 24 * 60 * 60 * 1000
const DAILY_LIMIT = 50                    // макс попыток за день
const BAN_DURATION_MS = 24 * 60 * 60 * 1000 // бан на сутки

export type RateLimitResult =
  | { allowed: true }
  | { allowed: false; reason: string; retryAfter: number }

export function checkLoginRateLimit(ip: string): RateLimitResult {
  const now = Date.now()
  const record = store.get(ip) ?? {
    shortCount: 0,
    shortResetAt: now + SHORT_WINDOW_MS,
    dailyCount: 0,
    dailyResetAt: now + DAILY_WINDOW_MS,
  }

  if (record.bannedUntil && now < record.bannedUntil) {
    const retryAfter = Math.ceil((record.bannedUntil - now) / 1000)
    return {
      allowed: false,
      reason: `Слишком много неудачных попыток. Бан до ${new Date(record.bannedUntil).toLocaleTimeString('ru-RU')}`,
      retryAfter,
    }
  }

  if (now > record.shortResetAt) {
    record.shortCount = 0
    record.shortResetAt = now + SHORT_WINDOW_MS
  }

  if (now > record.dailyResetAt) {
    record.dailyCount = 0
    record.dailyResetAt = now + DAILY_WINDOW_MS
    delete record.bannedUntil
  }

  record.shortCount++
  record.dailyCount++
  store.set(ip, record)

  if (record.dailyCount > DAILY_LIMIT) {
    record.bannedUntil = now + BAN_DURATION_MS
    store.set(ip, record)
    return {
      allowed: false,
      reason: 'Превышен дневной лимит попыток входа. Бан на 24 часа.',
      retryAfter: BAN_DURATION_MS / 1000,
    }
  }

  if (record.shortCount > SHORT_LIMIT) {
    const retryAfter = Math.ceil((record.shortResetAt - now) / 1000)
    return {
      allowed: false,
      reason: `Слишком много попыток. Подождите ${Math.ceil(retryAfter / 60)} мин.`,
      retryAfter,
    }
  }

  return { allowed: true }
}

export function resetLoginAttempts(ip: string): void {
  store.delete(ip)
}