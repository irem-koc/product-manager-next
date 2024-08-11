"use client";
import { useGetAllProducts } from "@/hooks/useGetAllProducts";
import { Product } from "@/types/types";
import ProducListItem from "../producListItem/ProducListItem";
type Props = {};

const Products = (props: Props) => {
  const { data, isLoading } = useGetAllProducts();
  console.log(data?.products?.length);
  console.log(data, " --->>>> data");
  if (isLoading) return <div>Loading</div>;
  return (
    <div className="flex flex-wrap justify-center mx-auto my-5">
      {data?.products &&
        !isLoading &&
        data?.products?.map((product: Product) => (
          <ProducListItem key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Products;
