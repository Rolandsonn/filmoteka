import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./assets/styles/index.scss";
import { Provider } from "./store/Context";
const App = () => {
  return (
    <>
      <Provider>
        <AppRoutes />
      </Provider>
    </>
  );
};

export default App;
