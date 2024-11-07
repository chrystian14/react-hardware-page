import { useContext } from "react";
import { ModalContext } from "../../../providers/ModalContext";
import { BagIcon } from "../../icons/BagIcon";
import styles from "./styles.module.scss";
import { BagContext } from "../../../providers/BagContext";

export const Nav = () => {
  const { openModal } = useContext(ModalContext);
  const { bagItems } = useContext(BagContext);

  return (
    <nav>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <a href="#">Login</a>
        </li>

        <li className={styles.navLink}>
          <a href="#">Contato</a>
        </li>

        <li className={styles.navLink}>
          <button onClick={openModal}>
            <a>
              <BagIcon />
              <span>{bagItems.length}</span>
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};
