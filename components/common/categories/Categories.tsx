import styles from "./Categories.module.scss";
import { ICategories } from "./Categories.types";

const Categories: React.FC<ICategories> = ({ children, title }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <div className={styles.categories}>{children}</div>
    </section>
  );
};

export default Categories;
