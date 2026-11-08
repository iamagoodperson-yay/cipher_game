'use client';
import styles from "./page.module.css";
import Tool from "../components/tools/tool";
import Dialog from "../components/dialog/dialog";
import { toolChoice, evidence, gameStage, gameStages } from "../scripts/gameHelper";
import { useState, useEffect } from "react";

export default function Game() {
  const [topLeftOpen, setTopLeftOpen] = useState(false);
  const [evidencePos, setEvidencePos] = useState([] as { top: string; left: string }[]);
  const [currentStage, setCurrentStage] = useState<gameStage>(3); // change back to 1 for prod
  const currGameStage = gameStages[currentStage];
  
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [dialogContent, setDialogContent] = useState<React.ReactNode>(<></>);
  const [dialogClose, setDialogClose] = useState<(() => void)>(() => {});

  const handleDialog = (dialogTitle: string, children: React.ReactNode, dialogClose?: () => void) => {
    setDialogTitle(dialogTitle);
    setDialogContent(children);
    setDialogClose(() => () => {
      setDialogOpen(false);
      dialogClose && dialogClose();
    });
    setDialogOpen(true);
  };

  const [input, setInput] = useState<string>("");
  const submit = () => {
    console.log("submit", input);
    if (input === currGameStage.answer) {
      switch (currentStage) {
        case 1:
          handleDialog(
            'You got it!',
            <p>This was the tutorial, now onto the main game.</p>,
            () => {
              setCurrentStage(2);
              setTopLeftOpen(false);
            }
          );
          break;
        case 2:
          handleDialog(
            'You got it!',
            <>
              <p>The Project was shipped out on 1973-07-04, but was intercepted...</p>
              <p>What happened next?</p>
            </>,
            () => {
              setCurrentStage(3);
              setTopLeftOpen(false);
            }
          );
          break;
        default:
          break;
      }
    } else {
      handleDialog(
        'Incorrect',
        <p>Try again!</p>,
      );
    }
    setInput("");
  }

  useEffect(() => {
    const evidenceRef = document.getElementsByClassName(styles.evidence);
    const draggable = document.getElementsByClassName(styles.draggable);
    const cleanups: (() => void)[] = []

    for (let i = 0; i < Math.min(evidenceRef.length, draggable.length); i++) {
      const evid = evidenceRef[i] as HTMLElement;
      const drag = draggable[i] as HTMLElement;

      function dragMouseDown(e: MouseEvent) {
        e.preventDefault();
        let startLeft: number;
        let startTop: number;

        let startX: number;
        let startY: number;
        
        const rect = evid.getBoundingClientRect();
        
        startLeft = rect.left;
        startTop = rect.top;
        
        startX = e.clientX;
        startY = e.clientY;
        
        const totalEvidence = evidenceRef.length + 1;

        drag.style.cursor = "grabbing";

        for (const otherEvidence of evidenceRef) {
          const other = otherEvidence as HTMLElement;

          if (other === evid) {
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
          
          evid.style.left = `${startLeft + dx}px`;
          evid.style.top = `${startTop + dy}px`;
        }
          
        function closeDragElement() {
          drag.style.cursor = "grab";

          document.removeEventListener("mouseup", closeDragElement);
          document.removeEventListener("mousemove", elementDrag);
        }

        document.addEventListener("mousemove", elementDrag);
        document.addEventListener("mouseup", closeDragElement);
      }
        
      drag.addEventListener("mousedown", dragMouseDown);
      
      cleanups.push(() => {
        drag.removeEventListener("mousedown", dragMouseDown);
      });
    }

    return () => {
      cleanups.forEach(cleanup => cleanup());
    };

  }, [evidencePos]);

  useEffect(() => {
    const randomPositions = Object.entries(evidence[currentStage]).map(([_, value]) => ({
      top: `${Math.random() * 50}vh`,
      left: `${Math.random() * (100 - parseInt(value.width))}vw`,
    }));

    setEvidencePos(randomPositions);
  }, [evidence[currentStage]]);

  return (
    <div className={styles.page}>
      <Dialog
        title={dialogTitle}
        children={dialogContent}
        opened={dialogOpen}
        onClose={dialogClose}
      />

      <div className={styles.topLeftThing}>
        <h3 
          onClick={() => setTopLeftOpen(!topLeftOpen)}
        >Objective:</h3>
        <p>{currGameStage.objective}</p>
        {topLeftOpen && (
          <div className={styles.objectiveContent}>
            <input 
              type={currGameStage.input_type}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className={styles.submitButton}
              onClick={() => submit()}
            >Submit</button>
          </div>
        )}
      </div>

      <div className={styles.gameContainer}>
        {evidencePos.length > 0 && Object.entries(evidence[currentStage]).map(([key, value], index) => (
          <div
            key={key}
            className={styles.evidence}
            style={{
              zIndex: parseInt(key) + 1,
              width: value.width, // vw
              height: value.height, // px
              top: evidencePos[index].top,
              left: evidencePos[index].left,
              backgroundColor: value.bgcolor || "none",
            }} 
          >
            <h2 className={styles.draggable}>{value.description}</h2>
            {value.details && (
              <div 
                className={styles.evidenceDetails}
                dangerouslySetInnerHTML={{ __html: value.details }}
              />
            )}
          </div>
        ))}
      </div>

      <div className={styles.bottomBar}>
        {Array.from({ length: 3 }, (_, i) => {
          const tooltype = (i + 1) as toolChoice;
          const locked = currGameStage[`${tooltype}-locked`] === "true";
          return (
            <Tool 
              key={i}
              tooltype={tooltype} 
              locked={locked}
            />
          );
        })}
      </div>
    </div>
  );
}