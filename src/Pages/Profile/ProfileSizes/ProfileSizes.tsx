import { Link, useNavigate } from "react-router-dom";
import { BackButton } from "../../../Widgets/BackButton/BackButton";
import styles from "./ProfileSizes.module.scss";
import { useEffect, useState } from "react";

export const ProfileSizes = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  const navigate = useNavigate();

  useEffect(() => {
    const sizeObject = JSON.parse(
      localStorage.getItem("profile_sizes_object") || "{}"
    );

    setGender(sizeObject.gender);
    setAge(sizeObject.age);
    setSize(sizeObject.size);

    console.log(sizeObject);
  }, []);

  const handleSubmit = () => {
    const textSize = `${
      gender == "male" ? "Мужской" : "Женский"
    }, возраст ${age}+, размер ${size}`;
    localStorage.setItem("profile_sizes", textSize);
    const objectSize = { gender, age, size };
    localStorage.setItem("profile_sizes_object", JSON.stringify(objectSize));
    navigate(-1);
  };

  return (
    <div className={styles.profileSizes}>
      <BackButton title="Размеры для мерча" />
      <p className="text-secondary">
        Мы используем международную размерную сетку для одежды. Подобрать нужный
        размер можно <Link to="#">в таблице размеров</Link>.
      </p>
      <div className={styles.profileSizes_section}>
        <h3 className="h3">Пол</h3>
        <div className={styles.profileSizes_section_gender}>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              defaultChecked={gender == "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <p
              style={gender != "male" ? { border: "1px solid #B9C9CC" } : {}}
              className={gender == "male" ? "black-button" : "white-button"}
            >
              Мужской
            </p>
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              defaultChecked={gender == "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <p
              style={gender != "female" ? { border: "1px solid#B9C9CC" } : {}}
              className={gender == "female" ? "black-button" : "white-button"}
            >
              Женский
            </p>
          </label>
        </div>{" "}
      </div>
      <div className={styles.profileSizes_section}>
        <h3 className="h3">Возраст</h3>
        <div className={styles.profileSizes_section_age}>
          <label>
            <input
              type="radio"
              name="age"
              value="5"
              defaultChecked={age == "5"}
              onChange={(e) => setAge(e.target.value)}
            />
            <p
              style={age != "5" ? { border: "1px solid#B9C9CC" } : {}}
              className={age == "5" ? "black-button" : "white-button"}
            >
              Ребенок, 5+ лет
            </p>
          </label>
          <label>
            <input
              type="radio"
              name="age"
              value="14"
              defaultChecked={age == "14"}
              onChange={(e) => setAge(e.target.value)}
            />
            <p
              style={age != "14" ? { border: "1px solid#B9C9CC" } : {}}
              className={age == "14" ? "black-button" : "white-button"}
            >
              Подросток, 14+ лет
            </p>
          </label>
          <label>
            <input
              type="radio"
              name="age"
              value="18"
              defaultChecked={age == "18"}
              onChange={(e) => setAge(e.target.value)}
            />
            <p
              style={age != "18" ? { border: "1px solid#B9C9CC" } : {}}
              className={age == "18" ? "black-button" : "white-button"}
            >
              Взрослый, 18+ лет
            </p>
          </label>
        </div>
      </div>{" "}
      <div className={styles.profileSizes_section}>
        <h3 className="h3">Размер</h3>
        <div className={styles.profileSizes_section_size}>
          {sizes.map((i) => (
            <label>
              <input
                type="radio"
                name="size"
                value={i}
                defaultChecked={age == i}
                onChange={(e) => setSize(e.target.value)}
              />
              <p
                style={size != i ? { border: "1px solid#B9C9CC" } : {}}
                className={size == i ? "black-button" : "white-button"}
              >
                {i}
              </p>
            </label>
          ))}
        </div>
      </div>
      <button
        disabled={size == undefined || gender == undefined || age == undefined}
        className={
          size == undefined || gender == undefined || age == undefined
            ? "white-button"
            : "black-button"
        }
        onClick={handleSubmit}
      >
        Сохранить данные
      </button>
    </div>
  );
};
