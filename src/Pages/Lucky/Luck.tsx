import styles from "./Luck.module.scss";
import circle from "../../assets/circle.png";
import button from "../../assets/circle_button_act.svg";
import arrow from "../../assets/Ellipse 9.png";
import { useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { useState } from "react";
import gear from "../../assets/Rectangle 10.png";
import coin from "../../assets/Монетка-02 1 (2).png";

export const LuckyHand = () => {
  const [degree, setDegree] = useState(0);
  const [open, setOpen] = useState<any>(false);
  const navigate = useNavigate();

  const prizes = [
    { min: 0, max: 45, name: "x25 монет", img: coin },
    { min: 45, max: 90, name: 'Футболка "мерч"', img: gear },
    { min: 90, max: 135, name: "x50 монет", img: coin },
    { min: 135, max: 180, name: 'Футболка "x2 мерч"', img: gear },
    { min: 180, max: 225, name: "Сюрприз" },
    { min: 225, max: 270, name: "x100 монет", img: coin },
    { min: 270, max: 315, name: 'Футболка "x3 мерч"', img: gear },
    { min: 315, max: 360, name: "x10 монет", img: coin },
  ];

  function getPrizeByDegree(deg: number) {
    console.log(deg);

    const normalized = deg % 360;
    return prizes.find(
      (prize) => normalized >= prize.min && normalized < prize.max
    );
  }

  const clck = () => {
    const deg = Math.floor(Math.random() * (1800 - 1080 + 1)) + 1080;
    setDegree(deg);
    setTimeout(() => {
      setOpen(getPrizeByDegree(deg));
      setDegree(0);
    }, 4000);
  };
  return (
    <div className={styles.luckyHand}>
      <h1 className={styles.luckyHand_back_button} onClick={() => navigate(-1)}>
        <p>
          <BiChevronLeft />{" "}
        </p>
        <span>Лапка удачи</span>
      </h1>
      <span className="text-secondary">
        Тапай и выиграй что-то за-мур-чательное!
      </span>
      <div className={styles.luckyHand_circle}>
        <section>
          <img src={arrow} alt="" />
        </section>
        <figure>
          <img
            style={{ transform: `rotate(${degree}deg)` }}
            src={circle}
            alt=""
          />
          <div
            onClick={clck}
            className={styles.luckyHand_circle_button}
            style={{
              //   background: !timer
              background: "linear-gradient(#FFED7A 0%, #FFCD17 100%)",
              // : "",
            }}
          >
            <img src={button} alt="" />
            {/* <img src={!timer ? button : button1} alt="" /> */}
          </div>
        </figure>
      </div>

      {open && (
        <div className="modal">
          <div className="modal_body">
            <div className={styles.modal_top}>
              <img src={open.img} alt="" />
            </div>
            <div className="modal_body_content">
              <h3 className="h3">Поздравляем!</h3>
              <span className="text-secondary">
                Вы победили в розыгрыше и выиграли {open.name}!
              </span>
              <button
                onClick={() => setOpen(false)}
                style={{ marginTop: "20px" }}
                className="black-button"
              >
                Оформить доставку
              </button>
              <button onClick={() => setOpen(false)} className="white-button">
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
