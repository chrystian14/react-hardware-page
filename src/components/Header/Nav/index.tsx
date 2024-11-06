import { BagIcon } from "../../icons/BagIcon";
import styles from "./styles.module.scss";

export const Nav = () => {
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
          <button>
            <a>
              <BagIcon />
              <span>12</span>
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};
