'use client';
import Game from "./game/page";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => { // stuff to not allow people on mobile to play the game because nah
    const userAgent = navigator.userAgent;

    if (/android|iphone|ipad|ipod/i.test(userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    // fallback?
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  function startGame() {
    window.location.href = "/game";
  }

  if (isMobile) {
    return (
      <div className={styles.page}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome to Cipher Game</h1>
          <p className={styles.description}>This game is made for desktop. Sorry!</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.page}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome to Cipher Game</h1>
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
