import type { Pagination } from "./common.types";

export interface Rubric {
    id: number,
    name: string,
    slug: string,
    updatedAt: string,
    createdAt: string,
}
export interface RubricsResponse extends Pagination {
    docs: Rubric[]
}

