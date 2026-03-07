Lifecycle Analysis

This document explains what happens step-by-step when different POST requests are sent to the /tasks endpoint. It describes the order that middleware runs, when the response is sent, and why the controller does or does not execute.

--------------------------------------------------

1. Valid POST Request to /tasks with Correct API Key

Example request:
POST /tasks
Headers:
x-api-key: 12345

Body:
{
  "title": "Finish homework",
  "description": "Complete middleware assignment"
}

Execution order:

1. The request first reaches the Express application.
2. The timing middleware runs first. It records the start time of the request so it can calculate how long the request takes.
3. The API key middleware runs next. It checks if the header "x-api-key" exists and if the value is "12345".
4. Since the key is correct, the middleware calls next() and allows the request to continue.
5. The validation middleware runs next. It checks if the request body includes the required fields such as title and description.
6. Since all required fields are present, the middleware calls next().
7. The controller function for creating a task executes.
8. The controller adds the new task to the tasks array and sends a JSON response with the created task.
9. The response is sent back to the client.
10. The timing middleware logs how long the request took to complete.

Why the controller executes:
The controller executes because all middleware checks passed successfully and each middleware called next().

--------------------------------------------------

2. POST /tasks Without Required Field

Example request:
POST /tasks
Headers:
x-api-key: 12345

Body:
{
  "title": "Missing fields"
}

Execution order:

1. The request reaches the Express application.
2. The timing middleware runs first and records the start time.
3. The API key middleware runs next and checks the API key.
4. The API key is correct, so next() is called.
5. The validation middleware runs next.
6. The validation middleware checks for required fields such as title and description.
7. The description field is missing, so the middleware sends a 400 error response.
8. The request stops here and the controller does not run.
9. The timing middleware still logs how long the request took.

When the response is sent:
The response is sent directly from the validation middleware when it detects the missing field.

Why the controller does not execute:
The controller does not run because the validation middleware did not call next() after detecting invalid input.

--------------------------------------------------

3. POST /tasks With Missing API Key

Example request:
POST /tasks

Body:
{
  "title": "Unauthorized request",
  "description": "Should fail"
}

Execution order:

1. The request reaches the Express application.
2. The timing middleware runs first and records the start time.
3. The API key middleware runs next.
4. The middleware checks for the x-api-key header but it is missing.
5. The middleware sends a 401 Unauthorized response.
6. The request stops and next() is not called.
7. The validation middleware never runs.
8. The controller never runs.
9. The timing middleware logs how long the request took.

When the response is sent:
The response is sent immediately by the API key middleware.

Why the controller does not execute:
The request fails the authorization check, so the request stops before reaching the controller.
