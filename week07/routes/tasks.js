const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasksController");
const validateTask = require("../middleware/validateTask");

// GET all tasks
router.get("/", tasksController.getAllTasks);

// GET single task
router.get("/:id", tasksController.getTaskById);

// POST create task
router.post("/", validateTask, tasksController.createTask);

// PATCH update task
router.patch("/:id", validateTask, tasksController.updateTask);

// DELETE task
router.delete("/:id", tasksController.deleteTask);

module.exports = router;
