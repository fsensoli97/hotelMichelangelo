import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Prices from "./components/Prices/Prices";
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/prices" element={<Prices></Prices>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
