import { useState } from "react";
import PropTypes from "prop-types";
import "../../index.css";

const Search = ({ setSearchMovie }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      setSearchMovie(query);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
      <input
        type="text"
        className="border text-black rounded-l-lg w-40 sm:w-60 mb-2 sm:mb-0"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movie..."
      />
      <button
        className="bg-blue-500 text-white h-7 w-20 rounded-r-lg hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

Search.propTypes = {
  setSearchMovie: PropTypes.func.isRequired,
};

export default Search;
