import {Routes, Route} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Science from "./pages/Science";
import Economy from "./pages/Economy";
import Social from "./pages/Social";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/science' element={<Science />}/>
        <Route path='/economy' element={<Economy />}/>
        <Route path='/social' element={<Social />}/>
        <Route path='/feedback' element={<Feedback />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;