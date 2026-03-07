Middleware Order Experiment

For this experiment I intentionally changed the order of middleware in my Express application to see how it affected the behavior of the program.

--------------------------------------------------

What I Changed

Originally the middleware order was:

1. Timing middleware
2. API key middleware
3. Validation middleware
4. Controller

For the experiment, I moved the API key middleware AFTER the controller.

The new order looked like this:

1. Timing middleware
2. Validation middleware
3. Controller
4. API key middleware

--------------------------------------------------

What Broke

After changing the order, POST requests were able to create tasks even if the API key was missing or incorrect.

This meant unauthorized users could modify the data, which should not happen.

--------------------------------------------------

Why It Broke

Middleware runs in the order it is defined in Express.

Because the controller ran before the API key middleware, the request reached the controller and executed the task creation logic before the API key check occurred.

By the time the API key middleware ran, the task had already been created.

This defeated the purpose of the authorization check.

--------------------------------------------------

Error or Behavior Observed

No technical error was thrown, but the behavior of the application was incorrect.

The API security was bypassed because the controller executed before the authorization middleware.

--------------------------------------------------

How I Fixed It

I moved the API key middleware back before the controller.

The correct order is:

1. Timing middleware
2. API key middleware
3. Validation middleware
4. Controller

Now the API key is checked before the controller executes, which ensures that unauthorized requests are blocked before any data is modified.
