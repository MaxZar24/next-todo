'use client'
import React, { useState, useEffect } from 'react';
import styles from './styles/page.module.css';
import NoTask from "@/app/components/no-tasks";
import Task from "@/app/components/task";

interface Task {
    id: number;
    title: string;
    description: string;
}

export default function Home() {
    let getTaskList = []
    let getTaskCount = 1
    if (typeof window !== 'undefined') {
        // @ts-ignore
        getTaskList = JSON.parse(localStorage.getItem("taskList"));
        getTaskCount = parseInt(localStorage.getItem('taskCounter') || '0', 10);
    }
    const [taskList, setTaskList] = useState<Task[]>(getTaskList || []);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskCounter, setTaskCounter] = useState<number>(getTaskCount);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);


    useEffect(() => {
        localStorage.setItem('taskCounter', taskCounter.toString());
    }, [taskCounter]);

    const createTask = () => {
        const newTask: Task = {
            id: taskCounter,
            title: taskTitle,
            description: taskDescription,
        };

        setTaskList((prevTaskList) => [...prevTaskList, newTask]);
        setTaskTitle('');
        setTaskDescription('');
        setTaskCounter(taskCounter + 1);
    };

    const deleteTask = (taskId: number) => {
        setTaskList((prevTaskList) => prevTaskList.filter((task) => task.id !== taskId));
        setTaskCounter(taskCounter - 1);
    };

    const filteredTasks = taskList.filter(task => task.title.includes(searchText));

    return (
        <main className={styles.main}>
            <h1>TODO list</h1>
            <input
                placeholder="Search.."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <input
                placeholder="Input your task name.."
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
            />
            <textarea
                placeholder="Input your task description.."
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            <button onClick={createTask}>Create task</button>
            {filteredTasks.length === 0 ? (
                <NoTask />
            ) : (
                filteredTasks.map((task) => (
                    <Task key={task.id} id={task.id} title={task.title} onDelete={deleteTask} />
                ))
            )}
        </main>
    );
}
