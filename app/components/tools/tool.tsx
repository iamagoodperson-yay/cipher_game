'use client';
import styles from './page.module.css';
import { toolChoice, tools } from '../../scripts/gameHelper';
import { useState, useEffect, useRef } from 'react';

const Tool = ({ tooltype }: { tooltype: toolChoice }) => {
 const [open, setOpen] = useState(false);
 const columnRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
   if (open) {
      columnRef.current?.classList.add(styles.opened);
   } else {
      columnRef.current?.classList.remove(styles.opened);
   }
 }, [open]);
  
  return (
    <div>
      <div 
        ref={columnRef}
        className={styles.column} 
        onClick={() => setOpen(!open)}
      >
        <h2 className={styles.title}>{tools[tooltype]}</h2>
      </div>
      <div style={{ width: open ? "30vw" : "0" }} />
    </div>
  )
}

export default Tool;