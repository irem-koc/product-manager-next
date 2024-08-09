import { getAllProducts } from "@/services/fetchData";
import { useQuery } from "@tanstack/react-query";

const useGetAllProducts = () => {
  return useQuery({
    queryKey: ['getAllProducts'],
    queryFn: () => getAllProducts(),
  });

};

export { useGetAllProducts };
