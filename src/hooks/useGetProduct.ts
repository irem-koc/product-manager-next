import { getProduct } from "@/services/fetchData";
import { useQuery } from "@tanstack/react-query";

const useGetProduct = (id:string) => {
  return useQuery({
    queryKey: ['getAllProduct', id],
    queryFn: () => getProduct(id),
  });

};

export { useGetProduct };
