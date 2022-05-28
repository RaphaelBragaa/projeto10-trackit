import { useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Habitos from "./Habitos/Habitos";
import Hoje from "./Hoje/Hoje";
import Cadastro from "./Cadastro/Cadastro";
import UserContext from "../contexts/UserContext";

export default function App(){
    const [token, setToken]= useState('')
    const [foto, setFoto]=useState('')
    return(
        <UserContext.Provider value={{token, setToken,foto,setFoto}}>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/hoje" element={<Hoje token={token}/>}/>
        <Route path="/habitos" element={<Habitos token={token}/>}/>
        </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}