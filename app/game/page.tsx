import styles from "./page.module.css";
import Tool from "../components/tools/tool";

export default function Game() {
  return (
    <div className={styles.page}>
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
