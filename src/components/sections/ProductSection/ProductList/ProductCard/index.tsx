import { useContext } from "react";
import type { Product } from "..";
import { BagContext } from "../../../../../providers/BagContext";
import { BagIcon } from "../../../../icons/BagIcon";
import styles from "./styles.module.scss";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToBag } = useContext(BagContext);

  return (
    <li className={styles.productCard}>
      <figure>
        <img src={product.img} alt="" />
      </figure>

      <div className={styles.productInfo}>
        <div>
          <small className={`text sm ${styles.productCategory}`}>
            {product.category}
          </small>
        </div>

        <h3 className="title three">{product.name}</h3>

        <small className="text sm">à vista</small>

        <p className="text lg green">
          <strong>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </p>

        <small className="text sm">no PIX com 15% de desconto</small>

        <p className="text md red">
          <strong>R$ 211,75</strong>
        </p>

        <small className="text sm">
          em até 12x de
          <strong>
            <span> R$ 17,65</span>
          </strong>
        </small>

        <button className="btn lg fullWidth" onClick={() => addToBag(product)}>
          <BagIcon />
          Adicionar a sacola
        </button>
      </div>
    </li>
  );
};
