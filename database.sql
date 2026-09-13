CREATE DATABASE IF NOT EXISTS mishraankush CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE mishraankush;

CREATE TABLE IF NOT EXISTS users (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  premium BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS study_progress (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNSIGNED NOT NULL,
  chapter_id VARCHAR(50) NOT NULL,
  progress TINYINT UNSIGNED NOT NULL DEFAULT 0,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY user_chapter (user_id, chapter_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS neb_news (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  source_url VARCHAR(500),
  published_at DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS premium_plans (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price_npr DECIMAL(10,2) NOT NULL,
  billing_period VARCHAR(20) NOT NULL,
  description TEXT
);

INSERT INTO premium_plans(name,price_npr,billing_period,description)
SELECT 'Student Pro',199,'month','Advanced practice, analytics, ad-free study area and extra AI usage'
WHERE NOT EXISTS (SELECT 1 FROM premium_plans WHERE name='Student Pro');

INSERT INTO premium_plans(name,price_npr,billing_period,description)
SELECT 'Annual',1999,'year','All Pro features and extended analytics'
WHERE NOT EXISTS (SELECT 1 FROM premium_plans WHERE name='Annual');
