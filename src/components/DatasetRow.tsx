import { useEffect, useState } from "react";
import { Dataset } from "../types/datasets.interface";
import styles from "./DatasetRow.module.css";
import Trash from "../assets/trash.svg";
import Status from "./Status";
import Checked from "../assets/blue-checked.svg";
import Unchecked from "../assets/unchecked.svg";

function DatasetRow({
  dataset,
  isChecked,
}: {
  dataset: Dataset;
  isChecked: boolean;
}) {
  const [iconSrc, setIconSrc] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const importIcon = async () => {
      try {
        const icon = await import(`../assets/${dataset.type}.svg`);
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

  return (
    <tr key={dataset.id}>
      <td>
        <img
          src={isClicked ? Checked : Unchecked}
          alt="checked box"
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
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
        <img src={Trash} alt="trash icon" className={styles.statusIcon} />
      </td>
    </tr>
  );
}

export default DatasetRow;
