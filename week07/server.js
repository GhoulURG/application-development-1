const express = require("express");
const app = express();

const timer = require("./middleware/timer");

const postsRoutes = require("./routes/posts");
const usersRoutes = require("./routes/users");

app.use(express.json());
app.use(timer);

app.use("/posts", postsRoutes);
app.use("/users", usersRoutes);

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
