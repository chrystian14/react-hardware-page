import { useContext } from "react";
import { ModalContext } from "../../../providers/ModalContext";
import styles from "./styles.module.scss";
import { FaXmark } from "react-icons/fa6";

export const ModalHeader = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <header className={styles.modalHeader}>
      <h2 className="title two">Sacola</h2>
      <button onClick={closeModal}>
        <FaXmark />
      </button>
    </header>
  );
};
