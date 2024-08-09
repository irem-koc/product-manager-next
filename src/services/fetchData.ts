export const getAllProducts = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/products`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error while fetching products: ${error}`);
  }
};
