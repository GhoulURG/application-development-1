# Task Management Database

## Overview

This database represents a simple task management system. It allows users to create projects, and each project can contain multiple tasks. The system is designed to organize work and track progress.

## Tables Created

- users
- projects
- tasks

## Relationships

Each user can create multiple projects, which is a one-to-many relationship. Each project can also contain multiple tasks, which is another one-to-many relationship.

## Primary Key Explanation

A primary key is a column that uniquely identifies each row in a table. In this database, each table has an "id" column that serves as the primary key. This ensures that every record can be uniquely identified.

## Foreign Key Explanation

A foreign key is a column that creates a relationship between two tables. It references the primary key of another table.

For example:
- projects.user_id references users.id
- tasks.project_id references projects.id

This ensures that each project is linked to a valid user and each task is linked to a valid project.
