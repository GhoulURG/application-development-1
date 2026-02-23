const express = require("express");
const app = express();

const postsRoutes = require("./routes/posts");
const usersRoutes = require("./routes/users");
const logger = require("./middleware/logger");

// JSON parsing
app.use(express.json());

// Logger middleware
app.use(logger);

// Routes
app.use("/posts", postsRoutes);
app.use("/users", usersRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: "Route not found"
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
