import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  // <Provider store={}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
  ,
  document.getElementById("root")
);
