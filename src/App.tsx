import { useEffect, } from 'react'
import Login from "./pages/Login";
import "./i18n.ts"; 
import { useNavigate, BrowserRouter } from "react-router-dom";
import Router from './routers/Router';

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App
