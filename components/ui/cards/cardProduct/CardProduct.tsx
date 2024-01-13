import Image from "next/image";
import styles from "./CardProduct.module.scss";
import { ICardProduct } from "./CardProduct.types";

const CardProduct: React.FC<ICardProduct> = ({
  id,
  category,
  productName,
  image,
  price,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image width={280} height={276} src={image} alt={category} />
      </div>
    </div>
  );
};

export default CardProduct;
