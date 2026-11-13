/**
 * Find outdated references to the former Retail Sale Rules (Resolution No. 2463).
 *
 * Usage (from backend/ on an environment with DATABASE_URI):
 *   pnpm exec tsx scripts/audit-2463.ts
 *
 * Read-only. This script NEVER rewrites editorial or historical content:
 * citations to No. 2463 can be correct for events before 1 September 2026.
 * The current Retail Sale Rules are approved by Resolution No. 657 of 30 May 2026.
 */
import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'

const PATTERN = /2463|31\.12\.2020/gi
type Hit = { collection: string; id: string; date: string | null; path: string; excerpt: string }

function scan(value: unknown, path: string, hits: Omit<Hit, 'collection' | 'id' | 'date'>[]): void {
  if (typeof value === 'string') {
    PATTERN.lastIndex = 0
    let match: RegExpExecArray | null
    while ((match = PATTERN.exec(value)) !== null) {
      const from = Math.max(0, match.index - 95)
      const to = Math.min(value.length, match.index + match[0].length + 115)
      hits.push({ path, excerpt: value.slice(from, to).replace(/\s+/g, ' ') })
    }
  } else if (Array.isArray(value)) {
    value.forEach((item, index) => scan(item, `${path}[${index}]`, hits))
  } else if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      // Fields with population metadata or internal identifiers are not editorial text.
      if (['id', 'createdAt', 'updatedAt'].includes(key)) continue
      scan(child, path ? `${path}.${key}` : key, hits)
    }
  }
}

async function main(): Promise<void> {
  if (!process.env.DATABASE_URI) throw new Error('DATABASE_URI is required for read-only CMS audit')
  const payload = await getPayload({ config })
  const hits: Hit[] = []
  for (const collection of ['posts', 'shops'] as const) {
      let page = 1
      for (;;) {
        const result = await payload.find({ collection, limit: 100, page, depth: 0, overrideAccess: true })
        for (const document of result.docs) {
          const documentHits: Omit<Hit, 'collection' | 'id' | 'date'>[] = []
          scan(document, '', documentHits)
          const date = collection === 'posts'
            ? (document as { admin_panel?: { published_at?: string } }).admin_panel?.published_at
            : (document as { date_checked?: string }).date_checked
          for (const hit of documentHits) {
            hits.push({ collection, id: String(document.id), date: date || null, ...hit })
          }
        }
        if (!result.hasNextPage) break
        page += 1
      }
    }
    console.log(JSON.stringify({
      checkedCollections: ['posts', 'shops'],
      totalMatches: hits.length,
      notice: 'Read-only findings. Preserve accurate historical legal references; current legal guidance uses Resolution No. 657, paragraph 2 of the Rules.',
      hits,
    }, null, 2))
  // Payload may retain database connections in this standalone process.
  process.exit(0)
}
main().catch((error) => { console.error(error); process.exit(1) })
