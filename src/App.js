import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Footer from './components/Footer';
import FetchData from './components/FetchData';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route exact path = "/" element={<Home/>} />
        <Route  path = "/general" element={<FetchData cat ="general"/>} />
        <Route  path = "/business" element={<FetchData cat ="business"/>} />
        <Route  path = "/entertainment" element={<FetchData cat ="entertainment"/>} />
        <Route  path = "/health" element={<FetchData cat ="health"/>} />
        <Route  path = "/science" element={<FetchData cat ="science"/>} />
        <Route  path = "/technology" element={<FetchData cat ="technology"/>} />
        <Route  path = "/sports" element={<FetchData cat ="sports"/>} />


      </Routes>
      <Footer/>
    </Router>
    
    
      
    </>
  );
}

export default App;
