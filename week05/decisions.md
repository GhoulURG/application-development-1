# Design Decisions

## Why I Chose These Resources

I chose users, posts, and comments because they represent the core structure of a blog platform. These resources reflect real-world relationships between authors and readers while keeping the design simple and scalable.

## Why I Chose PATCH Instead of PUT

I chose PATCH for updates because blog posts are often edited partially (such as updating only the title or content). PATCH allows flexible updates without requiring the entire resource to be replaced.

## How the API Avoids Breaking Clients

The API uses consistent URL naming, clear status codes, and standard JSON formats. New fields can be added later without removing existing ones, which helps maintain backward compatibility.

## One Tradeoff I Made

I chose page-based pagination instead of cursor-based pagination because it is easier to implement and understand. While cursor pagination scales better for large datasets, page-based pagination is sufficient for a simple blog system.
