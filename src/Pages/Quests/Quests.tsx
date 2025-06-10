import { useNavigate } from "react-router-dom";
import styles from "./Quests.module.scss";
import { BiChevronLeft } from "react-icons/bi";
import cat from "../../assets/image 41.svg";
import coin from "../../assets/coin.png";
import bingo from "../../assets/image (7).png";
import tower from "../../assets/image (6).png";
import cat2 from "../../assets/image (5).png";
import { useState } from "react";

export const Quests = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<any>(false);

  return (
    <div className={styles.quests}>
      <h1 className={styles.quests_back_button} onClick={() => navigate(-1)}>
        <p>
          <BiChevronLeft />{" "}
        </p>
        <span>Задания</span>
      </h1>
      <section className={styles.quests_subtitle}>
        <span className="text-secondary">
          С тебя — выполнить простые задания, <br /> с нас — начислить лапки
        </span>
        <img src={cat} alt="" />
      </section>

      <div className={styles.quests_list}>
        <h2 className="h2">Завершенные</h2>
        <div className={styles.quests_list_wrapper}>
          <div
            onClick={() =>
              setOpen({
                title: "Отметь друга в комментариях!",
                desc: "Сделай селфи на фоне нужного объекта так, чтобы было чётко видно и твоё лицо, и сам объект. Фото должно быть сделано вживую, без фильтров, редактирования, масок или чужих изображений. Обязательно убедись, что всё хорошо видно — иначе модератор не сможет подтвердить фото.",
                button: "Отправить фото боту",
                img: cat2,
              })
            }
            className={styles.quests_list_item}
          >
            <img src={cat2} alt="" />
            <section>
              <span className="text-secondary">
                Отметь друга в комментариях!
              </span>
              <span>Сделай упоминание друга под людям постом</span>
            </section>
            <p className="text-secondary">
              10 000 <img src={coin} alt="" />
            </p>
          </div>
          <div
            onClick={() =>
              setOpen({
                title: "Отметь друга в комментариях",
                desc: "Сделай упоминание друга под любым постом сообщества М24 с комментарием «@ник_друга, подписывайся!»",
                button: "Перейти в сообщество",
                img: tower,
              })
            }
            className={styles.quests_list_item}
          >
            <img src={tower} alt="" />
            <section>
              <span className="text-secondary">Лето в Москве!</span>
              <span>Сделай селфи на фоне хлебзавода и пришли</span>
            </section>
            <p className="text-secondary">
              1 000 <img src={coin} alt="" />
            </p>
          </div>
        </div>
      </div>

      <div className={styles.quests_list}>
        <h2 className="h2">Завершенные</h2>
        <div className={styles.quests_list_wrapper}>
          <div className={styles.quests_list_item}>
            <img src={bingo} alt="" />
            <section>
              <p className="text-secondary">Бинго!</p>
              <span>Заполни поля в игре и получи возможность выйграть</span>
            </section>
          </div>
        </div>
      </div>
      {open && (
        <div className="modal">
          <div className="modal_body">
            <div
              style={{ backgroundImage: `url("${open.img}")` }}
              className={styles.modal_top}
            >
              <figure>
                <img src={open.img} alt="" />
              </figure>
            </div>
            <div className="modal_body_content">
              <h3 className="h3">{open.title}</h3>
              <span className="text-secondary">{open.desc}</span>
              <button className="black-button" onClick={() => setOpen(false)}>
                {open.button}
              </button>
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
