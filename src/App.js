import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { CartProvider } from "./context/CartContext";
import RequiredAuth from "./hoc/RequiredAuth";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
          <Navbar/> 
         <Routes>      
            <Route path="/" element={<RequiredAuth><Home/></RequiredAuth>}/> 
            <Route path='/products' element={<RequiredAuth><Products/></RequiredAuth>}/>
            <Route path="/login" element={<Login/>}/>
         </Routes> 
    </div>
  );
}

export default App;
