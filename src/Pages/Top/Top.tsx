import { useNavigate } from "react-router-dom";
import styles from "./Top.module.scss";
import granny from "../../assets/1. Главный экран (1).png";
import granny1 from "../../assets/1. Главный экран (1).png";
import { BiChevronLeft } from "react-icons/bi";
import { useState } from "react";
import coins from "../../assets/coin.png";

export const Top = () => {
  const [top, setTop] = useState(0);
  const navigate = useNavigate();

  const friends = [
    { img: granny, title: "Бабушка", coins: 999999 },
    { img: granny1, title: "Петрович", coins: 10000 },
    { img: granny, title: "Бродяга", coins: 1000 },
    { img: granny1, title: "Я", coins: 100, me: true },
  ];

  return (
    <div className={styles.top}>
      <h1 className={styles.top_back_button} onClick={() => navigate(-1)}>
        <p>
          <BiChevronLeft />
        </p>
        <span>Я в топе</span>
      </h1>
      <span className="text-secondary">
        Будь в топе — выиграй уникальные призы. Но и про друзей не забывай:
        приглашай в приложение и соревнуйся с ними.
      </span>
      <div className={styles.top_category}>
        <div
          onClick={() => setTop(0)}
          className={`${top == 0 && styles.top_category_active}`}
        >
          Мои друзья
        </div>{" "}
        <div
          onClick={() => setTop(1)}
          className={`${top == 1 && styles.top_category_active}`}
        >
          Весь топ
        </div>
      </div>
      <div className={styles.top_list}>
        {friends.map((item, index) => (
          <div
            style={{
              border: `1px solid ${item.me ? "var(--blue)" : "transparent"}`,
            }}
            key={index}
            className={styles.top_list_item}
          >
            <img src={item.img} alt="" />
            <section>
              <p className="text-secondary">{item.title}</p>
              <span>
                <img src={coins} alt="" />
                {item.coins}
              </span>
            </section>
            <p>{index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
