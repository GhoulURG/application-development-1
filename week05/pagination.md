# Pagination & Filtering

## Endpoint Supporting Pagination

GET /posts

## Pagination Method

This API uses page and limit query parameters.

Example:

GET /posts?page=1&limit=5

- page: The page number of results.
- limit: Number of posts returned per page.

Example Response:

{
  "page": 1,
  "limit": 5,
  "totalItems": 22,
  "totalPages": 5,
  "data": [
    {
      "id": 1,
      "title": "First Post"
    },
    {
      "id": 2,
      "title": "Second Post"
    }
  ]
}
