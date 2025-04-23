import './App.css';
import{Routes, Route} from "react-router-dom";
import Home from "./Home";
import ExploreBeaches from "./ExploreBeaches";
import About from "./About";
import Services from "./Services";
import {Layout} from './Layout';



function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Layout/>}>
            <Route index element={<Home />}/>
            <Route path='explorebeaches' element={<ExploreBeaches />}/>
            <Route path='about' element={<About />}/>
            <Route path='services' element={<Services />}/>
         </Route>
      </Routes>
    </div>
  );
}

export default App;
