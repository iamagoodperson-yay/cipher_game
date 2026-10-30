'use client';
import Game from "./game/page";
import styles from "./page.module.css";

export default function Home() {
  function startGame() {
    window.location.href = "/game";
  }

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
