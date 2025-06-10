import styles from "./Contest.module.scss";
import banner from "../../assets/contest_banner.png";
import { useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { useState } from "react";

export const Contest = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [modal, setModal] = useState(0);
  const winners = [
    { username: "@moonrise77", gender: "male", prize: "iPhone 15 Pro" },
    { username: "@choco_latte", gender: "female", prize: "AirPods Pro" },
    {
      username: "@pixelrider",
      gender: "male",
      prize: "умные часы Apple Watch",
    },
    {
      username: "@sasha_blaze",
      gender: "male",
      prize: "сертификат на 5000₽ в Ozon",
    },
    {
      username: "@frostbite_art",
      gender: "female",
      prize: "портативную колонку JBL",
    },
    { username: "@neonfoxx", gender: "male", prize: "фитнес-браслет Xiaomi" },
    { username: "@lucky_iris", gender: "female", prize: "набор мерча от M24" },
    { username: "@codeowl23", gender: "male", prize: "пауэрбанк Anker" },
    {
      username: "@daria.wave",
      gender: "female",
      prize: "подписку на Яндекс Плюс на год",
    },
    { username: "@sky_matter", gender: "male", prize: "LED-проектор для дома" },
  ];

  return (
    <div className={styles.contest}>
      <h1 className={styles.contest_back_button} onClick={() => navigate(-1)}>
        <p>
          <BiChevronLeft />{" "}
        </p>
        <span>конкурс</span>
      </h1>
      <span className="text-secondary">
        Принимай участие в конкурсе! Новый месяц — новый конкурс. Чтобы принять
        участие в конкурсе, нужно выполнить простые условия.
      </span>
      <div className={styles.contest_content}>
        <img src={banner} alt="" />
        <div className={styles.contest_content_bottom}>
          {!expanded && (
            <>
              <section className="text-secondary">
                Мы разыгрываем супер-приз в нашем мини-приложении.
                <br />
                <br />
                <b> Условия просты: </b>
                <ol>
                  <li>Подпишись на канал M24</li>
                  <li>
                    Поделись ссылкой на розыгрыш на своих страницах в соцсетях.
                    Минимум — в одной
                  </li>
                </ol>
                <br />
                <br />
                🏆 Победителя выберем случайным образом уже 30 июня! Не упусти
                шанс — удача может улыбнуться именно тебе! 🍀 <br /> <br />
                Победителя объявим в этом приложении.
              </section>
              <button
                className="black-button"
                onClick={() => setExpanded(true)}
              >
                Подписаться на канал
              </button>
            </>
          )}
          {expanded && (
            <button className="black-button" onClick={() => setModal(1)}>
              Принять участие
            </button>
          )}
          <span className="text-secondary">Уже 1232 участника!</span>
        </div>
      </div>
      <div className={styles.contest_winners}>
        <h3 className="h3">Последние победители</h3>
        <div className={styles.contest_winners_list}>
          {winners.map((winner, index) => (
            <div
              className={`text-secondary ${styles.contest_winners_list_item}`}
              key={index}
            >
              <i>{winner.username}</i> —{" "}
              {winner.gender === "female" ? "выиграла" : "выиграл"}{" "}
              <b>{winner.prize}</b>
            </div>
          ))}
        </div>
      </div>
      {modal == 1 && (
        <div className="modal">
          <div className="modal_body">
            <div className="modal_body_content">
              <h3 className="h3">Вы приняли участие в конкурсе</h3>
              <span className="text-secondary">
                Мы сообщим о результатах 6 апреля в 22 вечера по МСК времени.
                Желаем удачи выиграть самые крутые призы!
              </span>
              <button
                onClick={() => setModal(0)}
                className="white-button"
                style={{ marginTop: "20px" }}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
