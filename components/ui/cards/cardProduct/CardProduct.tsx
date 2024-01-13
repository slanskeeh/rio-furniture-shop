import Image from "next/image";
import styles from "./CardProduct.module.scss";
import { ICardProduct } from "./CardProduct.types";
import Button from "../../buttons/button/Button";

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
        <div className={styles.card_image_button}>
          <Button
            variant="orange-solid"
            size="m"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.883 3.007L12 3C12.2449 3.00003 12.4813 3.08996 12.6644 3.25272C12.8474 3.41547 12.9643 3.63975 12.993 3.883L13 4V11H20C20.2449 11 20.4813 11.09 20.6644 11.2527C20.8474 11.4155 20.9643 11.6397 20.993 11.883L21 12C21 12.2449 20.91 12.4813 20.7473 12.6644C20.5845 12.8474 20.3603 12.9643 20.117 12.993L20 13H13V20C13 20.2449 12.91 20.4813 12.7473 20.6644C12.5845 20.8474 12.3603 20.9643 12.117 20.993L12 21C11.7551 21 11.5187 20.91 11.3356 20.7473C11.1526 20.5845 11.0357 20.3603 11.007 20.117L11 20V13H4C3.75507 13 3.51866 12.91 3.33563 12.7473C3.15259 12.5845 3.03566 12.3603 3.007 12.117L3 12C3.00003 11.7551 3.08996 11.5187 3.25272 11.3356C3.41547 11.1526 3.63975 11.0357 3.883 11.007L4 11H11V4C11 3.75507 11.09 3.51866 11.2527 3.33563C11.4155 3.15259 11.6397 3.03566 11.883 3.007L12 3L11.883 3.007Z"
                  fill="#E3964A"
                />
              </svg>
            }
          />
        </div>
      </div>
      <div className={styles.card_content}>
        <div className={styles.card_content_info}>
          <p className="p-small-bold">{category}</p>
          <p>{productName}</p>
          <div className={styles.card_content_info_price}>
            <p className={`${!price?.isSale[0] ? "p-bold" : "p-strike"}`}>
              ${price.value}
            </p>
            {price.isSale[0] && <p className="p-bold">${price.isSale[1]}</p>}
          </div>
        </div>
        <div className={styles.card_content_button}>
          <Button
            variant="orange-alpha"
            size="m"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.883 3.007L12 3C12.2449 3.00003 12.4813 3.08996 12.6644 3.25272C12.8474 3.41547 12.9643 3.63975 12.993 3.883L13 4V11H20C20.2449 11 20.4813 11.09 20.6644 11.2527C20.8474 11.4155 20.9643 11.6397 20.993 11.883L21 12C21 12.2449 20.91 12.4813 20.7473 12.6644C20.5845 12.8474 20.3603 12.9643 20.117 12.993L20 13H13V20C13 20.2449 12.91 20.4813 12.7473 20.6644C12.5845 20.8474 12.3603 20.9643 12.117 20.993L12 21C11.7551 21 11.5187 20.91 11.3356 20.7473C11.1526 20.5845 11.0357 20.3603 11.007 20.117L11 20V13H4C3.75507 13 3.51866 12.91 3.33563 12.7473C3.15259 12.5845 3.03566 12.3603 3.007 12.117L3 12C3.00003 11.7551 3.08996 11.5187 3.25272 11.3356C3.41547 11.1526 3.63975 11.0357 3.883 11.007L4 11H11V4C11 3.75507 11.09 3.51866 11.2527 3.33563C11.4155 3.15259 11.6397 3.03566 11.883 3.007L12 3L11.883 3.007Z"
                  fill="#E3964A"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
