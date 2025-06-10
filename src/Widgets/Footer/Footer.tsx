import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/footer_logo.svg";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="" />
      <section>
        <Link className="text-secondary" to="##">
          Порядок и условия проведения акции
        </Link>
        <Link className="text-secondary" to="#">
          Обмен игровых лапок на призы
        </Link>
        <Link className="text-secondary" to="#">
          Политика конфиденциальности
        </Link>
        <Link className="text-secondary" to="#">
          Обработка персональных данных
        </Link>
      </section>
      <span className="text-secondary">
        Проект государственного телеканала «Москва 24». Информация в приложении
        не является публичной офертой. Все права защищены.{" "}
      </span>
      <span className="text-secondary">2011—2025</span>
    </div>
  );
};
