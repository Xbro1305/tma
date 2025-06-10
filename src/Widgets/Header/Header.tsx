import { NumericFormat } from "react-number-format";
import left from "../../assets/Header_left.svg";
import user from "../../assets/user.svg";
import coin from "../../assets/coin.png";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.header_section}>
        <img src={coin} alt="" />
        <NumericFormat
          displayType="text"
          thousandSeparator=" "
          value={999999}
        />
      </section>
      <nav>
        <section className={styles.header_section}>
          <img src={user} /> <span>Профиль</span>
        </section>
        <section className={styles.header_section}>
          <img src={left} alt="" />
        </section>
      </nav>
    </header>
  );
};
