const BASE_URL = 'https://api.jikan.moe/v4';

// Fetch the top anime data once and store it.
let topAnimeData = null;

export async function fetchTopAnime() {
  if (topAnimeData) {
    // If data is already fetched, return it immediately
    return topAnimeData;
  }
  const res = await fetch(`${BASE_URL}/top/anime?limit=10`);
  const json = await res.json();
  topAnimeData = json.data; // Store the fetched data
  return topAnimeData;
}

export async function fetchPopularCategories() {
  // Now fetchPopularCategories can reuse the data from fetchTopAnime
  // Simulating categories by fetching top anime—MyAnimeList does not provide category items.
  return fetchTopAnime();
}

export async function fetchRecommendations() {
  const res = await fetch(`${BASE_URL}/top/anime?limit=10&page=2`);
  const json = await res.json();
  return json.data;
}