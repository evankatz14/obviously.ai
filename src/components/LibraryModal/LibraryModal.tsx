import styles from "./LibraryModal.module.css";
import Search from "../../assets/search.svg";
import RightArrow from "../../assets/right-arrow.svg";
import { Dataset } from "../../types/datasets.interface";
import DatasetsTable from "../DatasetsTable/DatasetsTable";
import { useMemo, useState } from "react";
import debounce from "lodash.debounce";

export interface LibraryModalProps {
  datasets: Dataset[];
  handleRemoveDataset: (id: number) => void;
}

function LibraryModal({ datasets, handleRemoveDataset }: LibraryModalProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const debouncedHandleSearch = useMemo(() => debounce(handleSearch, 300), []);

  const filteredDatasets = datasets.filter((dataset) =>
    dataset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          onChange={debouncedHandleSearch}
        />
      </div>
      <DatasetsTable
        datasets={filteredDatasets}
        handleRemoveDataset={handleRemoveDataset}
      />
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
