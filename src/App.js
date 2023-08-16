import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.scss';

function App() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    const editTask = (task) => {
        setEditingTask(task);
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <h1 className="mt-4 text-center">Task Manager</h1>
                    <TaskForm onAdd={addTask} editingTask={editingTask} onEdit={(editedTask) => {
                        setTasks((prevTasks) =>
                            prevTasks.map((task) =>
                                task.id === editedTask.id ? editedTask : task
                            )
                        );
                        setEditingTask(null);
                    }}/>
                    <TaskList
                        tasks={tasks}
                        onDelete={deleteTask}
                        onToggle={toggleReminder}
                        onEdit={editTask}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
