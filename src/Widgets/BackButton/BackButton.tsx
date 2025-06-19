import { BiChevronLeft } from "react-icons/bi";
import styles from "./BackButton.module.scss";
import { useNavigate } from "react-router-dom";

export const BackButton = ({
  title,
  action,
}: {
  title: string;
  action?: () => void;
}) => {
  const navigate = useNavigate();

  const onclick = action ? action : () => navigate(-1);

  return (
    <h1 className={styles.back_button} onClick={onclick}>
      <p>
        <BiChevronLeft />{" "}
      </p>
      <span>{title}</span>
    </h1>
  );
};
