import { Link, useNavigate } from "react-router-dom";
import styles from "./Team.module.scss";
import { BiChevronLeft, BiLink } from "react-icons/bi";
import { TbUsersPlus } from "react-icons/tb";
import granny from "../../assets/gr.png";
import coin from "../../assets/coin.png";

export const MyTeam = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.myTeam}>
      <h1 className={styles.myTeam_back_button} onClick={() => navigate(-1)}>
        <p>
          <BiChevronLeft />{" "}
        </p>
        <span>Моя команда</span>
      </h1>
      <span className="text-secondary">
        Приглашай друзей, получайте все вместе дополнительные лапки за дружбу и
        боритесь за топ в рейтинге.
      </span>
      <section className={styles.myTeam_params}>
        <div className="text-secondary">
          {" "}
          <TbUsersPlus /> Пригласить друга в телеграме
        </div>
        <div className="text-secondary">
          {" "}
          <BiLink /> Скопировать ссылку на приложение
        </div>
      </section>
      <Link
        className="text-seconday"
        style={{ color: "var(--blue)", textDecoration: "none" }}
        to="#"
      >
        Как работает реферальная программа?
      </Link>
      <section className={styles.myTeam_balance}>
        <div>
          {" "}
          <img src={coin} alt="" />
          <h2 className="h2">999 999</h2>
        </div>
        <span className="text-secondary" style={{ color: "var(--gray)" }}>
          Вы заработали на реферальной программе{" "}
        </span>
      </section>
      <div className={styles.myTeam_list}>
        <h2 className="h2">Мои друзья</h2>
        <div className={styles.myTeam_list_wrapper}>
          <div className={styles.myTeam_list_item}>
            <img src={granny} alt="" />
            <section>
              <p className="text-secondary">Бабушка</p>
              <span>
                <img src={coin} alt="" />
                999 999
              </span>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
