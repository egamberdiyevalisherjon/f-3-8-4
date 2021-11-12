import "./App.css";
import Boshqasi from "./Components/Boshqasi";
import Home from "./Components/Home";
import Showcase from "./Components/Showcase";
import Provider from "./Context";

function App() {
  return (
    <Provider>
      {/* <div>Context</div> */}
      <Home />
      <Showcase />
      <Boshqasi />
    </Provider>
  );
}

export default App;
