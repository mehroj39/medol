import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import Product from './components/Product';
import About from './components/About';
import 'boxicons/css/boxicons.min.css';
import Discount from './components/Discount';
import Feedback from './components/Feedback';
import Service from './components/Service';
import Shopping from './components/Shopping';

function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <Product/>
    <Service/>
    <About/>
    <Discount/>
    <Feedback/>
    <Shopping/> 
    </BrowserRouter>
  )
}

export default App;