import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./Components/App_Router";
import store from './Store/index';

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter></AppRouter>
      </Provider>
    </>
  );
}

export default App;
