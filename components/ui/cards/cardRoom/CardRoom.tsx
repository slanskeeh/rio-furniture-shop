import Link from "next/link";
import styles from "./CardRoom.module.scss";
import { ICardRoom } from "./CardRoom.types";
import Image from "next/image";

const CardRoom: React.FC<ICardRoom> = ({ href, image, alt, title }) => {
  return (
    <Link className={styles.link} href={href || "#"}>
      <div className={styles.card}>
        {image && (
          <Image src={image} alt={alt || "room"} width={276} height={396} />
        )}
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default CardRoom;
