import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import nodemailer from 'nodemailer'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { ru } from '@payloadcms/translations/languages/ru'
import { en } from '@payloadcms/translations/languages/en'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Rubrics } from './collections/Rubrics'
import { Shops } from './collections/Shops'
import { Complaints } from './collections/Complaints'
import { Badges } from './collections/Badges'
import { SiteSettings } from './globals/SiteSettings'
import { PushSubscriptions } from './collections/PushSubscriptionsWeb'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  globals: [SiteSettings],
  serverURL: 'https://api.freshcheckastra.ru',
  cors: [
    'http://localhost:4001',
    'https://freshcheckastra.ru',
    'http://192.168.0.212:4001',
    '*',
  ],
  admin: {
    components: {
      providers: ['./app/components/AvatarOverrideProvider'],
      graphics: {
        Logo: './app/components/Logo',
        Icon: './app/components/Icon',
      },
    },
    meta: {
      titleSuffix: 'FreshCheck CMS',
      icons: [
        {
          url: '/logo.png',
        },
      ],
    },
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts, Rubrics, Shops, Complaints, Badges, PushSubscriptions],
  email: nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_USER!,
    defaultFromName: 'FreshCheck',
    transport: nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      authMethod: 'LOGIN',
    } as any),
  }),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI as string,
  }),
  sharp,
  i18n: {
    supportedLanguages: { en, ru },
    fallbackLanguage: 'ru',
  },
  plugins: [],
})
