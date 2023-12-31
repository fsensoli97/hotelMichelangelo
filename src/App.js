import { HashRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./components/Home/Home";
import Prices from "./components/Prices/Prices";
import Location from "./components/Location/Location";
import Contacts from "./components/Contacts/Contacts";
import Gallery from "./components/Gallery/Gallery";
import './App.css';

function App() {
  const [language, setLanguage] = useState(localStorage.getItem("language") || 'EN');

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/prices" element={<Prices></Prices>}></Route>
          <Route path="/location" element={<Location></Location>}></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        </Routes>
      </HashRouter>
    </LanguageContext.Provider>
  );
}

export default App;

export const LanguageContext = createContext();
