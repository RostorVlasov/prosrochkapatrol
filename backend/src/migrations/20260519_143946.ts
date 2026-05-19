import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`users_sessions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`created_at\` text,
  	\`expires_at\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_sessions_order_idx\` ON \`users_sessions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_sessions_parent_id_idx\` ON \`users_sessions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`avatar_id\` integer,
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
  	\`lock_until\` text,
  	FOREIGN KEY (\`avatar_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`users_avatar_idx\` ON \`users\` (\`avatar_id\`);`)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text,
  	\`uploaded_by_id\` integer,
  	\`ip_address\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric,
  	FOREIGN KEY (\`uploaded_by_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`media_uploaded_by_idx\` ON \`media\` (\`uploaded_by_id\`);`)
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`posts\` (
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
  await db.run(sql`CREATE INDEX \`posts_cover_idx\` ON \`posts\` (\`cover_id\`);`)
  await db.run(sql`CREATE INDEX \`posts_admin_panel_admin_panel_author_idx\` ON \`posts\` (\`admin_panel_author_id\`);`)
  await db.run(sql`CREATE INDEX \`posts_updated_at_idx\` ON \`posts\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`posts_created_at_idx\` ON \`posts\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`posts_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`rubrics_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`rubrics_id\`) REFERENCES \`rubrics\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`posts_rels_order_idx\` ON \`posts_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`posts_rels_parent_idx\` ON \`posts_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`posts_rels_path_idx\` ON \`posts_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`posts_rels_rubrics_id_idx\` ON \`posts_rels\` (\`rubrics_id\`);`)
  await db.run(sql`CREATE TABLE \`rubrics\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`rubrics_slug_idx\` ON \`rubrics\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`rubrics_updated_at_idx\` ON \`rubrics\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`rubrics_created_at_idx\` ON \`rubrics\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`shops_photos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`photo_id\` integer NOT NULL,
  	\`caption\` text,
  	FOREIGN KEY (\`photo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`shops\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`shops_photos_order_idx\` ON \`shops_photos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`shops_photos_parent_id_idx\` ON \`shops_photos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`shops_photos_photo_idx\` ON \`shops_photos\` (\`photo_id\`);`)
  await db.run(sql`CREATE TABLE \`shops\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`store_name\` text NOT NULL,
  	\`address\` text NOT NULL,
  	\`date_checked\` text NOT NULL,
  	\`reason_type\` text NOT NULL,
  	\`complaint_text\` text,
  	\`quality_total_deduction\` numeric,
  	\`quality_facts\` text,
  	\`quality_free_text\` text,
  	\`quality_violated_articles\` text,
  	\`quality_final_score\` numeric,
  	\`storage_has_violations\` integer,
  	\`storage_total_deduction\` numeric,
  	\`storage_facts\` text,
  	\`storage_free_text\` text,
  	\`storage_violated_articles\` text,
  	\`storage_final_score\` numeric,
  	\`total_score\` numeric,
  	\`advantages\` text,
  	\`disadvantages\` text,
  	\`inspector_comment\` text,
  	\`final_comment\` text,
  	\`admin_panel_status\` text DEFAULT 'pending',
  	\`admin_panel_created_by_id\` integer,
  	\`admin_panel_prev_check_status\` text,
  	\`admin_panel_last_check_date\` text,
  	\`admin_panel_total_checks_count\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`admin_panel_created_by_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`shops_admin_panel_admin_panel_created_by_idx\` ON \`shops\` (\`admin_panel_created_by_id\`);`)
  await db.run(sql`CREATE INDEX \`shops_updated_at_idx\` ON \`shops\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`shops_created_at_idx\` ON \`shops\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`complaints_problem_types\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`complaints\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`complaints_problem_types_order_idx\` ON \`complaints_problem_types\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`complaints_problem_types_parent_idx\` ON \`complaints_problem_types\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`complaints_photos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`photo_id\` integer NOT NULL,
  	FOREIGN KEY (\`photo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`complaints\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`complaints_photos_order_idx\` ON \`complaints_photos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`complaints_photos_parent_id_idx\` ON \`complaints_photos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`complaints_photos_photo_idx\` ON \`complaints_photos\` (\`photo_id\`);`)
  await db.run(sql`CREATE TABLE \`complaints\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`admin_panel_ip_address\` text,
  	\`admin_panel_status\` text DEFAULT 'new',
  	\`admin_panel_admin_note\` text,
  	\`store_address\` text NOT NULL,
  	\`problem_date\` text NOT NULL,
  	\`staff_contacted\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`complaints_updated_at_idx\` ON \`complaints\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`complaints_created_at_idx\` ON \`complaints\` (\`created_at\`);`)
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
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
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
  	\`badges_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`rubrics_id\`) REFERENCES \`rubrics\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`shops_id\`) REFERENCES \`shops\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`complaints_id\`) REFERENCES \`complaints\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`badges_id\`) REFERENCES \`badges\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_posts_id_idx\` ON \`payload_locked_documents_rels\` (\`posts_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_rubrics_id_idx\` ON \`payload_locked_documents_rels\` (\`rubrics_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_shops_id_idx\` ON \`payload_locked_documents_rels\` (\`shops_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_complaints_id_idx\` ON \`payload_locked_documents_rels\` (\`complaints_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_badges_id_idx\` ON \`payload_locked_documents_rels\` (\`badges_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`site_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`site_name\` text DEFAULT 'FreshCheck' NOT NULL,
  	\`site_description\` text,
  	\`logo_id\` integer,
  	\`favicon_id\` integer,
  	\`contact_email\` text,
  	\`contact_phone\` text,
  	\`address\` text,
  	\`working_hours\` text,
  	\`social_vk\` text,
  	\`social_telegram\` text,
  	\`social_youtube\` text,
  	\`seo_keywords\` text,
  	\`google_analytics_id\` text,
  	\`yandex_metrika_id\` text,
  	\`notification_email\` text,
  	\`telegram_bot_token\` text,
  	\`telegram_chat_id\` text,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`favicon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_logo_idx\` ON \`site_settings\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_favicon_idx\` ON \`site_settings\` (\`favicon_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`users_sessions\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`DROP TABLE \`media\`;`)
  await db.run(sql`DROP TABLE \`posts\`;`)
  await db.run(sql`DROP TABLE \`posts_rels\`;`)
  await db.run(sql`DROP TABLE \`rubrics\`;`)
  await db.run(sql`DROP TABLE \`shops_photos\`;`)
  await db.run(sql`DROP TABLE \`shops\`;`)
  await db.run(sql`DROP TABLE \`complaints_problem_types\`;`)
  await db.run(sql`DROP TABLE \`complaints_photos\`;`)
  await db.run(sql`DROP TABLE \`complaints\`;`)
  await db.run(sql`DROP TABLE \`badges\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
  await db.run(sql`DROP TABLE \`site_settings\`;`)
}
