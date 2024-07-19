// Icons
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <form className="flex w-1/3 items-center pl-4 bg-white drop-shadow rounded">
      <CiSearch className="h-5 w-5" />
      <input
        type="text"
        className="border-none focus:outline-none bg-transparent flex-grow p-3 "
        placeholder="Search users"
        id="search"
      />
    </form>
  );
};

export default Search;
