import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoveSite from "./pages/LoveSite/LoveSite";
import Home from "./pages/Home";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/lovesite" element={ <LoveSite/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;