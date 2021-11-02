import { FC } from "react";
import Test from "./components/Test/Count";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index";

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Test />
      </div>
    </Provider>
  );
};

export default App;
