import type { AdminPanel, Author, Pagination } from './common.types'
import type { Photo, PhotoMeta } from './photo.types'


export interface ShopDoc {
  id: number
  store_name: string
  address: string
  district?: string
  microdistrict?: string
  geo_lat?: string
  geo_lon?: string
  date_checked: string

  reason_type: 'planned' | 'complaint'
  complaint_text?: string | null

  main_inspector?: Author
  compiler?: Author
  other_inspectors?: { inspector: Author }[]
  operator?: Author

  quality_total_deduction: number
  quality_facts?: string[]
  quality_free_text?: string
  quality_violated_articles?: string[]
  quality_final_score: number

  storage_has_violations: boolean
  storage_total_deduction?: number
  storage_facts?: string[] | null
  storage_free_text?: string | null
  storage_violated_articles?: string[] | null
  storage_final_score: number

  total_score: number

  advantages?: string[]
  disadvantages?: string[]
  inspector_comment?: string
  shop_photo: PhotoMeta
  photos?: Photo[]
  admin_panel: AdminPanel

  updatedAt: string
  createdAt: string
}

export interface ShopsResponse extends Pagination {
  docs: ShopDoc[]
}