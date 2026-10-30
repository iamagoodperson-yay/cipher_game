'use client';
import styles from "./page.module.css";
import Tool from "../components/tools/tool";
import { evidence } from "../scripts/gameHelper";
import { useEffect } from "react";

export default function Game() {
  
  useEffect(() => {
    const evidenceRef = document.getElementsByClassName(styles.evidence);
    const cleanups: (() => void)[] = []

    for (const evidence of evidenceRef) {
      const elmnt = evidence as HTMLElement;
      if (!elmnt) return;
      
      let startLeft: number;
      let startTop: number;

      let startX: number;
      let startY: number;

      function dragMouseDown(e: MouseEvent) {
        e.preventDefault();
        const rect = elmnt.getBoundingClientRect();

        startLeft = rect.left;
        startTop = rect.top;

        startX = e.clientX;
        startY = e.clientY;

        elmnt.style.cursor = "grabbing";

        document.addEventListener("mouseup", closeDragElement);
        document.addEventListener("mousemove", elementDrag);
      }
        
      function elementDrag(e: MouseEvent) {
        if (!elmnt) return;
        e.preventDefault();
        
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        
        elmnt.style.left = `${startLeft + dx}px`;
        elmnt.style.top = `${startTop + dy}px`;
      }
        
      function closeDragElement() {
        if (!elmnt) return;
        elmnt.style.cursor = "grab";

        document.removeEventListener("mouseup", closeDragElement);
        document.removeEventListener("mousemove", elementDrag);
      }
      
      elmnt.addEventListener("mousedown", dragMouseDown);
      
      cleanups.push(() => {
        elmnt.removeEventListener("mousedown", dragMouseDown);
        closeDragElement();
      });
    }
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.gameContainer}>
        {Object.entries(evidence).map(([key, value]) => (
          <div
            key={key}
            className={styles.evidence}
            style={{ width: "40vw" }}
          >
            <h2>{value.description}</h2>
            <p>{value.details}</p>
          </div>
        ))}
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.tool}>
          <Tool tooltype={1}></Tool>
        </div>
        <div className={styles.tool}>
          <Tool tooltype={2}></Tool>
        </div>
        <div className={styles.tool}>
          <Tool tooltype={3}></Tool>
        </div>
      </div>
    </div>
  );
}
