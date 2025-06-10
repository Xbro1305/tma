import { BiChevronLeft } from "react-icons/bi";
import styles from "./Votes.module.scss";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/vote_image (1).png";
import img2 from "../../assets/vote_image (2).png";
import img3 from "../../assets/vote_image (3).png";
import img4 from "../../assets/vote_image (4).png";
import check from "../../assets/Ellipse 11.svg";
import { useState } from "react";

export const Vote = () => {
  const [checked, setChecked] = useState<false | number>(false);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const variants = [
    { title: "Красная площадь", img: img1 },
    { title: "Московский метрополитен", img: img2 },
    { title: "Большой театр", img: img3 },
    { title: "Музей холодной войны", img: img4 },
  ];

  return (
    <div className={styles.vote}>
      <h1 className={styles.vote_back_button} onClick={() => navigate(-1)}>
        <p>
          <BiChevronLeft />{" "}
        </p>
        <span>голосуй</span>
      </h1>
      <span className="text-secondary">
        Какой быть Москве — решать тебе! Выбирай поезд метро будущего, название
        новой улицы или крутую кличку питомца из Московского зоопарка.{" "}
      </span>
      <p className={`text-secondary ${styles.vote_timeout}`}>
        До конца голосования: <b>128:12:59</b>
      </p>
      <div className={styles.vote_variants}>
        {variants.map((item, index) => (
          <div
            onClick={() => setChecked(index)}
            key={index}
            className={styles.vote_variants_item}
          >
            <figure>
              <img
                className={styles.vote_variants_item_img}
                src={item.img}
                alt={item.title}
                style={{
                  border: `3px solid ${
                    checked === index ? "var(--blue)" : "transparent"
                  }`,
                  borderRadius: "20px",
                }}
              />
              <div className={styles.vote_variants_item_checkbox}>
                {index === checked && <img src={check} alt="" />}
              </div>
            </figure>
            <h3 className="h3">{item.title}</h3>
          </div>
        ))}
      </div>
      <button onClick={() => setOpen(true)} className="black-button">
        Проголосовать
      </button>
      {open && checked !== false && (
        <div className="modal">
          <div className="modal_body">
            <div
              style={{
                backgroundImage: `url("${variants[checked].img}")`,
                display: "flex",
              }}
              className={styles.modal_top}
            >
              <figure>
                <img src={variants[checked].img} alt="" />
              </figure>
            </div>
            <div className="modal_body_content">
              <h3 className="h3">Голос за {variants[checked].title}</h3>
              <span className="text-secondary">
                Сейчас голоса ещё подсчитываются, но уже ясно — борьба идёт
                плотная, и каждый голос может изменить расклад! Итоги смотрите
                вечером в телеграм-канале М24.
              </span>
              <button className="white-button" onClick={() => setOpen(false)}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
