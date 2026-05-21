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
  status: "published" | "draft" | "archived" | string;
  published_at?: string;
  author?: Author;
}
