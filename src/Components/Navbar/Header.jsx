import PropTypes from "prop-types";
import "../../index.css";
import Search from "./Search";

const Header = ({ setSearchMovie }) => {
  return (
    <header className="bg-orange-500 h-16 shadow-md text-white flex flex-wrap">
      <div className="w-full sm:w-3/5 flex justify-start items-center">
        <h1 className="text-xl sm:text-3xl font-bold ml-4 sm:ml-8">GerProH8</h1>
      </div>
      <div className="w-full sm:w-2/5 flex justify-center items-center mt-2 sm:mt-0">
        <Search setSearchMovie={setSearchMovie} />
      </div>
    </header>
  );
};

Header.propTypes = {
  setSearchMovie: PropTypes.func.isRequired,
};

export default Header;
