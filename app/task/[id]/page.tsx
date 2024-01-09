'use client'
import styles from '../../styles/page.module.css';

// @ts-ignore
export default function TaskDetails({params}) {
    let taskList = [];

    if (typeof window !== 'undefined') {
        // @ts-ignore
        taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    }

    const currentTask = taskList.find((task: any) => task.id === parseInt(params.id));

    return (
        <div className={styles.main}>
            <h1>Task Details</h1>
            {currentTask ? (
                <>
                    <p>ID: {currentTask.id}</p>
                    <p>Title: {currentTask.title}</p>
                    <p>Description: {currentTask.description}</p>
                </>
            ) : (
                <p>Task not found</p>
            )}
        </div>
    );
}
