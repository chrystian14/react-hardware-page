import styles from "./styles.module.scss";
import { BagCard } from "./BagCard";

import { useContext } from "react";
import { BagContext } from "../../../../providers/BagContext";

export const BagList = () => {
  const { bagItems } = useContext(BagContext);

  return (
    <ul className={styles.bagList}>
      {bagItems.map((bagItem) => {
        return <BagCard key={bagItem.id} bagItem={bagItem} />;
      })}
    </ul>
  );
};
