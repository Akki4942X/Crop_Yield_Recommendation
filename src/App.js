import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Component/Home';
import Module1 from './Component/Module1';
import Module2 from './Component/Module2';

function App() {
  
  return (
   <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/rec" element={<Module1/>}/>
            <Route path="/Kishor" element={<Module2/>}></Route>
        </Routes>  
    </BrowserRouter>
    </> 
  );
}

export default App;
