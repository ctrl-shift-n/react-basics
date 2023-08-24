import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Home from "./Home";

function App() {
  return (
    <div className="flex w-screen justify-center">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
