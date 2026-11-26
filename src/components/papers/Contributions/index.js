import React from 'react';
import styles from './styles.module.css';

export function Card({ n, title, children }) {
  return (
    <div className={styles.card}>
      <span className={styles.number}>{n}</span>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export default function Contributions({ children }) {
  return <div className={styles.grid}>{children}</div>;
}
