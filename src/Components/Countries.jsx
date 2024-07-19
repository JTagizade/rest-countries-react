import { useContext } from "react";
import Country from "./Country";

import Context from "../Context" 

const Countries = () => {

  const { countries } = useContext(Context);

  return <div className="mt-10 grid grid-cols-4 gap-5">
    {countries.map( countries => <Country name={countries.name.common} capital={countries.capital} flag={countries.flags.svg} population={countries.population} region={countries.region} />)}
  </div>;
};

export default Countries;
