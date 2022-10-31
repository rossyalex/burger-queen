import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Navbar} from './components/navigation/Navbar.jsx';
import './App.css'
import {Home, Kitchen, Login, Order, Withdraw} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/kitchen" element={<Kitchen />}></Route>
        <Route path="/withdraw" element={<Withdraw />}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
