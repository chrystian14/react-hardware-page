import { useContext } from "react";
import styles from "./styles.module.scss";
import { FaRegTrashCan, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { BagContext, type BagItem } from "../../../../../providers/BagContext";
import { formatCurrencyBRL } from "../../../../../utils/currency";

export const BagCard = ({ bagItem }: { bagItem: BagItem }) => {
  const { removeFromBag, removeItemQuantityFromBag, addToBag } =
    useContext(BagContext);

  return (
    <li className={styles.bagCard}>
      <figure>
        <img
          src={bagItem.img}
          alt={`Imagem do Produto adicionado a mochila: ${bagItem.name}`}
        />
      </figure>

      <div className={styles.bagItemDetails}>
        <p className="text">{bagItem.name}</p>

        <div className={styles.itemQuantity}>
          <p className="text sm">Quantidade:</p>
          <button
            disabled={bagItem.quantity === 1}
            onClick={() => removeItemQuantityFromBag(bagItem.id, 1)}
          >
            <FaChevronLeft />
          </button>
          <span className="text">
            <strong>{bagItem.quantity}</strong>
          </span>
          <button onClick={() => addToBag(bagItem)}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <span className="text">
        <strong>{formatCurrencyBRL(bagItem.price * bagItem.quantity)}</strong>
      </span>

      <button onClick={() => removeFromBag(bagItem.id)}>
        <FaRegTrashCan size={20} />
      </button>
    </li>
  );
};
