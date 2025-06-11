import styles from "./Home.module.scss";
import banner from "../../assets/Group 4.png";
import img1 from "../../assets/Голосуй.svg";
import img2 from "../../assets/Разгадай москву.svg";
import img3 from "../../assets/Лапка удачи.svg";
import img4 from "../../assets/Конкурс.svg";
import img5 from "../../assets/Задания.svg";
import img6 from "../../assets/Я в топе.svg";
import img7 from "../../assets/Моя команда.svg";
import clip_img from "../../assets/image.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const Home = () => {
  const navigationItems = [
    {
      title: "Разгадай Москву",
      desc: "Знаешь Москву? Докажи: отвечай на вопросы и зарабатывай лапки",
      img: img1,
      link: "",
    },
    {
      title: "Лапка удачи",
      desc: "Тапни и выиграй что-то за-мур-чательное!",
      img: img2,
      link: "/luckyHand",
    },
    {
      title: "Конкурс",
      desc: "Участвуй в конкурсах от Бублика и его друзей",
      img: img3,
      link: "/contest",
    },
    {
      title: "Задания",
      desc: "Когда «домашка» не как в школе, а в радость",
      img: img4,
      link: "/quests",
    },
    {
      title: "Голосуй!",
      desc: "Участвуй в голосовании и получай подарки!",
      img: img5,
      link: "/vote",
    },
  ];
  return (
    <div className={styles.home}>
      <div className={styles.home_intro}>
        <img src={banner} alt="" />
      </div>
      <button
        style={{ margin: "0 10px", width: "calc(100% - 20px)" }}
        className="black-button"
      >
        Мерч маркет
      </button>
      <div className={styles.home_navigation}>
        {navigationItems.map((item, index) => (
          <Link
            to={item.link}
            className={styles.home_navigation_item}
            key={index}
          >
            <h3 className="h3">{item.title}</h3>
            <span>{item.desc}</span>
            <img src={item.img} alt="" />
          </Link>
        ))}
      </div>
      <div className={styles.home_friends}>
        <h1 className="h1">все свои</h1>
        <div className={styles.home_friends_list}>
          <Link to={"/top"} className={styles.home_friends_list_item}>
            <h3 className="h3">Я в топе</h3>
            <span>
              Узнай, на каком ты месте среди лидеров и догоняй. Ну или сохраняй
              лидерский задел :)
            </span>
            <img src={img6} alt="" />
          </Link>
          <Link to={"/myTeam"} className={styles.home_friends_list_item}>
            <h3 className="h3">Моя команда</h3>
            <span>
              Зови друзей: вместе интереснее, да и дополнительные лапки получите
              за компанию
            </span>
            <img src={img7} alt="" />
          </Link>
        </div>
        <div className={styles.home_friends_adv}>
          <h3 className="h3">Это нельзя пропустить</h3>
          <span>
            С тебя подписка на наш тг-канал, с нас — интересный контент, который
            не даст заскучать: будет что обсудить с друзьями и коллегами
          </span>
          <button className="black-button">text</button>
        </div>
      </div>
      <div className={styles.home_clips}>
        <h1 className="h1">Листай!</h1>
        <span className="text-secondary">
          Cмотри лучший контент в удобном формате: ролики, клипы, карточки.
        </span>
        <div>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            slidesPerView="auto"
            spaceBetween={20}
            grabCursor={true}
            freeMode={true}
            className="client-carousel"
          >
            <SwiperSlide
              style={{
                width: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className={styles.home_clips_item}>
                <img src={clip_img} alt="" />
                <span>23 мая, 17:58</span>
                <p className="text-secondary">
                  Фестиваль проходит в дни и в рамках программы «Киновыходные» 7
                  и 8 июня
                </p>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide
              style={{
                width: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className={styles.home_clips_item}>
                <img src={clip_img} alt="" />
                <span>23 мая, 17:58</span>
                <p className="text-secondary">
                  Фестиваль проходит в дни и в рамках программы «Киновыходные» 7
                  и 8 июня
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
