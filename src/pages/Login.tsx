import LoginCard from "../components/LoginCard";
import styles from "./Login.module.css";
import Logo from "../assets/Logo_Brandmark_FullColor.svg";
import LoginIcon from "../assets/login.svg";

function Login() {
  return (
    <div>
      <div className={styles.header}>
        <img src={Logo} alt="Obviously Logo" className={styles.logo} />
      </div>
      <div className={styles.container}>
        <div className={styles.login}>
          <div className={styles.iconContainer}>
            <img src={LoginIcon} alt="Login logo" className={styles.icon} />
          </div>
          <h1 className={styles.loginHeader}>Sign In</h1>
          <div className={styles.subheader}>
            Welcome back! Let's get started with AI
          </div>
          <LoginCard />
          <div className={styles.signup}>
            Don't have an account?{" "}
            <a href="/library" className={styles.link}>
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        © Copyrights 2025 by Obviously AI, Inc. All rights reserved.
      </div>
    </div>
  );
}

export default Login;
