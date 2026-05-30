import type { BadgeDoc } from "./badges.types";
import type { PhotoMeta } from "./photo.types";

export interface Pagination {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number | null;
    page: number;
    pagingCounter: number;
    prevPage: number | null;
    totalDocs: number;
    totalPages: number;
}

export interface Author {
  id: number;
  avatar: PhotoMeta;
  name: string;
  role: string;
}

export interface AdminPanel {
  status: 'published' | 'pending' | 'rejected' | string
  final_comment?: string
  main_inspector_badge?: BadgeDoc
  compiler_badge?: BadgeDoc
  other_inspector_badges?: BadgeDoc[]
  created_by?: Author
  prev_check_status?: 'never' | 'done'
  last_check_date?: string
  total_checks_count?: number
}
 