'use client';
import Game from "./game/page";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (/android|iphone|ipad|ipod/.test(userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  function startGame() {
    window.location.href = "/game";
  }
  if (isMobile) {
    return (
      <div className={styles.page}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome to the Cipher Game</h1>
          <p className={styles.description}>Learn about ciphers and solve a mystery!</p>
          <p className={styles.mobileWarning}>This game is best experienced on a desktop or laptop computer. Please switch to a larger device for the best experience.</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.page}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome to the Cipher Game</h1>
          <p className={styles.description}>Learn about ciphers and solve a mystery!</p>
          <button className={styles.startButton} onClick={startGame}>
            Start Game
          </button>
        </div>
        <div className={styles.gameContainer}>
          <Game />
        </div>
      </div>
    );
  }
}
