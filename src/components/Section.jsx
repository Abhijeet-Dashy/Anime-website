import AnimeCard from './AnimeCard';

const Section = ({ title, animeList = [] }) => (
  <div className="mt-6">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {animeList.length > 0 ? (
      <div className="flex lg:gap-8 gap-4 overflow-x-auto no-scrollbar pb-2">
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
        {console.log(animeList)}
      </div>
    ) : (
      <p className="text-gray-500 text-sm">No anime available at the moment.</p>
    )}
  </div>
);

export default Section;
