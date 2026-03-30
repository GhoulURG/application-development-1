const pool = require("../db");

// GET /tasks
exports.getAllTasks = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tasks");
    res.json(rows);
  } catch (err) {
    res.status(500).json({
      error: { code: "SERVER_ERROR", message: err.message }
    });
  }
};

// GET /tasks/:id
exports.getTaskById = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM tasks WHERE id = ?",
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        error: { code: "NOT_FOUND", message: "Task not found" }
      });
    }

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({
      error: { code: "SERVER_ERROR", message: err.message }
    });
  }
};

// POST /tasks
exports.createTask = async (req, res) => {
  const { title, status, project_id } = req.body;

  if (!title || !status || !project_id) {
    return res.status(400).json({
      error: {
        code: "INVALID_INPUT",
        message: "Title, status, and project_id are required"
      }
    });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO tasks (title, status, project_id) VALUES (?, ?, ?)",
      [title, status, project_id]
    );

    res.status(201).json({
      id: result.insertId,
      title,
      status,
      project_id
    });
  } catch (err) {
    res.status(500).json({
      error: { code: "SERVER_ERROR", message: err.message }
    });
  }
};

// PATCH /tasks/:id
exports.updateTask = async (req, res) => {
  const { title, status } = req.body;
  const { id } = req.params;

  try {
    const [result] = await pool.query(
      "UPDATE tasks SET title = ?, status = ? WHERE id = ?",
      [title, status, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: { code: "NOT_FOUND", message: "Task not found" }
      });
    }

    res.json({ message: "Task updated" });
  } catch (err) {
    res.status(500).json({
      error: { code: "SERVER_ERROR", message: err.message }
    });
  }
};

// DELETE /tasks/:id
exports.deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM tasks WHERE id = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: { code: "NOT_FOUND", message: "Task not found" }
      });
    }

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({
      error: { code: "SERVER_ERROR", message: err.message }
    });
  }
};
