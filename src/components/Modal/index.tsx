import styles from "./styles.module.scss";
import { ModalHeader } from "./ModalHeader";
import { EmptyBag } from "./EmptyBag";
import { BagContext } from "../../providers/BagContext";
import { useContext } from "react";
import { BagDetails } from "./BagDetails";

export const Modal = () => {
  const { bagItems } = useContext(BagContext);

  return (
    <div className={styles.modalBackdrop} role="dialog" aria-modal="true">
      <div className={styles.modalBox}>
        <ModalHeader />
        {bagItems.length === 0 ? <EmptyBag /> : <BagDetails />}
      </div>
    </div>
  );
};
