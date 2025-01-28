import styles from "./LibraryModal.module.css";
import Search from "../assets/search.svg";
import RightArrow from "../assets/right-arrow.svg";
import { Dataset } from "../types/datasets.interface";
import DatasetsTable from "./DatasetsTable";

export interface LibraryModalProps {
  datasets: Dataset[];
}

function LibraryModal({ datasets }: LibraryModalProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Library</h1>
      <h2 className={styles.subTitle}>
        Here is a list of datasets already connected to your Obviously AI
        account.
      </h2>
      <hr className={styles.lineBreak} />
      <div className={styles.searchBar}>
        <img src={Search} alt="Search icon" className={styles.icon} />
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
      </div>
      <DatasetsTable datasets={datasets} />
      <div className={styles.right}>
        <button className={styles.button}>
          Next
          <img
            src={RightArrow}
            alt="right arrow"
            className={styles.arrowIcon}
          />
        </button>
      </div>
    </div>
  );
}

export default LibraryModal;
