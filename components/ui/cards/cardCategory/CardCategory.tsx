import Link from "next/link";
import styles from "./CardCategory.module.scss";
import { ICardCategory } from "./CardCategory.types";
import Image from "next/image";

const CardCategory: React.FC<ICardCategory> = ({ href, img, alt, title }) => {
  return (
    <Link className={styles.link} href={href || "#"}>
      <div className={styles.card}>
        {img && (
          <Image src={img} alt={alt || "category"} width={320} height={184} />
        )}
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default CardCategory;
