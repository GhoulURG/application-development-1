const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const timer = require("./middleware/timer");
const apiKeyAuth = require("./middleware/apiKeyAuth");

const taskRoutes = require("./routes/tasks");

// PORT
const PORT = 3000;


// 1️⃣ JSON Parsing Middleware
app.use(express.json());


// 2️⃣ Request Logger Middleware
app.use(logger);


// 3️⃣ Timing Middleware
app.use(timer);


// 4️⃣ Routes
// Apply API key middleware ONLY to modifying requests
app.use("/tasks", (req, res, next) => {
    if (req.method === "GET") {
        return next();
    }
    return apiKeyAuth(req, res, next);
}, taskRoutes);


// 5️⃣ 404 Handler (must be LAST)
app.use((req, res) => {
    res.status(404).json({
        error: {
            code: "NOT_FOUND",
            message: "Route not found"
        }
    });
});


// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
