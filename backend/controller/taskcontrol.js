const Task = require('../models/taskmodel');

exports.getTasks = (req, res) => {
  Task.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  Task.create(title, description, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId });
  });
};

exports.completeTask = (req, res) => {
  Task.complete(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Task marked complete" });
  });
};

exports.deleteTask = (req, res) => {
  Task.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Task deleted" });
  });
};
