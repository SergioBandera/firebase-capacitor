import { Provider } from "react-redux";
// import "./App.css";
import { Header } from "./components/header";
import { Home } from "./components/Home";
import { store } from "./redux/store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Header />
      <Home/>
      </Provider>
    </div>
  );
}

export default App;
