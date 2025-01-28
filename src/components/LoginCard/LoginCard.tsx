import styles from "./LoginCard.module.css";
import GoogleLogo from "../../assets/Google_logo.svg";
import LinkedInLogo from "../../assets/LinkedIn_logo.svg";
import { useNavigate } from "react-router-dom";

function LoginCard() {
  const navigate = useNavigate();

  const handleClick = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/library");
  };
  return (
    <div className={styles.loginCard}>
      <form className={styles.form} onSubmit={handleClick}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className={styles.input}
            required
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Please enter a valid email address"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            className={styles.input}
            required
            title="Please enter a valid password"
          />
        </div>
        <button type="submit" className={styles.buttonPrimary}>
          Sign In
        </button>
      </form>
      <div className={styles.orContainer}>
        <div className={styles.line}></div>
        <span className={styles.orText}>OR</span>
        <div className={styles.line}></div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonSecondary} onClick={handleClick}>
          <img src={GoogleLogo} alt="Google logo" className={styles.icon} />
          Sign up with Google
        </button>
        <button className={styles.buttonSecondary} onClick={handleClick}>
          <img src={LinkedInLogo} alt="LinkedIn logo" className={styles.icon} />
          Sign up with Linkedin
        </button>
      </div>
    </div>
  );
}

export default LoginCard;
