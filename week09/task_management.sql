-- Create database
CREATE DATABASE task_management_db;

-- Use database
USE task_management_db;

-- =========================
-- Create Tables
-- =========================

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL,
    project_id INT,
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

-- =========================
-- Insert Sample Data
-- =========================

-- Users (3+)
INSERT INTO users (name, email) VALUES
('Alice Johnson', 'alice@example.com'),
('Bob Smith', 'bob@example.com'),
('Charlie Brown', 'charlie@example.com');

-- Projects (3+)
INSERT INTO projects (name, description, user_id) VALUES
('Website Redesign', 'Update company website', 1),
('Mobile App', 'Develop new mobile app', 2),
('Database Setup', 'Design database schema', 3);

-- Tasks (5+)
INSERT INTO tasks (title, status, project_id) VALUES
('Create homepage layout', 'in progress', 1),
('Fix navigation bugs', 'completed', 1),
('Design login screen', 'in progress', 2),
('Implement API integration', 'pending', 2),
('Create database tables', 'completed', 3),
('Test database connections', 'pending', 3);

-- =========================
-- Queries
-- =========================

-- Query 1: Show all users
SELECT * FROM users;

-- Query 2: Show all projects
SELECT * FROM projects;

-- Query 3: Show all tasks
SELECT * FROM tasks;

-- Query 4: Tasks with project names (JOIN)
SELECT 
    tasks.title,
    tasks.status,
    projects.name AS project_name
FROM tasks
JOIN projects ON tasks.project_id = projects.id;

-- Query 5: Projects with user names (JOIN)
SELECT 
    projects.name AS project_name,
    users.name AS user_name
FROM projects
JOIN users ON projects.user_id = users.id;

-- Query 6: Only completed tasks
SELECT * FROM tasks
WHERE status = 'completed';

-- Query 7: Tasks sorted alphabetically
SELECT * FROM tasks
ORDER BY title ASC;
