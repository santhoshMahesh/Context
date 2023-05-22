import  Header  from './components/Header.js';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import  Cart  from './components/Cart.js';
import  Home  from './components/Home.js';
import './app.css'

function App() {
  return (
    <BrowserRouter>
       <Header/>
        <div className='App'>
       <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/Cart' Component={Cart}/>
       </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
