import React from 'react';

const Task = ({ task, onDelete, onToggle, onEdit }) => {
    console.log(task)
    return (
        <div className={`mt-3 card ${task.reminder ? 'border-primary' : ''}`}>
            <div className="card-body">
                <h5 className="card-title">{task.text}</h5>
                <p className="card-text">{task.day && task.day.toLocaleString()}</p>
                <button className="btn btn-danger me-2" onClick={() => onDelete(task.id)}>
                    Delete
                </button>
                <button className="btn btn-primary me-2" onClick={() => onToggle(task.id)}>
                    {task.reminder ? 'Remove Reminder' : 'Set Reminder'}
                </button>
                <button className="btn btn-secondary" onClick={() => onEdit(task)}>
                    Edit
                </button>
            </div>
        </div>
    );
};

export default Task;