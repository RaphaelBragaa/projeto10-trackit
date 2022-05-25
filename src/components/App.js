import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Habitos from "./Habitos/Habitos";
import Hoje from "./Hoje/Hoje";
import Cadastro from "./Cadastro/Cadastro";

export default function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/habitos" element={<Habitos />}/>
        <Route path="/hoje" element={<Hoje />}/>
        </Routes>
        </BrowserRouter>
    )
}