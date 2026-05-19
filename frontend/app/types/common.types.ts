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

export interface AdminPanel {
  status: "published" | "draft" | "archived" | string;
}