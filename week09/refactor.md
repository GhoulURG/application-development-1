```markdown
# Code Refactoring Improvements

## Improvement 1 – Extracted Validation Logic

Before:
Validation logic was directly inside the controller. This made the controller longer and harder to read.

After:
Validation was moved into a separate middleware file.

Why it improves quality:
Separating validation from controllers follows better separation of concerns and makes the controller easier to maintain.

---

## Improvement 2 – Improved Variable Naming

Before:
Some variables used short or unclear names such as "t" or "reqBody".

After:
Variables were renamed to clearer names such as "task", "taskData", and "taskId".

Why it improves quality:
Clear naming makes the code easier for other developers to understand and maintain.

---

## Improvement 3 – Simplified Conditional Logic

Before:
Some functions used nested if statements which made the logic harder to follow.

Example:

if(task){
   if(task.completed){
      ...
   }
}

After:
The logic was simplified with early returns.

Example:

if(!task){
   return errorResponse
}

Why it improves quality:
Reducing nested conditions improves readability and reduces complexity.
