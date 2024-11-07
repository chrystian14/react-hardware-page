import styles from "./styles.module.scss";
import { BagList } from "./BagList";
import { ModalHeader } from "./ModalHeader";
import { SubTotal } from "./SubTotal";
import { EmptyBag } from "./EmptyBag";
import { BagContext } from "../../providers/BagContext";
import { useContext } from "react";

export const Modal = () => {
  const { bagItems, setBagItems } = useContext(BagContext);

  const handleRemoveAllItems = () => {
    setBagItems([]);
  };

  return (
    <div className={styles.modalBackdrop} role="dialog" aria-modal="true">
      <div className={styles.modalBox}>
        <ModalHeader />

        {bagItems.length === 0 ? (
          <EmptyBag />
        ) : (
          <div className={styles.bagDetails}>
            <BagList />
            <SubTotal />
            <button onClick={handleRemoveAllItems} className="btn lg fullWidth">
              REMOVER TODOS OS ITENS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
