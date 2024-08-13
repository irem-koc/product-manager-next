"use client";
import { useGetProduct } from "@/hooks/useGetProduct";

const ProductItemDetail = ({ params }) => {
  const { id } = params;
  const { data, isLoading } = useGetProduct(id);
  return <div>ProductItemDetail</div>;
};

export default ProductItemDetail;
