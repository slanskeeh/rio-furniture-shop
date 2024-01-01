import styles from "./Categories.module.scss";
import { ICategories } from "./Categories.types";
import { PropsWithChildren, ReactNode } from "react";
import CategoriesSlider from "./categoriesSlider/CategoriesSlider";

const Categories: React.FC<ICategories & PropsWithChildren> = ({
  title,
  children,
}) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <div className={styles.categories}>
        <CategoriesSlider cards={children as ReactNode[]} />
      </div>
    </section>
  );
};

export default Categories;
