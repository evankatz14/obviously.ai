import { LibraryModalProps } from "../LibraryModal/LibraryModal";
import styles from "./DatasetsTable.module.css";
import DatasetRow from "../DatasetRow/DatasetRow";
import DownArrow from "../../assets/down-arrow.svg";
import Checked from "../../assets/purple-checked.svg";
import Unchecked from "../../assets/unchecked.svg";
import { useMemo, useState } from "react";

function DatasetsTable({ datasets, handleRemoveDataset }: LibraryModalProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [isSorted, setIsSorted] = useState<"ASC" | "DSC" | false>(false);

  const handleSort = () => {
    setIsSorted((prevSort) => (prevSort === "ASC" ? "DSC" : "ASC"));
  };

  const handleClickCheck = () => {
    setIsClicked(!isClicked);
  };

  const sortedDatasets = useMemo(() => {
    if (isSorted === "ASC") {
      return [...datasets].sort((a, b) => a.name.localeCompare(b.name));
    } else if (isSorted === "DSC") {
      return [...datasets].sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return datasets;
    }
  }, [datasets, isSorted]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <img
                src={isClicked ? Checked : Unchecked}
                alt="checked box"
                className={styles.checkbox}
                onClick={handleClickCheck}
              />
            </th>
            <th className={styles.name}>
              <div onClick={handleSort} className={styles.sort}>
                Dataset Name
                <img
                  src={DownArrow}
                  alt="down arrow"
                  className={`${styles.arrowIcon} ${
                    isSorted === "DSC" ? styles.rotated : ""
                  }`}
                />
              </div>
            </th>
            <th className={styles.status}>Status</th>
            <th className={styles.createdAt}>Created at</th>
            <th>Created by</th>
          </tr>
        </thead>
        <tbody>
          {sortedDatasets.length > 0 ? (
            sortedDatasets.map((dataset) => (
              <DatasetRow
                key={dataset.id}
                dataset={dataset}
                isChecked={isClicked}
                onRemove={handleRemoveDataset}
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
