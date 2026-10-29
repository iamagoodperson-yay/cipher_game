'use client';
import styles from './page.module.css';
import { toolChoice, tools } from '../../scripts/tools';
import { useState } from 'react';

const Tool = ({ tooltype }: { tooltype: toolChoice }) => {
  const [opened, setOpened] = useState(false);

  if (opened) {
    return (
      <div className={styles.column} onClick={() => setOpened(false)}>
        <h2 className={styles.title}>{tools[tooltype]}</h2>
        <p>Opened</p>
      </div>
    );
  }

  return (
    <div className={styles.column} onClick={() => setOpened(true)}>
      <h2 className={styles.title}>{tools[tooltype]}</h2>
    </div>  
  )
}

export default Tool;