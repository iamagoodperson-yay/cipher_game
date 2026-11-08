'use client';
import styles from './page.module.css';
import { toolChoice, tools } from '../../scripts/gameHelper';
import { useState, useEffect } from 'react';

const Tool = ({ tooltype, locked }: { tooltype: toolChoice, locked: boolean }) => {
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
    <>
      <div className={styles.background}>
        <div
          id={`tool-${tooltype}`}
          className={styles.opened}
        >
          <button className={styles.closeButton} onClick={() => setOpen(false)}>Close</button>
          <h1>{tool.title}</h1>
          {tooltype == 1 && <CeasarCipher tool={tool} />}
        </div>
      </div>
      <div style={{ width: "30vw"}} />
    </>
  ); else if (locked) return (
    <div className={`${styles.container} ${styles.disabled}`}>
      <h1 className={styles.lock}>🔒</h1>
      <div 
        className={`${styles.column} ${styles.lockedColumn}`}
      >
        <h1 className={styles.title}>{tool.title}</h1>
      </div>
    </div>
  ); else return (
    <div 
      className={`${styles.container} ${styles.column}`}
      onClick={() => setOpen(!open)}
    >
      <h1 className={styles.title}>{tool.title}</h1>
    </div>
  )
}

const CeasarCipher = ({ tool }: { tool: Record<string, string> }) => {
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
    <>
      <div className={styles.caesarShiftContainer}>
        <div className={styles.caesarShift}>
          <h2>Plaintext</h2>
          {Array.from({ length: 26 }, (_, i) => (
            <p key={i}>
              {String.fromCharCode(65 + i)}
            </p>
          ))}
        </div>
        <div>
          <h2 className={styles.arrow}>↓</h2>
        </div>
        <div className={styles.caesarShift}>
          <h2>Ciphertext</h2>
          {Array.from({ length: 26 }, (_, i) => (
            <p key={i}>
              {encodeDecode(String.fromCharCode(65 + i), shift)}
            </p>
          ))}
        </div>
      </div>

      <div className={styles.toolContent}>
        <div className={styles.explanation}>
          <h2>{tool.subtitle}</h2>
          <p>{tool.description}</p>
        </div>

        <div className={styles.toolInteractive}>
          <h2>Encode/decode</h2>
          <input
            id="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <h2>Shift</h2>
          <input
            id="shift"
            type="number"
            value={shift || 0}
            onChange={(e) => setShift(parseInt(e.target.value))}
          />
          {output && 
            <div>
              <h2>Output</h2>
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
      </div>
    </>
  )
}

export default Tool;