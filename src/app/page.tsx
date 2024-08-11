import LeftMenu from "@/components/leftMenu/LeftMenu";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <main className="flex mx-20 overflow-x-auto">
      <LeftMenu />
      <Products />
    </main>
  );
}
