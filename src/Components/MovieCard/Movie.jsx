import PropTypes from "prop-types";
import "../../index.css";
import defaultMoviePoster from "../../assets/404.jpg";

const Movie = ({ movies }) => {
  const handleImageError = (e) => {
    e.target.src = defaultMoviePoster;
  };

  return (
    <div>
      <div className="w-full h-20 flex items-center">
        <h2 className="text-xl ml-4 sm:ml-12 lg:ml-36">
          Show your favorite movies
        </h2>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-3">
            {movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="w-full sm:w-48 md:w-52 border rounded-lg shadow"
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-40 md:h-36 object-cover"
                  onError={handleImageError}
                />
                <div className="h-14 mt-1">
                  <h3 className="text-sm text-center px-2 truncate">
                    {movie.Title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg">
            Tidak ada data film yang ditemukan
          </p>
        )}
      </div>
    </div>
  );
};

Movie.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movie;
