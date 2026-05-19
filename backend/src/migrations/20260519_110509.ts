import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`badges\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`code\` text NOT NULL,
  	\`type\` text NOT NULL,
  	\`owner_name_id\` integer,
  	\`status\` text DEFAULT 'active',
  	\`comment\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`owner_name_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`badges_code_idx\` ON \`badges\` (\`code\`);`)
  await db.run(sql`CREATE INDEX \`badges_owner_name_idx\` ON \`badges\` (\`owner_name_id\`);`)
  await db.run(sql`CREATE INDEX \`badges_updated_at_idx\` ON \`badges\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`badges_created_at_idx\` ON \`badges\` (\`created_at\`);`)
  await db.run(sql`DROP TABLE \`posts_images\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_posts\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`body\` text NOT NULL,
  	\`cover_id\` integer,
  	\`admin_panel_status\` text DEFAULT 'draft',
  	\`admin_panel_published_at\` text,
  	\`admin_panel_author_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`admin_panel_author_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_posts\`("id", "title", "body", "cover_id", "admin_panel_status", "admin_panel_published_at", "admin_panel_author_id", "updated_at", "created_at") SELECT "id", "title", "body", "cover_id", "admin_panel_status", "admin_panel_published_at", "admin_panel_author_id", "updated_at", "created_at" FROM \`posts\`;`)
  await db.run(sql`DROP TABLE \`posts\`;`)
  await db.run(sql`ALTER TABLE \`__new_posts\` RENAME TO \`posts\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`posts_cover_idx\` ON \`posts\` (\`cover_id\`);`)
  await db.run(sql`CREATE INDEX \`posts_admin_panel_admin_panel_author_idx\` ON \`posts\` (\`admin_panel_author_id\`);`)
  await db.run(sql`CREATE INDEX \`posts_updated_at_idx\` ON \`posts\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`posts_created_at_idx\` ON \`posts\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`__new_shops\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`store_name\` text NOT NULL,
  	\`address\` text NOT NULL,
  	\`date_checked\` text NOT NULL,
  	\`reason_type\` text NOT NULL,
  	\`complaint_text\` text,
  	\`quality_total_deduction\` numeric,
  	\`quality_final_score\` numeric,
  	\`quality_facts\` text,
  	\`quality_free_text\` text,
  	\`quality_violated_articles\` text,
  	\`storage_has_violations\` integer,
  	\`storage_total_deduction\` numeric,
  	\`storage_facts\` text,
  	\`storage_free_text\` text,
  	\`storage_violated_articles\` text,
  	\`storage_final_score\` numeric,
  	\`inspector_comment\` text,
  	\`final_comment\` text,
  	\`admin_panel_status\` text DEFAULT 'pending',
  	\`admin_panel_created_by_id\` integer,
  	\`admin_panel_total_score\` numeric,
  	\`admin_panel_advantages\` text,
  	\`admin_panel_disadvantages\` text,
  	\`admin_panel_prev_check_status\` text,
  	\`admin_panel_last_check_date\` text,
  	\`admin_panel_total_checks_count\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`admin_panel_created_by_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_shops\`("id", "store_name", "address", "date_checked", "reason_type", "complaint_text", "quality_total_deduction", "quality_final_score", "quality_facts", "quality_free_text", "quality_violated_articles", "storage_has_violations", "storage_total_deduction", "storage_facts", "storage_free_text", "storage_violated_articles", "storage_final_score", "inspector_comment", "final_comment", "admin_panel_status", "admin_panel_created_by_id", "admin_panel_total_score", "admin_panel_advantages", "admin_panel_disadvantages", "admin_panel_prev_check_status", "admin_panel_last_check_date", "admin_panel_total_checks_count", "updated_at", "created_at") SELECT "id", "store_name", "address", "date_checked", "reason_type", "complaint_text", "quality_total_deduction", "quality_final_score", "quality_facts", "quality_free_text", "quality_violated_articles", "storage_has_violations", "storage_total_deduction", "storage_facts", "storage_free_text", "storage_violated_articles", "storage_final_score", "inspector_comment", "final_comment", "admin_panel_status", "admin_panel_created_by_id", "admin_panel_total_score", "admin_panel_advantages", "admin_panel_disadvantages", "admin_panel_prev_check_status", "admin_panel_last_check_date", "admin_panel_total_checks_count", "updated_at", "created_at" FROM \`shops\`;`)
  await db.run(sql`DROP TABLE \`shops\`;`)
  await db.run(sql`ALTER TABLE \`__new_shops\` RENAME TO \`shops\`;`)
  await db.run(sql`CREATE INDEX \`shops_admin_panel_admin_panel_created_by_idx\` ON \`shops\` (\`admin_panel_created_by_id\`);`)
  await db.run(sql`CREATE INDEX \`shops_updated_at_idx\` ON \`shops\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`shops_created_at_idx\` ON \`shops\` (\`created_at\`);`)
  await db.run(sql`ALTER TABLE \`users\` ADD \`avatar_id\` integer REFERENCES media(id);`)
  await db.run(sql`CREATE INDEX \`users_avatar_idx\` ON \`users\` (\`avatar_id\`);`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`ip_address\` text;`)
  await db.run(sql`ALTER TABLE \`complaints\` ADD \`ip_address\` text;`)
  await db.run(sql`ALTER TABLE \`complaints\` DROP COLUMN \`email\`;`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`badges_id\` integer REFERENCES badges(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_badges_id_idx\` ON \`payload_locked_documents_rels\` (\`badges_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`posts_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`caption\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`posts_images_order_idx\` ON \`posts_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`posts_images_parent_id_idx\` ON \`posts_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`posts_images_image_idx\` ON \`posts_images\` (\`image_id\`);`)
  await db.run(sql`DROP TABLE \`badges\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`role\` text DEFAULT 'inspector' NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text
  );
  `)
  await db.run(sql`INSERT INTO \`__new_users\`("id", "name", "role", "updated_at", "created_at", "email", "reset_password_token", "reset_password_expiration", "salt", "hash", "login_attempts", "lock_until") SELECT "id", "name", "role", "updated_at", "created_at", "email", "reset_password_token", "reset_password_expiration", "salt", "hash", "login_attempts", "lock_until" FROM \`users\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`ALTER TABLE \`__new_users\` RENAME TO \`users\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`__new_posts\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`body\` text NOT NULL,
  	\`cover_id\` integer,
  	\`cover_ratio\` text DEFAULT '19/6',
  	\`status\` text DEFAULT 'draft' NOT NULL,
  	\`published_at\` text,
  	\`author_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`author_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_posts\`("id", "title", "body", "cover_id", "cover_ratio", "status", "published_at", "author_id", "updated_at", "created_at") SELECT "id", "title", "body", "cover_id", "cover_ratio", "status", "published_at", "author_id", "updated_at", "created_at" FROM \`posts\`;`)
  await db.run(sql`DROP TABLE \`posts\`;`)
  await db.run(sql`ALTER TABLE \`__new_posts\` RENAME TO \`posts\`;`)
  await db.run(sql`CREATE INDEX \`posts_cover_idx\` ON \`posts\` (\`cover_id\`);`)
  await db.run(sql`CREATE INDEX \`posts_author_idx\` ON \`posts\` (\`author_id\`);`)
  await db.run(sql`CREATE INDEX \`posts_updated_at_idx\` ON \`posts\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`posts_created_at_idx\` ON \`posts\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`__new_shops\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`store_name\` text NOT NULL,
  	\`address\` text NOT NULL,
  	\`status\` text DEFAULT 'pending' NOT NULL,
  	\`created_by_id\` integer,
  	\`total_score\` numeric,
  	\`quality_score\` numeric,
  	\`storage_score\` numeric,
  	\`advantages\` text,
  	\`disadvantages\` text,
  	\`date_checked\` text,
  	\`reason_type\` text,
  	\`complaint_text\` text,
  	\`prev_check_status\` text,
  	\`last_check_date\` text,
  	\`total_checks_count\` numeric,
  	\`quality_start_score\` numeric,
  	\`quality_facts\` text,
  	\`quality_total_deduction\` numeric,
  	\`quality_final_score\` numeric,
  	\`quality_free_text\` text,
  	\`quality_violated_articles\` text,
  	\`storage_has_violations\` integer,
  	\`storage_facts\` text,
  	\`storage_total_deduction\` numeric,
  	\`storage_final_score\` numeric,
  	\`storage_free_text\` text,
  	\`storage_violated_articles\` text,
  	\`inspector_comment\` text,
  	\`final_comment\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`created_by_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_shops\`("id", "store_name", "address", "status", "created_by_id", "total_score", "quality_score", "storage_score", "advantages", "disadvantages", "date_checked", "reason_type", "complaint_text", "prev_check_status", "last_check_date", "total_checks_count", "quality_start_score", "quality_facts", "quality_total_deduction", "quality_final_score", "quality_free_text", "quality_violated_articles", "storage_has_violations", "storage_facts", "storage_total_deduction", "storage_final_score", "storage_free_text", "storage_violated_articles", "inspector_comment", "final_comment", "updated_at", "created_at") SELECT "id", "store_name", "address", "status", "created_by_id", "total_score", "quality_score", "storage_score", "advantages", "disadvantages", "date_checked", "reason_type", "complaint_text", "prev_check_status", "last_check_date", "total_checks_count", "quality_start_score", "quality_facts", "quality_total_deduction", "quality_final_score", "quality_free_text", "quality_violated_articles", "storage_has_violations", "storage_facts", "storage_total_deduction", "storage_final_score", "storage_free_text", "storage_violated_articles", "inspector_comment", "final_comment", "updated_at", "created_at" FROM \`shops\`;`)
  await db.run(sql`DROP TABLE \`shops\`;`)
  await db.run(sql`ALTER TABLE \`__new_shops\` RENAME TO \`shops\`;`)
  await db.run(sql`CREATE INDEX \`shops_created_by_idx\` ON \`shops\` (\`created_by_id\`);`)
  await db.run(sql`CREATE INDEX \`shops_updated_at_idx\` ON \`shops\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`shops_created_at_idx\` ON \`shops\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	\`posts_id\` integer,
  	\`rubrics_id\` integer,
  	\`shops_id\` integer,
  	\`complaints_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`rubrics_id\`) REFERENCES \`rubrics\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`shops_id\`) REFERENCES \`shops\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`complaints_id\`) REFERENCES \`complaints\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "users_id", "media_id", "posts_id", "rubrics_id", "shops_id", "complaints_id") SELECT "id", "order", "parent_id", "path", "users_id", "media_id", "posts_id", "rubrics_id", "shops_id", "complaints_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_posts_id_idx\` ON \`payload_locked_documents_rels\` (\`posts_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_rubrics_id_idx\` ON \`payload_locked_documents_rels\` (\`rubrics_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_shops_id_idx\` ON \`payload_locked_documents_rels\` (\`shops_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_complaints_id_idx\` ON \`payload_locked_documents_rels\` (\`complaints_id\`);`)
  await db.run(sql`ALTER TABLE \`complaints\` ADD \`email\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`complaints\` DROP COLUMN \`ip_address\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`ip_address\`;`)
}
