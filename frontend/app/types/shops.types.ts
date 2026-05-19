import type { AdminPanel, Pagination } from "./common.types";
import type { Photo } from "./photo.types";

export interface ShopDoc {
  id: number;
  store_name: string;
  address: string;
  date_checked: string; // ISO 8601 Date string
  reason_type: "planned" | "complaint";
  complaint_text: string | null;
  
  quality_total_deduction: number;
  quality_facts: string[];
  quality_free_text: string;
  quality_violated_articles: string[];
  quality_final_score: number;
  
  storage_has_violations: boolean;
  storage_total_deduction: number;
  storage_facts: string[] | null;
  storage_free_text: string | null;
  storage_violated_articles: string[] | null;
  storage_final_score: number;
  
  total_score: number;
  
  advantages: string[];
  disadvantages: string[];
  inspector_comment: string;
  
  photos: Photo[];
  admin_panel: AdminPanel;
  
  updatedAt: string; // ISO 8601 Date string
  createdAt: string; // ISO 8601 Date string
}

export interface ShopsResponse extends Pagination {
  docs: ShopDoc[];
}