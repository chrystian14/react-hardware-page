import { useContext } from "react";
import { SubTotal } from "./SubTotal";
import styles from "./styles.module.scss";
import { BagContext } from "../../../providers/BagContext";
import { BagList } from "./BagList";

export const BagDetails = () => {
  const { setBagItems } = useContext(BagContext);

  const handleRemoveAllItems = () => {
    setBagItems([]);
  };

  return (
    <div className={styles.bagDetails}>
      <BagList />
      <SubTotal />
      <button className="btn lg fullWidth" onClick={handleRemoveAllItems}>
        REMOVER TODOS OS ITENS
      </button>
    </div>
  );
};
