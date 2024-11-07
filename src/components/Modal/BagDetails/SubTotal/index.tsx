import { useContext } from "react";
import { BagContext } from "../../../../providers/BagContext";
import styles from "./styles.module.scss";
import { formatCurrencyBRL } from "../../../../utils/currency";

export const SubTotal = () => {
  const { bagItems } = useContext(BagContext);

  const bagSubtotal = bagItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  return (
    <div className={styles.subTotal}>
      <h3 className="title three">SubTotal</h3>
      <p className="text md">
        <strong>{formatCurrencyBRL(bagSubtotal)}</strong>
      </p>
    </div>
  );
};
