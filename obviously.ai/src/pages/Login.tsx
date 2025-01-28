import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.login}>
      <h1 className={styles.header}>Sign In</h1>
      <div className={styles.subheader}>
        Welcome back! Let's get started with AI
      </div>
    </div>
  );
}

export default Login;
