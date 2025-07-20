import { useState } from 'react';
import Home from './pages/Home';
import MyFeed from './pages/MyFeed';
import BottomNav from './components/BottomNav';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="pb-24">
      {currentPage === "home" && <Home />}
      {currentPage === "myfeed" && <MyFeed />}
      
      <BottomNav setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
