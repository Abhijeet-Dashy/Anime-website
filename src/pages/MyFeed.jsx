import { useState } from "react";
import GenreForm from "../components/GenreForm";
import AnimeCard from "../components/AnimeCard";
import { fetchAnimeByGenres, generateRecommendations } from "../auth/RecommendationEngine";
import BottomNav from "../components/BottomNav";

const MyFeed = () => {
  const [initialAnime, setInitialAnime] = useState([]);
  const [likedAnime, setLikedAnime] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const handleGenresSubmit = async (genres) => {
    const data = await fetchAnimeByGenres(genres);
    setInitialAnime(data);
    setLikedAnime([]);
    setRecommendations([]);
  };

  const handleLike = (anime) => {
    setLikedAnime((prev) => [...prev, anime]);
    setInitialAnime((prev) => prev.filter((a) => a.mal_id !== anime.mal_id));
  };

  const handleSkip = (anime) => {
    setInitialAnime((prev) => prev.filter((a) => a.mal_id !== anime.mal_id));
  };

  const handleGenerate = async () => {
    const recs = await generateRecommendations(likedAnime);
    setRecommendations(recs);
  };

  return (
    <div className="p-6 text-[#1c1c1c] min-h-screen">
      <h1 className="p-2 text-3xl font-bold mb-4">My Feed</h1>
      <GenreForm onSubmit={handleGenresSubmit} />

      {initialAnime.length > 0 && (
        <>
          <h2 className="text-xl font-bold mt-6 mb-2">Anime to Pick From</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {initialAnime.map((anime) => (
              <div key={anime.mal_id} className="relative">
                <AnimeCard anime={anime} />
                <div className="bottom-2 left-2 flex gap-2 ml-3">
                  <button
                    onClick={() => handleLike(anime)}
                    className="bg-[#1c1c1c] px-3 py-1 text-sm font-semibold rounded-2xl text-white transform hover:scale-105 duration-250"
                  >
                    Like
                  </button>
                  <button
                    onClick={() => handleSkip(anime)}
                    className="bg-red-700 px-3 py-1 text-sm font-semibold rounded-2xl text-white transform hover:scale-105 duration-250"
                  >
                    Skip
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleGenerate}
            className="mt-6 bg-[#1c1c1c]/95 px-4 py-2 rounded-2xl font-bold text-white hover:bg-black hover:scale-105 duration-250 mb-30"
          >
            Get Recommendations
          </button>
        </>
      )}

      {recommendations.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-8 mb-2">Recommended For You</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendations.map((anime) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </div>
        </>
      )}
      <BottomNav/>
    </div>
  );
};

export default MyFeed;
