import type { PayloadRequest } from 'payload'
import type { IncomingMessage } from 'http'

export function getIP(req: PayloadRequest): string {
  console.log((
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    (req as unknown as IncomingMessage).socket?.remoteAddress ||
    'unknown'
  ))


  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    (req as unknown as IncomingMessage).socket?.remoteAddress ||
    'unknown'
  )
}