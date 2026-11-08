import styles from './page.module.css';

const Dialog = ({ title, children, onClose, opened }: { title: string, children: React.ReactNode, onClose: () => void, opened: boolean }) => {
  if (opened) return (
      <div className={styles.dialog}>
        <div className={styles.dialogContent}>
          <h2>{title}</h2>
          {children}
          <button className={styles.closeButton} onClick={onClose}>Done</button>
        </div>
      </div>
  );
};

export default Dialog;