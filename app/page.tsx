import Categories from "@/components/common/categories/Categories";
import CardCategory from "@/components/ui/cards/cardCategory/CardCategory";
import CardProduct from "@/components/ui/cards/cardProduct/CardProduct";
import CardRoom from "@/components/ui/cards/cardRoom/CardRoom";

export default function Home() {
  return (
    <main>
      <Categories title="Категории">
        <CardCategory title="Стулья" img="/assets/images/chairs.jpg" />
        <CardCategory title="Диваны" img="/assets/images/sofas.jpg" />
        <CardCategory title="Столы" img="/assets/images/desks.jpg" />
      </Categories>
      <CardProduct
        id="2323"
        category="SOFA"
        productName="Landskrona"
        price={{
          value: 549,
          isSale: [true, 499],
        }}
        image="/assets/images/products/101.png"
      />
      <CardRoom title="Room" image="/assets/images/products/101.png" />
    </main>
  );
}
