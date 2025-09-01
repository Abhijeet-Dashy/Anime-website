
const AnimeCard = ({ anime }) => {
    return (
    <div
      className="lg:w-64 lg:min-w-[15rem] min-w-[10rem] bg-white/10 backdrop-blur-lg rounded-2xl border border-black/20 shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out cursor-pointer m-2 "
    >
      <img
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
        className="rounded-t-2xl lg:h-75 h-45 lg:w-full w-50 object-cover"
      />
      <div className="p-4 text-black">
        <h3 className="text-sm font-semibold mb-1 line-clamp-2">{anime.title}</h3>
        <p className="text-xs text-gray-800 line-clamp-2">{anime.synopsis || 'No synopsis available.'}</p>
        <div className="mt-2 text-[#1c1c1c] font-bold text-sm">⭐ {anime.score || 'N/A'}</div>
      </div>
    </div>
  );
};

export default AnimeCard;
