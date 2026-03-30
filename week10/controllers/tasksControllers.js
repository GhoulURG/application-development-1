let tasks = [];
let currentId = 1;

exports.getAllTasks = (req, res) => {
    res.json({ data: tasks });
};

exports.getTaskById = (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (!task) {
        return res.status(404).json({
            error: {
                code: "NOT_FOUND",
                message: "Task not found"
            }
        });
    }

    res.json(task);
};

exports.createTask = (req, res) => {
    const { title, description, completed } = req.body;

    const newTask = {
        id: currentId++,
        title,
        description,
        completed
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (!task) {
        return res.status(404).json({
            error: {
                code: "NOT_FOUND",
                message: "Task not found"
            }
        });
    }

    Object.assign(task, req.body);

    res.json(task);
};

exports.deleteTask = (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({
            error: {
                code: "NOT_FOUND",
                message: "Task not found"
            }
        });
    }

    tasks.splice(index, 1);

    res.json({ message: "Task deleted" });
};
