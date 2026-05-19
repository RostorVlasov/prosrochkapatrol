import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`shops\` ADD \`total_score\` numeric;`)
  await db.run(sql`ALTER TABLE \`shops\` ADD \`advantages\` text;`)
  await db.run(sql`ALTER TABLE \`shops\` ADD \`disadvantages\` text;`)
  await db.run(sql`ALTER TABLE \`shops\` DROP COLUMN \`admin_panel_total_score\`;`)
  await db.run(sql`ALTER TABLE \`shops\` DROP COLUMN \`admin_panel_advantages\`;`)
  await db.run(sql`ALTER TABLE \`shops\` DROP COLUMN \`admin_panel_disadvantages\`;`)
  await db.run(sql`ALTER TABLE \`complaints\` ADD \`admin_panel_ip_address\` text;`)
  await db.run(sql`ALTER TABLE \`complaints\` ADD \`admin_panel_status\` text DEFAULT 'new';`)
  await db.run(sql`ALTER TABLE \`complaints\` ADD \`admin_panel_admin_note\` text;`)
  await db.run(sql`ALTER TABLE \`complaints\` DROP COLUMN \`ip_address\`;`)
  await db.run(sql`ALTER TABLE \`complaints\` DROP COLUMN \`status\`;`)
  await db.run(sql`ALTER TABLE \`complaints\` DROP COLUMN \`admin_note\`;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`shops\` ADD \`admin_panel_total_score\` numeric;`)
  await db.run(sql`ALTER TABLE \`shops\` ADD \`admin_panel_advantages\` text;`)
  await db.run(sql`ALTER TABLE \`shops\` ADD \`admin_panel_disadvantages\` text;`)
  await db.run(sql`ALTER TABLE \`shops\` DROP COLUMN \`total_score\`;`)
  await db.run(sql`ALTER TABLE \`shops\` DROP COLUMN \`advantages\`;`)
  await db.run(sql`ALTER TABLE \`shops\` DROP COLUMN \`disadvantages\`;`)
  await db.run(sql`ALTER TABLE \`complaints\` ADD \`ip_address\` text;`)
  await db.run(sql`ALTER TABLE \`complaints\` ADD \`status\` text DEFAULT 'new';`)
  await db.run(sql`ALTER TABLE \`complaints\` ADD \`admin_note\` text;`)
  await db.run(sql`ALTER TABLE \`complaints\` DROP COLUMN \`admin_panel_ip_address\`;`)
  await db.run(sql`ALTER TABLE \`complaints\` DROP COLUMN \`admin_panel_status\`;`)
  await db.run(sql`ALTER TABLE \`complaints\` DROP COLUMN \`admin_panel_admin_note\`;`)
}
