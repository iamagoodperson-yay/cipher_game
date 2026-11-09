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
          {tooltype == 2 && <VigenereCipher tool={tool} />}
          {tooltype == 3 && <RailFenceCipher tool={tool} />}
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

          <div className={styles.row}>
            <button
              className={styles.codeButton}
              onClick={() => encode()}
            >Encode</button>
            <button
              className={styles.codeButton}
              onClick={() => decode()}
            >Decode</button>
          </div>

          {output && 
            <div>
              <h2>Output</h2>
              <p id="output">{output}</p>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Tool;

const VigenereCipher = ({ tool }: { tool: Record<string, string> }) => {
  const [input, setInput] = useState('');
  const [sanitisedInput, setSanitisedInput] = useState('');
  const [key, setKey] = useState('');
  const [repeatingKey, setRepeatingKey] = useState('');
  const [output, setOutput] = useState('');
  const [sanitisedOutput, setSanitisedOutput] = useState('');

  function encode() {
    let output = '';
    let skipped = 0;
    input.split('').forEach((char, index) => {
      if (char.match(/[A-Z]/)) {
        const charCode = char.charCodeAt(0) - 65;
        const keyCode = repeatingKey[index - skipped].charCodeAt(0) - 65;
        const encodedChar = String.fromCharCode(((charCode + keyCode) % 26) + 65);
        output += encodedChar;
      } else if (char.match(/[a-z]/)) {
        const charCode = char.charCodeAt(0) - 97;
        const keyCode = repeatingKey[index - skipped].charCodeAt(0) - 65;
        const encodedChar = String.fromCharCode(((charCode + keyCode) % 26) + 97);
        output += encodedChar;
      } else {
        output += char;
        skipped++;
      }
    });
    setOutput(output);
  }

  function decode() {
    let output = '';
    let skipped = 0;
    input.split('').forEach((char, index) => {
      if (char.match(/[A-Z]/)) {
        const charCode = char.charCodeAt(0) - 65;
        const keyCode = repeatingKey[index - skipped].charCodeAt(0) - 65;
        const encodedChar = String.fromCharCode(((charCode - keyCode + 26) % 26) + 65);
        output += encodedChar;
      } else if (char.match(/[a-z]/)) {
        const charCode = char.charCodeAt(0) - 97;
        const keyCode = repeatingKey[index - skipped].charCodeAt(0) - 65;
        const encodedChar = String.fromCharCode(((charCode - keyCode + 26) % 26) + 97);
        output += encodedChar;
      } else {
        output += char;
        skipped++;
      }
    });
    setOutput(output);
  }

  useEffect(() => {
    const sanitisedInput = input.replace(/[^a-zA-Z]/g, '').toUpperCase();
    setSanitisedInput(sanitisedInput);

    const sanitizedKey = key.replace(/[^a-zA-Z]/g, '').toUpperCase();
    if (sanitizedKey) {
      const repeating = sanitizedKey.repeat(Math.ceil(sanitisedInput.length / sanitizedKey.length)).slice(0, sanitisedInput.length);
      setRepeatingKey(repeating);
    } else setRepeatingKey(' '.repeat(sanitisedInput.length));

    setSanitisedOutput('');
  }, [input, key]);

  useEffect(() => {
    const sanitisedOutput = output.replace(/[^a-zA-Z]/g, '').toUpperCase();
    setSanitisedOutput(sanitisedOutput);
  }, [output]);

  return (
    <>
      <div className={styles.caesarShiftContainer}>
        <div className={styles.vigenereText}>
          <h2>Input</h2>
          {Object.entries(sanitisedInput).map(([_, value], i) => (
            <p key={i}>
              {value}
            </p>
          ))}
        </div>
        <div className={styles.vigenereText}>
          <h2>↓ Key</h2>
          {Object.entries(repeatingKey).map(([_, value], i) => (
            <p key={i}>
              {value}
            </p>
          ))}
        </div>
        <div className={styles.vigenereText}>
          <h2>Output</h2>
          {Object.entries(sanitisedOutput).map(([_, value], i) => (
            <p key={i}>
              {value}
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
          <h2>Plaintext / Ciphertext</h2>
          <input
            id="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <h2>Key</h2>
          <input
            id="key"
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />

          <div className={styles.row}>
            <button
              className={styles.codeButton}
              onClick={() => encode()}
            >Encode</button>
            <button
              className={styles.codeButton}
              onClick={() => decode()}
            >Decode</button>
          </div>

          {output && 
            <div>
              <h2>Output</h2>
              <p id="output">{output}</p>
            </div>
          }
        </div>
      </div>
    </>
  );
}

const RailFenceCipher = ({ tool }: { tool: Record<string, string> }) => {
  const [input, setInput] = useState('');
  const [railCipher, setRailCipher] = useState<string[]>([]);
  const [levels, setLevels] = useState(3);
  const [startingPosition, setStartingPosition] = useState<'top' | 'bottom'>('top');
  const [output, setOutput] = useState('');

  const encode = () => {
    if (levels < 2) {
      setRailCipher([]);
      setOutput(input);
      return;
    }
    const rail: string[] = Array.from({ length: levels }, () => '');
    const displayRail: string[] = Array.from({ length: levels }, () => '');
    const cycleLength = levels * 2 - 2;
    for (let i = 0; i < input.length; i++) {
      const cycle = i % cycleLength;
      let level;
      if (startingPosition === 'top') {
        level = cycle < levels ? cycle : cycleLength - cycle;
      } else {
        level = cycle < levels ? levels - 1 - cycle : levels - 1 - (cycleLength - cycle);
      }
      rail[level] += input[i].replace(' ', '·');;
      for (let j = 0; j < levels; j++) {
        if (j === level) {
          displayRail[j] += input[i].replace(' ', '·');
        } else {
          displayRail[j] += ' ';
        }
      }
    }
    const output = rail.join('');
    setRailCipher(displayRail);
    setOutput(output);
  }

  const decode = () => {
    if (levels < 2) {
      setOutput(input);
      return;
    }
    const rail: string[] = Array.from({ length: levels }, () => '');
    const displayRail: string[] = Array.from({ length: levels }, () => '');
    const cycleLength = levels * 2 - 2;
    const counts = Array.from({ length: levels }, (_, level) => {
      let count = 0;

      for (let i = 0; i < input.length; i++) {
        const cycle = i % cycleLength;
        let currentLevel;
        if (startingPosition === 'top') {
           currentLevel = cycle < levels ? cycle : cycleLength - cycle;
        } else {
           currentLevel = cycle < levels ? levels - 1 - cycle : levels - 1 - (cycleLength - cycle);
        }
        if (currentLevel === level) count++;
      }

      return count;
    });

    let index = 0;
    for (let level = 0; level < levels; level++) {
      const count = counts[level];
      rail[level] = input.slice(index, index + count);
      index += count;
    }

    let output = '';

    for (let i = 0; i < input.length; i++) {
      const cycle = i % cycleLength;
      const level = startingPosition === 'top'
        ? cycle < levels ? cycle : cycleLength - cycle
        : cycle < levels ? levels - 1 - cycle : levels - 1 - (cycleLength - cycle);

      for (let row = 0; row < levels; row++) {
        displayRail[row] += row === level ? rail[level][0].replace(' ', '·') : ' ';
      }

      output += rail[level][0];
      rail[level] = rail[level].slice(1);
    }
    setRailCipher(displayRail);
    setOutput(output);
  }

  return (
    <>
      <div className={styles.caesarShiftContainer}>
        {Array.from({ length: levels }, (_, i) => (
          <div key={i} className={styles.vigenereText}>
            <h2>Row {i + 1}</h2>
            {railCipher[i] && railCipher[i].split('').map((char, j) => (
              <p key={j}>
                {char}
              </p>
            ))}
          </div>
        ))}
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

          <h2>Levels/Rows</h2>
          <input
            id="shift"
            type="number"
            value={levels || 0}
            onChange={(e) => setLevels(parseInt(e.target.value))}
          />

          <h2>Starting position</h2>
          <div className={styles.railRadio}>
            <input
              type="radio"
              id="top"
              value="top"
              checked={startingPosition === 'top'}
              onChange={() => setStartingPosition('top')}
            /><label htmlFor="top">Top (left) ↘↗</label>
          </div>
          <div className={styles.railRadio}>
            <input
              type="radio"
              id="bottom"
              value="bottom"
              checked={startingPosition === 'bottom'}
              onChange={() => setStartingPosition('bottom')}
            /><label htmlFor="bottom">Bottom (right) ↗↘</label>
          </div>

          <div className={styles.row}>
            <button
              className={styles.codeButton}
              onClick={() => encode()}
            >Encode</button>
            <button
              className={styles.codeButton}
              onClick={() => decode()}
            >Decode</button>
          </div>

          {output && 
            <div>
              <h2>Output</h2>
              <p id="output">{output}</p>
            </div>
          }
        </div>
      </div>
    </>
  );
}