import React, { useEffect, useState } from "react";

interface dataType {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const useFetchProduct = () => {
  const [data, setData] = useState<dataType>({} as dataType);
  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return [data];
};

export default useFetchProduct;
