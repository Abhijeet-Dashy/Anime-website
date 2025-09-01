import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import BottomNav from '../components/BottomNav';
import {
  fetchTopAnime,
  fetchPopularCategories,
  fetchRecommendations
} from '../auth/jikan';

const Home = () => {
  const [topRated, setTopRated] = useState([]);
  const [popularCategories, setPopularCategories] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const timers = [
      setTimeout(() => {
        fetchTopAnime().then(setTopRated);
      }, 200),

      setTimeout(() => {
        fetchPopularCategories().then(setPopularCategories);
      }, 600),

      setTimeout(() => {
        fetchRecommendations().then(setRecommendations);
      }, 1000)
    ];

    // Clean up timers on unmount
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="pb-24 px-4 bg-gray-100 min-h-screen">
      <Navbar />
      <Section title="Top Rated Anime" animeList={topRated} />
      <Section title="Recommendations for You" animeList={recommendations} />
      <BottomNav />
    </div>
  );
};

export default Home;
