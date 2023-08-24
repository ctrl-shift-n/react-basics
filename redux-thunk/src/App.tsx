import React from "react";
import { Provider } from "react-redux";
import Home from "./Home";
import { store } from "./store/store";

function App() {
  return (
    <div className="flex justify-center w-screen h-full p-5">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
