import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TaskForm = ({ onAdd, editingTask, onEdit }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState(null);
    const [reminder, setReminder] = useState(false);

    useEffect(() => {
        if (editingTask) {
            setText(editingTask.text);
            setDay(new Date(editingTask.day));
            setReminder(editingTask.reminder);
        }
    }, [editingTask]);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please add a task');
            return;
        }

        if (editingTask) {
            onEdit({ id: editingTask.id, text, day, reminder }); // Call onEdit with updated task
        } else {
            onAdd({ text, day, reminder });
        }

        setText('');
        setDay(null);
        setReminder(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label">Task</label>
                <input
                    type="text"
                    className="form-control"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Day & Time</label>
                <DatePicker
                    selected={day} // Make sure day is a Date object
                    onChange={(date) => setDay(date)}
                    showTimeSelect
                    className="form-control d-block"
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
            </div>
            <div className="mb-3 form-check">
                <label className="form-check-label">
                <input
                    type="checkbox"
                    id={"reminder"}
                    className="form-check-input"
                    checked={reminder}
                    onChange={(e) => setReminder(e.target.checked)}
                />
                Set Reminder</label>
            </div>
            <button className="btn btn-primary" type="submit">
                {editingTask ? 'Update Task' : 'Save Task'}
            </button>
        </form>
    );
};

export default TaskForm;
