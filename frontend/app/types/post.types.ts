import type { Pagination, PostsAdminPanel } from "./common.types";
import type { DocBody } from "./lexical.types";
import type { PhotoMeta } from "./photo.types";
import type { Rubric } from "./rubrics.types";

export interface PostDoc {
  id: number;
  title: string;
  body: DocBody;
  cover?: PhotoMeta;
  rubrics?: Rubric[];
  admin_panel: PostsAdminPanel;
  updatedAt: string;
  createdAt: string;
}

export interface PostsResponse extends Pagination {
  docs: PostDoc[];
}