import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Register, Home, Kitchen, Login, Order, Withdraw} from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-main-banner bg-center bg-cover bg-no-repeat h-[1200px]">
        <Routes>
          <Route path="/register" element={<Register />}></Route>
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


export default App;
