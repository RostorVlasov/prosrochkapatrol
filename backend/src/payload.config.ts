import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
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

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
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
  collections: [Users, Media, Posts, Rubrics, Shops, Complaints],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  i18n: {
    supportedLanguages: { en, ru },
    fallbackLanguage: 'ru',
  },
  plugins: [],
})
