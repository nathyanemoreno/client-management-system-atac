-- Seed data for the `user` table
INSERT INTO users (name, email, password, created_at, updated_at)
VALUES
('Alice Johnson', 'alice.johnson@example.com', 'hashed_password_1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Bob Smith', 'bob.smith@example.com', 'hashed_password_2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Charlie Brown', 'charlie.brown@example.com', 'hashed_password_3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Seed data for the `clientes` table
INSERT INTO client (name, email, phone, coordinate_x, coordinate_y, created_at, updated_at)
VALUES
('Client A', 'client.a@example.com', '+55 (11) 91234-5678', 10.1234, 20.5678, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Client B', 'client.b@example.com', '+55 (21) 98765-4321', 30.1234, 40.5678, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Client C', 'client.c@example.com', '+55 (31) 99876-5432', 50.1234, 60.5678, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
