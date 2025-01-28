import Logo from "../assets/Logo_Brandmark_FullColor.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="Obviously Logo" className={styles.logo} />
    </div>
  );
}

export default Header;
