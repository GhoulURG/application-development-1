# Resource Definitions

## Resource: users
Endpoint: /users  
Single: /users/{userId}  
Related: /users/{userId}/posts  

Relationship:
A user can create many posts and many comments.

---

## Resource: posts
Endpoint: /posts  
Single: /posts/{postId}  
Related: /posts/{postId}/comments  

Relationship:
A post belongs to one user and can have many comments.

---

## Resource: comments
Endpoint: /comments  
Single: /comments/{commentId}  

Relationship:
A comment belongs to one post and one user.
