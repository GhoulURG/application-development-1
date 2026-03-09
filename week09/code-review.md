# Code Review Reflection

## Hardest Parts of the Code to Read

The controllers were the hardest part to read initially because they contained validation logic, response formatting, and task operations all in the same place.

Separating validation into middleware helped make the controllers easier to follow.

---

## Where Logic Was Duplicated

Error handling logic appeared multiple times across controllers. For example, checking if a task existed was repeated in several functions.

This could be improved further by extracting helper functions.

---

## Naming Improvements

Several variable names were improved to make the code clearer.

Examples:
- t → task
- reqBody → taskData
- id → taskId

These changes help make the code more understandable for other developers.

---

## Missing Documentation

Before this assignment, the project did not have detailed documentation explaining:

- how to run the server
- how authentication works
- example requests
- expected responses

Adding README and API documentation makes the project easier to use.

---

## What Might Confuse Another Developer

Another developer might be confused about:

- the API key requirement for certain routes
- how middleware order affects request handling
- where validation is performed

Clear documentation and consistent folder structure helps reduce that confusion.
