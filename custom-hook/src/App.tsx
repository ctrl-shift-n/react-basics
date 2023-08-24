import "./App.css";
import useFetchProduct from "./useFetchProduct";

function App() {
  const [data] = useFetchProduct();
  return (
    <div className="App">
      {data && (
        <div>
          <h1>Title: {data.title}</h1>
          <p>Brand: {data.brand}</p>
          <p>Price: {data.price}</p>
        </div>
      )}
    </div>
  );
}

export default App;
