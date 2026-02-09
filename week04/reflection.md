# Week 4 Reflection

## What was the original bug, and why did Node throw an error?
The original bug was a ReferenceError caused by the variable `discount` being used without being defined. Node threw an error because JavaScript requires all variables to be declared before use, and `discount` did not exist in the scope.

## How did logging help explain program behavior?
Logging made it easier to follow the program’s execution step by step. It showed the input values, when discounts were applied, and the final result, making the flow of logic much clearer without stepping through the code manually.

## Why is testing better than manually re-running the script?
Testing is better because it automatically verifies multiple scenarios consistently. Tests prevent regressions and ensure that future changes do not break existing functionality, which manual testing can easily miss.

## Which test would you keep if you could only keep one, and why?
I would keep the test that applies a discount when the total is greater than 100 because it validates the most important business rule in the program and ensures the core functionality works as intended.
