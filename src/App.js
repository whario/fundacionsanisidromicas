import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import Home from "./views/home.jsx";
import Nosotros from "./components/nosotros.jsx";
import Programas from './components/programas';
import Contacto from './components/contacto';
import Footer from "./components/footer.jsx";
import Audio from "./components/audio.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/programas' element={<Programas/>} />
          <Route path='/contacto' element={<Contacto/>} />
        </Routes>
        <Audio/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
