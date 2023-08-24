import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, productType } from "./store/productSlice";

const Home = () => {
  const response = useSelector((state: any) => state.product);
  const dispatch = useDispatch<any>();

  return (
    <div>
      <h1 className="text-lg font-semibold mb-4">Redux thunk example</h1>
      {response?.data.length > 0 ? (
        <div className="flex flex-col gap-3">
          {response?.data.map((item: productType, index: number) => {
            return (
              <p className="bg-gray-100 p-2 rounded-sm" key={index}>
                {item.title}
              </p>
            );
          })}
        </div>
      ) : (
        <button
          className="text-center p-3 rounded-md bg-blue-500 text-white text-base"
          onClick={() => dispatch(getProducts())}
        >
          Fetch data
        </button>
      )}
      {response?.loading && <p>Loading...</p>}
      {response?.error && <p>{response.error}</p>}
    </div>
  );
};

export default Home;
