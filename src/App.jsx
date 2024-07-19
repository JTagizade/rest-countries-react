// Components
import Header from "./Components/Header";
import Dropdown from "./Components/Dropdown";
import Search from "./Components/Search";
import Countries from "./Components/Countries";
import { useEffect, useState } from "react";

import Context from "./Context"

const App = () => {

  const [ countries, setCountries] = useState([]);

  const getData = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();

    setCountries(data);
  }

  useEffect(() => {
    getData();      

  }, [])
  

  return (
    <Context.Provider value={{ countries }}>
      <Header />
      <main className="container mx-auto pt-10 h-screen">
        <div className="flex items-center justify-between">
          <Search />
          <Dropdown />
        </div>
        <Countries />
      </main>
    </Context.Provider>
  );
};

export default App;
