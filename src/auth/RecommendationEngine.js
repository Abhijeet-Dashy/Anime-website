const BASE_URL = "https://api.jikan.moe/v4";

// 1. Fetch 10 anime from multiple genres
export async function fetchAnimeByGenres(genres) {
  const genreMap = {
    Action: 1,
    Adventure: 2,
    Comedy: 4,
    Drama: 8,
    Fantasy: 10,
    Horror: 14,
    Romance: 22,
    'Sci-Fi': 24,
  };

  const ids = genres.map((g) => genreMap[g]).filter(Boolean);
  const query = ids.map((id) => `genres=${id}`).join("&");

  const res = await fetch(`${BASE_URL}/anime?${query}&limit=10`);
  const json = await res.json();
  return json.data || [];
}

// 2. Dummy logic — later you can use collaborative filters
export async function generateRecommendations(likedAnime) {
  const tags = likedAnime
    .flatMap((anime) => anime.genres.map((g) => g.name))
    .filter((v, i, arr) => arr.indexOf(v) === i); // unique genres

  return await fetchAnimeByGenres(tags.slice(0, 2)); // fetch from 2 most common liked genres
}
