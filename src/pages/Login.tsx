import LoginIcon from "../assets/login.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginCard from "../components/LoginCard";
import styles from "./Login.module.css";

function Login() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}

export default Login;
