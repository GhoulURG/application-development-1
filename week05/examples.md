# Example Requests & Responses

## Example 1 — Create a Post

Request:

POST /posts  
Content-Type: application/json  

{
  "title": "Why REST APIs Matter",
  "content": "REST APIs provide structure and scalability...",
  "authorId": 1
}

Response:

Status: 201 Created  

{
  "id": 10,
  "title": "Why REST APIs Matter",
  "content": "REST APIs provide structure and scalability...",
  "authorId": 1,
  "createdAt": "2026-02-15T20:30:00Z"
}

---

## Example 2 — Get a Single Post

Request:

GET /posts/10  

Response:

Status: 200 OK  

{
  "id": 10,
  "title": "Why REST APIs Matter",
  "content": "REST APIs provide structure and scalability...",
  "author": {
    "id": 1,
    "username": "jhill"
  },
  "createdAt": "2026-02-15T20:30:00Z"
}

---

## Example 3 — Create a Comment

Request:

POST /comments  
Content-Type: application/json  

{
  "postId": 10,
  "userId": 2,
  "content": "Great explanation! This really helped."
}

Response:

Status: 201 Created  

{
  "id": 25,
  "postId": 10,
  "userId": 2,
  "content": "Great explanation! This really helped.",
  "createdAt": "2026-02-15T21:00:00Z"
}
