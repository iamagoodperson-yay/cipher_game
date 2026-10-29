'use client';
import styles from "./page.module.css";
import Tool from "../components/tools/tool";
import { evidence } from "../scripts/gameHelper";
import { useEffect, useRef } from "react";

export default function Game() {
  const evidenceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elmnt = evidenceRef.current;
    if (!elmnt) return;

    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;

    function dragMouseDown(e: MouseEvent) {
      e.preventDefault();

      pos3 = e.clientX;
      pos4 = e.clientY;

      document.addEventListener("mouseup", closeDragElement);
      document.addEventListener("mousemove", elementDrag);
    }

    function elementDrag(e: MouseEvent) {
      if (!elmnt) return;
      e.preventDefault();

      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      const rect = elmnt.getBoundingClientRect();

      elmnt.style.top = `${rect.top - pos2}px`;
      elmnt.style.left = `${rect.left - pos1}px`;
    }

    function closeDragElement() {
      document.removeEventListener("mouseup", closeDragElement);
      document.removeEventListener("mousemove", elementDrag);
    }

    elmnt.addEventListener("mousedown", dragMouseDown);

    return () => {
      elmnt.removeEventListener("mousedown", dragMouseDown);
      closeDragElement();
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.gameContainer}>
        <div 
          className={styles.evidence} 
          ref={evidenceRef}
          style={{ width: "40vw" }}
        >
          <h2>{evidence[1]}</h2>
          <p>Deserunt ad officia do. Sit sit in exercitation ipsum elit minim fugiat adipisicing aliqua qui. Ut pariatur non proident voluptate minim proident eu aute in deserunt. Nostrud amet ipsum incididunt id non sint labore voluptate mollit nisi cillum nisi Lorem. Esse ipsum velit in eiusmod do Lorem sint culpa ad elit culpa duis dolor. Mollit culpa incididunt sit do sint tempor aliqua anim laborum fugiat deserunt ex. Commodo voluptate aliquip labore ad aute nulla aute adipisicing voluptate proident. Consectetur ut amet culpa amet quis aliquip cillum ut quis.</p>
        </div>
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
