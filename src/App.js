import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Termekek from "./components/Termekek";
import Ujtermek from "./components/Ujtermek";
import Navbarcomps from "./components/Navbarcomps";
import Home from "./components/Home";

function App() {
  return(
  <div>
    
     <BrowserRouter>
      <div className="App">
      <Navbarcomps />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termekek" element={<Termekek />} />
          <Route path="/ujtermek" element={<Ujtermek />} />
        
        </Routes>
      </div>

     
    </BrowserRouter>
    
    </div>
  );
}

export default App;
