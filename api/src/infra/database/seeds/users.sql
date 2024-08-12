---- Seed data for the `user` table
INSERT INTO users (name, email, password, created_at, updated_at)
VALUES
('Alice Johnson', 'alice.johnson@example.com', 'hashed_password_1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Bob Smith', 'bob.smith@example.com', 'hashed_password_2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Charlie Brown', 'charlie.brown@example.com', 'hashed_password_3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

