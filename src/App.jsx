import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./Components/App_Router";
import store from './Store/index';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer position="bottom-right" />
        <AppRouter></AppRouter>
      </Provider>
    </>
  );
}

export default App;
