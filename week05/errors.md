# Error Handling

## Standard Error Format

{
  "error": {
    "code": 400,
    "message": "Invalid request",
    "details": "Title field is required"
  }
}

---

## Error Cases

400 Bad Request  
Occurs when required fields are missing or formatted incorrectly.  
Example: Creating a post without a title.

404 Not Found  
Occurs when a resource does not exist.  
Example: GET /posts/999 when the post does not exist.

409 Conflict  
Occurs when a request conflicts with existing data.  
Example: Creating a user with a username that already exists.
