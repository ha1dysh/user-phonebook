import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <BrowserRouter sbasename="user-phonebook">
      <App />
    </BrowserRouter>
  </Provider>
);
