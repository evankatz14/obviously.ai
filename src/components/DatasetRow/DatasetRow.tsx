import { useEffect, useState } from "react";
import { Dataset } from "../../types/datasets.interface";
import styles from "./DatasetRow.module.css";
import Trash from "../../assets/trash.svg";
import Status from "../Status/Status";
import Checked from "../../assets/blue-checked.svg";
import Unchecked from "../../assets/unchecked.svg";

export interface DatasetRowProps {
  dataset: Dataset;
  isChecked: boolean;
  onRemove: (id: number) => void;
}

function DatasetRow({ dataset, isChecked, onRemove }: DatasetRowProps) {
  const [iconSrc, setIconSrc] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const importIcon = async () => {
      try {
        const icon = await import(`../../assets/${dataset.type}.svg`);
        setIconSrc(icon.default);
      } catch (error) {
        console.error(`Error importing icon for ${dataset.type}`);
      }
    };

    importIcon();
  }, [dataset.type]);

  useEffect(() => {
    setIsClicked(isChecked);
  }, [isChecked]);

  const handleClickCheck = () => {
    setIsClicked(!isClicked);
  };

  const handleRemove = () => {
    onRemove(dataset.id);
  };

  return (
    <tr key={dataset.id}>
      <td>
        <img
          src={isClicked ? Checked : Unchecked}
          alt="checked box"
          className={styles.checkbox}
          onClick={handleClickCheck}
        />
      </td>
      <td>
        {iconSrc && (
          <img src={iconSrc} alt={dataset.type} className={styles.statusIcon} />
        )}
        {dataset.name}
      </td>
      <td>
        <Status status={dataset.status} />
      </td>
      <td>{dataset.createdAt}</td>
      <td className={styles.horizontalSplit}>
        <div className={styles.verticalStack}>
          <p>{dataset.creator}</p>
          <p>{dataset.email}</p>
        </div>
        <img
          src={Trash}
          alt="trash icon"
          onClick={handleRemove}
          className={styles.statusIcon}
        />
      </td>
    </tr>
  );
}

export default DatasetRow;
