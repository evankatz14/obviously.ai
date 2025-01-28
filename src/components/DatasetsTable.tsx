import { LibraryModalProps } from "./LibraryModal";
import styles from "./DatasetsTable.module.css";
import DatasetRow from "./DatasetRow";
import DownArrow from "../assets/down-arrow.svg";
import Checked from "../assets/purple-checked.svg";
import Unchecked from "../assets/unchecked.svg";
import { useState } from "react";

function DatasetsTable({ datasets }: LibraryModalProps) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClickCheck = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <img
                src={isClicked ? Checked : Unchecked}
                alt="checked box"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                onClick={handleClickCheck}
              />
            </th>
            <th>
              Dataset Name
              <img
                src={DownArrow}
                alt="down arrow"
                className={styles.arrowIcon}
              />
            </th>
            <th>Status</th>
            <th>Created at</th>
            <th>Created by</th>
          </tr>
        </thead>
        <tbody>
          {datasets.length > 0 ? (
            datasets.map((dataset) => (
              <DatasetRow
                key={dataset.id}
                dataset={dataset}
                isChecked={isClicked}
              />
            ))
          ) : (
            <tr>
              <td colSpan={5} className={styles.noResults}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DatasetsTable;
