let users = [];
let nextId = 1;

exports.getAllUsers = (req, res) => {
  res.json({ data: users });
};

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({
      error: { code: "USER_NOT_FOUND", message: "User not found" }
    });
  }
  res.json(user);
};

exports.createUser = (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({
      error: { code: "INVALID_INPUT", message: "Username is required" }
    });
  }

  if (users.some(u => u.username === username)) {
    return res.status(409).json({
      error: { code: "USERNAME_EXISTS", message: "Username already exists" }
    });
  }

  const newUser = { id: nextId++, username };
  users.push(newUser);

  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({
      error: { code: "USER_NOT_FOUND", message: "User not found" }
    });
  }

  if (req.body.username) {
    user.username = req.body.username;
  }

  res.json(user);
};

exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({
      error: { code: "USER_NOT_FOUND", message: "User not found" }
    });
  }

  users.splice(index, 1);
  res.status(204).send();
};
