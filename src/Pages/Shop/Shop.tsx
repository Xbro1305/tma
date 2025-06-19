import { BackButton } from "../../Widgets/BackButton/BackButton";
import styles from "./Shop.module.scss";
import gear from "../../assets/Rectangle 10.png";
import shop2 from "../../assets/shop_2.png";
import shop3 from "../../assets/shop_3.png";
import shop4 from "../../assets/shop_4.png";
import shop5 from "../../assets/shop_5.png";
import shop6 from "../../assets/shop_6.png";
import coin from "../../assets/coin.png";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { FaChevronRight } from "react-icons/fa";
import { RouterPaths } from "../../App";
import { useNavigate } from "react-router-dom";

interface item {
  title: string;
  img: any;
  id: number;
  price: number;
  buyed?: boolean;
}

export const Shop = () => {
  const [selected, setSelected] = useState<item[]>([]);
  const [price, setPrice] = useState(0);
  const [stage, setStage] = useState(1);
  const size = localStorage.getItem("profile_sizes");
  const receiver = localStorage.getItem("profile_receiver");
  const postAddress = localStorage.getItem("profile_post_address");
  const navigate = useNavigate();

  useEffect(() => {
    let pr = 0;
    selected.forEach((i) => (pr += i.price));
    setPrice(pr);
  }, [selected]);

  const items: item[] = [
    {
      title: "Оранжевая триктожная кофта",
      img: gear,
      id: 1,
      price: 5000,
      buyed: true,
    },
    {
      title: "Черная футболка",
      img: shop2,
      id: 2,
      price: 10000,
    },
    {
      title: "Оранжевый худи",
      img: shop3,
      id: 3,
      price: 50000,
    },
    {
      title: "Фиолетовый худи",
      img: shop4,
      id: 4,
      price: 100000,
    },
    {
      title: "Белый xуди",
      img: shop5,
      id: 5,
      price: 500000,
    },
    {
      title: "Синий худи",
      img: shop6,
      id: 6,
      price: 25000,
    },
  ];
  return (
    <div className={styles.shop}>
      {stage == 1 && (
        <>
          <div className={styles.shop_top}>
            <BackButton title="мерч-маркет" />
            <p className="text-secondary">
              Выберите на понравившийся мерч, <br /> чтобы оформить доставку.
            </p>
          </div>

          <div className={styles.shop_list}>
            {items
              .sort((a, b) => a.price - b.price)
              .map((item, index) => (
                <div
                  className={`${
                    selected.find((i) => i.id == item.id) &&
                    styles.shop_list_item_checked
                  } ${item.buyed && styles.shop_list_item_buyed} ${
                    styles.shop_list_item
                  }`}
                  key={index}
                  onClick={() => {
                    const items = selected.find((i) => i.id == item.id)
                      ? selected.filter((i) => i.id != item.id)
                      : [...selected, item];

                    !item?.buyed == true && setSelected(items);
                  }}
                >
                  <p className="text-secondary">{item.title}</p>
                  <img src={item.img} alt="" />
                  <section>
                    {item?.buyed ? (
                      "✔ Уже куплена"
                    ) : (
                      <>
                        <img src={coin} alt="" />
                        <NumericFormat
                          value={item.price}
                          displayType="text"
                          thousandSeparator=" "
                        />
                      </>
                    )}
                  </section>
                </div>
              ))}
          </div>

          {selected.length != 0 && (
            <div className={styles.shop_modal}>
              <button
                onClick={() => setStage(2)}
                className={`black-button ${styles.shop_modal_black_button}`}
              >
                <p>Оформить доставку мерча</p>
                <section>
                  <img src={coin} alt="" />
                  <NumericFormat
                    value={price}
                    displayType="text"
                    thousandSeparator=" "
                  />
                </section>
              </button>
              <button className="white-button" onClick={() => setSelected([])}>
                Отменить выбор
              </button>
            </div>
          )}
        </>
      )}
      {stage == 2 && (
        <div className={styles.stage2}>
          <BackButton title="оформить доставку" action={() => setStage(1)} />
          <div className={styles.stage2_content}>
            <div className={styles.stage2_content_item}>
              <section>
                <h3 className="h3">
                  Отделение почты <i>*</i>
                </h3>
                <span className="text-secondary">
                  {postAddress
                    ? postAddress
                    : "Укажите почту, откуда заберете подарок"}
                </span>
              </section>
              <p
                className={
                  postAddress
                    ? styles.stage2_arrow_inactive
                    : styles.stage2_arrow
                }
              >
                {postAddress ? "Изменить" : ""}
                <FaChevronRight />
              </p>
            </div>
            <div className={styles.stage2_content_item}>
              <section>
                <h3 className="h3">
                  Получатель <i>*</i>
                </h3>
                <span className="text-secondary">
                  {receiver ? receiver : "Укажите ФИО и номер телефона"}
                </span>
              </section>
              <p
                className={
                  receiver ? styles.stage2_arrow_inactive : styles.stage2_arrow
                }
              >
                {receiver ? "Изменить" : ""}
                <FaChevronRight />
              </p>
            </div>
            <div
              onClick={() => navigate(RouterPaths.profileSizes)}
              className={styles.stage2_content_item}
            >
              <section>
                <h3 className="h3">
                  Размеры для мерча <i>*</i>
                </h3>
                <span className="text-secondary">
                  {size ? size : "Укажите размеры для одежды"}
                </span>
              </section>
              <p
                className={
                  size ? styles.stage2_arrow_inactive : styles.stage2_arrow
                }
              >
                {size ? "Изменить" : ""}
                <FaChevronRight />
              </p>
            </div>
          </div>
          <div className={styles.stage2_content}>
            <h3 className="h3">К получению</h3>
            <div className={styles.stage2_items}>
              {selected.map((item) => (
                <img src={item.img} alt="" />
              ))}
            </div>
          </div>
          <button
            className={
              size == null || postAddress == null || receiver == null
                ? "white-button"
                : "black-button"
            }
            disabled={size == null || postAddress == null || receiver == null}
          >
            Подтвердить данные и оформить доставку
          </button>
        </div>
      )}
    </div>
  );
};
