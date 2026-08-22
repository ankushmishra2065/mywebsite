CREATE TABLE users (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(190) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  streak INT NOT NULL DEFAULT 0,
  last_active DATE NOT NULL,
  solved INT NOT NULL DEFAULT 0,
  correct INT NOT NULL DEFAULT 0,
  study_minutes INT NOT NULL DEFAULT 0,
  notes_json LONGTEXT NULL,
  performance_json LONGTEXT NULL,
  created_at DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE notes (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNSIGNED NOT NULL,
  title VARCHAR(200) NOT NULL,
  body TEXT NOT NULL,
  created_at DATETIME NOT NULL,
  INDEX(user_id),
  CONSTRAINT fk_notes_user FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE feedback (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNSIGNED NULL,
  name VARCHAR(120) NULL,
  email VARCHAR(190) NULL,
  type VARCHAR(60) NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME NOT NULL,
  INDEX(user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Optional improvement:
-- You can add separate tables for question attempts, chapter progress and notifications later.
