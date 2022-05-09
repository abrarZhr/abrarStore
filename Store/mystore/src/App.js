import Home from "./Store/Home"
import Lipstick from "./Lipstick/Lipstick"
import ProdectList from "./ProdectList/ProdectList"
import Eyebrow from "./Eyebrow/Eyebrow"
import { BrowserRouter , Routes, Route} from "react-router-dom";


function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/Lipstick" element={<Lipstick/>}/>
    <Route path="/Lipstick/:id" element={<ProdectList/>}/>
    <Route path="/Eyebrow" element={<Eyebrow/>}/>
  
  </Routes>
  </BrowserRouter>
  
   
  
  )
}

export default App;
