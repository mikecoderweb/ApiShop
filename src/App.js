import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeCom } from './components/home';


import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import ShopTabs from './components/shop/tabs';



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomeCom />} />
          <Route path='shop' element={<ShopTabs />} />
          {/* <Route path='shopcart' element={<ShopCart />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
