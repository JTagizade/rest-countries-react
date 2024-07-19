// Icons
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import RegionButton from "./RegionButton";


// Regions
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Dropdown = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleRegions = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative w-[250px]">
      <button onClick={() => toggleRegions()} className="flex items-center justify-between w-full bg-white p-4 drop-shadow rounded cursor-pointer">
        <span>Filter by Region</span>
        <span>
          {isOpen ? <GoChevronUp /> : <GoChevronDown />} {" "}
        </span>
      </button>
      {isOpen && <div className="absolute top-[calc(100%_+_5px)] z-20 drop-shadow rounded overflow-hidden">
        {regions.map( region => <RegionButton region={region}/>)}
      </div>}
    </div>
  );
};

export default Dropdown;
