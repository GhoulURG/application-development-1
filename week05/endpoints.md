# API Endpoints

## POSTS

GET /posts  
Purpose: Retrieve a list of all blog posts.  
Returns: 200 OK  

GET /posts/{postId}  
Purpose: Retrieve a single blog post by ID.  
Returns: 200 OK  

POST /posts  
Purpose: Create a new blog post.  
Returns: 201 Created  

PATCH /posts/{postId}  
Purpose: Update part of an existing blog post (such as title or content).  
Returns: 200 OK  

DELETE /posts/{postId}  
Purpose: Delete a blog post.  
Returns: 204 No Content  

---

## USERS

GET /users  
Purpose: Retrieve a list of users.  
Returns: 200 OK  

GET /users/{userId}  
Purpose: Retrieve a specific user profile.  
Returns: 200 OK  

POST /users  
Purpose: Create a new user account.  
Returns: 201 Created  

---

## COMMENTS

GET /posts/{postId}/comments  
Purpose: Retrieve all comments for a specific post.  
Returns: 200 OK  

POST /comments  
Purpose: Create a new comment on a post.  
Returns: 201 Created  

DELETE /comments/{commentId}  
Purpose: Delete a comment.  
Returns: 204 No Content  
