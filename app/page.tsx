import Categories from "@/components/common/categories/Categories";
import CardCategory from "@/components/ui/cards/cardCategory/CardCategory";

export default function Home() {
  return (
    <main>
      <Categories title="Категории">
        <CardCategory title="Стулья" img="/assets/images/chairs.jpg" />
        <CardCategory title="Диваны" img="/assets/images/sofas.jpg" />
        <CardCategory title="Столы" img="/assets/images/desks.jpg" />
      </Categories>
    </main>
  );
}
