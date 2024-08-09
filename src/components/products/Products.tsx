"use client";
import { useGetAllProducts } from "@/hooks/useGetAllProducts";
type Props = {};

const Products = (props: Props) => {
  const { data, isLoading } = useGetAllProducts();
  console.log(data?.products?.length);
  if (isLoading) return <div>Loading</div>;
  return <div>Products length ---- {data?.products?.length}</div>;
};

export default Products;
