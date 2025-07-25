import { FaHome, FaHeart, FaRss } from 'react-icons/fa';

const BottomNav = ({ setCurrentPage }) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md bg-[#1c1c1c]/45 backdrop-blur-sm border border-white/20 text-white rounded-2xl shadow-lg px-6 py-3 flex justify-between items-center hover:scale-105 transition-transform duration-300">
      
      <button
        onClick={() => setCurrentPage("home")}
        className="flex flex-col font-semibold items-center text-sm hover:text-[#1c1c1c] transition"
      >
        <FaHome size={20} />
        Home
      </button>

      <button
        className="flex flex-col font-semibold items-center text-sm hover:text-[#1c1c1c] transition"
      >
        <FaHeart size={20} />
        Wishlist
      </button>

      <button
        onClick={() => setCurrentPage("myfeed")}
        className="flex flex-col font-semibold items-center text-sm hover:text-[#1c1c1c] transition"
      >
        <FaRss size={20} />
        My Feed
      </button>
    </div>
  );
};

export default BottomNav;
