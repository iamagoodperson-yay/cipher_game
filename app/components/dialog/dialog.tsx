import styles from './page.module.css';

const Dialog = ({ title, children, onClose }: { title: string, children: string, onClose: () => void }) => {
  return (
    <div className={styles.dialog}>
      <div className={styles.dialogContent}>
        <h1>{title}</h1>
        <p>{children}</p>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Dialog;