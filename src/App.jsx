import Home from './pages/Home';
import MyFeed from './pages/MyFeed';
import BottomNav from './components/BottomNav';
import Wishlist from './pages/Wishlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="pb-24">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/feed" element={<MyFeed/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
