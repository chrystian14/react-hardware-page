import styles from "./styles.module.scss";
import { BagCard } from "./BagCard";
import { BagContext } from "../../../providers/BagContext";
import { useContext } from "react";

export const BagList = () => {
  const { bagItems, removeFromBag, removeItemQuantityFromBag, addToBag } =
    useContext(BagContext);

  return (
    <ul className={styles.bagList}>
      {bagItems.map((bagItem) => {
        return (
          <BagCard
            key={bagItem.id}
            bagItem={bagItem}
            removeFromBag={removeFromBag}
            removeItemQuantityFromBag={removeItemQuantityFromBag}
            addToBag={addToBag}
          />
        );
      })}
    </ul>
  );
};
