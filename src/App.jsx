import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar} from './components/navigation/Navbar.jsx';
import {Home, Kitchen, Login, Order, Withdraw} from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-main-banner bg-center bg-cover bg-no-repeat h-[1200px]">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/kitchen" element={<Kitchen />}></Route>
          <Route path="/withdraw" element={<Withdraw />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App
