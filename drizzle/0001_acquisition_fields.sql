ALTER TABLE `inquiries` ADD `client_type` text DEFAULT '未分類' NOT NULL;
ALTER TABLE `inquiries` ADD `reference_url` text DEFAULT '' NOT NULL;
CREATE TABLE `analytics_events` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `event` text NOT NULL,
  `path` text NOT NULL,
  `created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
