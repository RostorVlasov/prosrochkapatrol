import type { Author, Pagination } from "./common.types"

export interface BadgeDoc {
    createdAt: string,
    updatedAt: string,
    code: string,
    type: 'P' | 'YOU',
    status: 'lost' | 'revoked' | 'active' | 'notUse',
    ownerName?: Author,
    comment?: string,
}

export interface BadgesResponse extends Pagination {
    docs: BadgeDoc[],
}
