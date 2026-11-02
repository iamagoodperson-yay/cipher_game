'use client';
import styles from './page.module.css';
import { toolChoice, tools } from '../../scripts/gameHelper';
import { useState } from 'react';

const Tool = ({ tooltype }: { tooltype: toolChoice }) => {
 const [open, setOpen] = useState(false);
 const tool = tools[tooltype];
  return (
    <div>
      <div 
        className={`${styles.column} ${open ? styles.opened : ""}`}
        onClick={() => {
          if (tool.locked === 'false') {
            setOpen(!open);
          }
        }}
      >
        {tool.locked === 'true' ? (
          <h1 className={styles.lock}>🔒</h1>
        ): (
          <div/>
        )}
        <h1 className={styles.title}>{tool.title}</h1>
        <div 
          className={styles.toolContent}
          style={{ display: open ? "block" : "none" }}
        >
          <p className={styles.explanation}>
            This is the explanation for the {tool.description} tool.
          </p>
          <div className={styles.toolInteractive}>
            <h2 className={styles.toolInteractiveHeader}>Encode/decode</h2>
            <input type="text" />
            <h2 className={styles.toolInteractiveHeader}>Slider</h2>
            <input type="number" />
            <h2 className={styles.toolInteractiveHeader}>Output</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div style={{ width: open ? "30vw" : "0" }} />
    </div>
  )
}

export default Tool;