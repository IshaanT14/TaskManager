import React from 'react';

const TaskList = ({ tasks, onComplete, onDelete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={task.is_completed ? 'completed' : ''}>
          <div>
            <strong>{task.title}</strong> - {task.description}
            <span style={{
              marginLeft: '10px',
              padding: '2px 6px',
              fontSize: '12px',
              borderRadius: '4px',
              backgroundColor: task.is_completed ? '#d1e7dd' : '#fff3cd',
              color: task.is_completed ? '#0f5132' : '#664d03',
              border: '1px solid',
              borderColor: task.is_completed ? '#badbcc' : '#ffecb5'
            }}>
              {task.is_completed ? 'Completed' : 'Pending'}
            </span>
          </div>
          <div className="task-buttons">
            {!task.is_completed && (
              <button onClick={() => onComplete(task.id)}>Complete</button>
            )}
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

