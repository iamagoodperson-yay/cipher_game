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

      function dragMouseDown(e: MouseEvent) {
        let startLeft: number;
        let startTop: number;

        let startX: number;
        let startY: number;

        const totalEvidence = evidenceRef.length;

        e.preventDefault();
        const rect = elmnt.getBoundingClientRect();

        startLeft = rect.left;
        startTop = rect.top;

        startX = e.clientX;
        startY = e.clientY;

        elmnt.style.cursor = "grabbing";

        for (const otherEvidence of evidenceRef) {
          const other = otherEvidence as HTMLElement;

          if (other === elmnt) {
            other.style.zIndex = totalEvidence.toString();
          } else {
            const currentZIndex = parseInt(other.style.zIndex || "1");
            other.style.zIndex = String(Math.max(1, currentZIndex - 1));
          }
        }
          
        function elementDrag(e: MouseEvent) {
          e.preventDefault();
          
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;
          
          elmnt.style.left = `${startLeft + dx}px`;
          elmnt.style.top = `${startTop + dy}px`;
        }
          
        function closeDragElement() {
          elmnt.style.cursor = "grab";

          document.removeEventListener("mouseup", closeDragElement);
          document.removeEventListener("mousemove", elementDrag);
        }

        document.addEventListener("mousemove", elementDrag);
        document.addEventListener("mouseup", closeDragElement);
      }
        
      elmnt.addEventListener("mousedown", dragMouseDown);
      
      cleanups.push(() => {
        elmnt.removeEventListener("mousedown", dragMouseDown);
      });
    }

    return () => {
      cleanups.forEach(cleanup => cleanup());
    };

  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.gameContainer}>
        {Object.entries(evidence).map(([key, value]) => (
          <div
            key={key}
            className={styles.evidence}
            style={{
              zIndex: parseInt(key) + 1,
              width: value.width,
              height: value.height,
              top: `${(parseInt(key) - 1) * 20}%`,
              left: value.left
            }}
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
