export const getAllProducts = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/products?limit=0`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error while fetching products: ${error}`);
  }
};
export const getProduct = async (id:string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/products/${id}`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Error while fetching product: ${error}`);
  }
}