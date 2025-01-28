import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Library.module.css";
import styles from "./Library.module.css";
import Modal from "../../components/Modal/Modal";
import LibraryModal from "../../components/LibraryModal/LibraryModal";
import { Dataset } from "../../types/datasets.interface";
import { mockDatasets } from "../../mockDatasets";

function Library() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [datasets, setDatasets] = useState<Dataset[]>([]);

  useEffect(() => {
    const fetchData = () => {
      setDatasets(mockDatasets);
    };

    fetchData();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleRemoveDataset = (id: number) => {
    setDatasets(datasets.filter((dataset) => dataset.id !== id));
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div>Work in progress... awaiting designs</div>
        <button className={styles.button} onClick={openModal}>
          Open Modal
        </button>
      </div>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LibraryModal
          datasets={datasets}
          handleRemoveDataset={handleRemoveDataset}
        />
      </Modal>
    </>
  );
}

export default Library;
