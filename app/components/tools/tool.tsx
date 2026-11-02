'use client';
import styles from './page.module.css';
import { toolChoice, tools } from '../../scripts/gameHelper';
import { useState, useEffect } from 'react';

const Tool = ({ tooltype }: { tooltype: toolChoice }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const columnElement = document.getElementById(`tool-${tooltype}`);
      if (columnElement && !columnElement.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const tool = tools[tooltype];
  if (open) return (
    <div>
      <div
        id={`tool-${tooltype}`}
        className={`${styles.column} ${styles.opened}`}
      >
        <button className={styles.closeButton} onClick={() => setOpen(false)}>Close</button>
        <h1 className={styles.title}>{tool.title}</h1>

        <div className={styles.toolContent}>
          <p className={styles.explanation}>{tool.description}</p>

          <CeasarCipher />
        </div>

      </div>

      <div style={{ width: "30vw"}} />
    </div>
  ); else return (
    <div 
      className={styles.column}
      style={{ cursor: tool.locked === 'true' ? 'default' : 'pointer' }}
      onClick={() => {
        if (tool.locked === 'false') {
          setOpen(!open);
        }
      }}
    >
      {tool.locked === 'true' && 
        <h1 className={styles.lock}>🔒</h1>
      }
      <h1 className={styles.title}>{tool.title}</h1>
    </div>
  )
}

const CeasarCipher = () => {
  const [input, setInput] = useState('');
  const [shift, setShift] = useState(0);
  const [output, setOutput] = useState('');

  function encode() {
    setOutput(encodeDecode(input, shift));
  }

  function decode() {
    setOutput(encodeDecode(input, -shift));
  }

  function encodeDecode(input: string, shift: number): string {
    let output = '';
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (char.match(/[a-z]/i)) {
        const code = input.charCodeAt(i);
        let shiftedCode;
        if (code >= 65 && code <= 90) {
          shiftedCode = ((code - 65 + shift) % 26 + 26) % 26 + 65;
        } else if (code >= 97 && code <= 122) {
          shiftedCode = ((code - 97 + shift) % 26 + 26) % 26 + 97;
        } else {
          shiftedCode = code;
        }
        output += String.fromCharCode(shiftedCode);
      } else {
        output += char;
      }
    }
    return output;
  }
  return(
    <div className={styles.toolInteractive}>
      <h2 className={styles.toolInteractiveHeader}>Encode/decode</h2>
      <input
        id="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h2 className={styles.toolInteractiveHeader}>Shift</h2>
      <input
        id="shift"
        type="number"
        value={shift}
        onChange={(e) => setShift(parseInt(e.target.value) || 0)}
      />
      {output && 
        <div>
          <h2 className={styles.toolInteractiveHeader}>Output</h2>
          <p id="output">{output}</p>
        </div>
      }
      <button
        className={styles.codeButton}
        onClick={() => encode()}
      >Encode</button>
      <button
        className={styles.codeButton}
        onClick={() => decode()}
      >Decode</button>
    </div>
  )
}

export default Tool;