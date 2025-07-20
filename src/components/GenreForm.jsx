import { useState } from "react";

const genres = ["Action", "Drama", "Comedy", "Fantasy", "Horror", "Romance", "Sci-Fi"];

const GenreForm = ({ onSubmit }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleSubmit = () => {
    onSubmit(selectedGenres);
  };

  return (
    <div className="bg-black/45 backdrop-blur-sm rounded-2xl p-4 text-white border border-white/20 shadow-lg">
      <h2 className="text-lg font-bold mb-2 text-white]">Select Genres</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => toggleGenre(genre)}
            className={`px-3 py-1 rounded-full border border-white/30 hover:scale-105 duration-250 hover:bg-[#1c1c1c]/70 ${
              selectedGenres.includes(genre)
                ? "bg-white text-black font-semibold"
                : "bg-black/30"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-[#1c1c1c]/90 hover:bg-black px-4 py-2 rounded-2xl text-white font-bold transform hover:scale-105 duration-250 transition-timing-function: ease;"
      >
        Generate Options
      </button>
    </div>
  );
};

export default GenreForm;
