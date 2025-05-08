const db = require('../config/db');

const Task = {
  getAll: (cb) => {
    db.query("SELECT * FROM tasks", cb);
  },

  create: (title, description, cb) => {
    db.query("INSERT INTO tasks (title, description, is_completed, created_at) VALUES (?, ?, false, NOW())", [title, description], cb);
  },

  complete: (id, cb) => {
    db.query("UPDATE tasks SET is_completed = true WHERE id = ?", [id], cb);
  },

  delete: (id, cb) => {
    db.query("DELETE FROM tasks WHERE id = ?", [id], cb);
  }
};

module.exports = Task;
