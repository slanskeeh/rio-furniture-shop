import Image from "next/image";
import styles from "./Button.module.scss";
import { IButton } from "./Button.types";

const Button: React.FC<IButton> = ({ variant, size, color, text, icon }) => {
  const iconElem =
    typeof icon === "string" ? (
      <Image src={icon} width={24} height={24} alt="icon" />
    ) : (
      icon
    );

  return (
    <button
      data-size={size}
      data-color={color}
      data-variant={variant}
      className={styles.button}
    >
      {icon && <div className={styles.button_icon}>{iconElem}</div>}
      <p className="p-bold">{text}</p>
    </button>
  );
};

export default Button;
