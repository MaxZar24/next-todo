import React from 'react';
import styles from '../styles/page.module.css'

export default function noTasks() {
    return (
        <div className={styles.noTask}>
            <p>No tasks yet</p>
            <svg width="250px" height="250px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M11 19.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path opacity="0.4" d="M11 12.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path opacity="0.4" d="M11 5.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M3 5.5L4 6.5L7 3.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M3 12.5L4 13.5L7 10.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M3 19.5L4 20.5L7 17.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </div>
    )
}