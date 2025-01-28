import styles from "./Status.module.css";

function Status({ status }: { status: string }) {
  const statusClass = status === "error" ? styles.error : styles.success;
  const circleClass =
    status === "error" ? styles.errorCircle : styles.successCircle;

  return (
    <div className={`${styles.statusPill} ${statusClass}`}>
      <span className={`${styles.statusCircle} ${circleClass}`}></span>
      {status}
    </div>
  );
}

export default Status;
