import { useContext } from "react";
import { BagContext } from "../../../providers/BagContext";
import styles from "./styles.module.scss";

export const SubTotal = () => {
  const { bagItems } = useContext(BagContext);

  const bagSubtotal = () => {
    const subTotal = bagItems.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);

    return subTotal;
  };

  return (
    <div className={styles.subTotal}>
      <h3 className="title three">SubTotal</h3>
      <p className="text md">
        <strong>
          {bagSubtotal().toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </p>
    </div>
  );
};
