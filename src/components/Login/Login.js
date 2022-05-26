import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../../assets/images/logo.png'
import styled from 'styled-components';

export default function Login(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    useEffect(() => {
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'
    const promessa = axios.post(
        'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit',
        {
            email: "...",
            name: "...",
            image: "...",
            password: "..."  
        }
        )
    promessa.then(resposta => {
        const {data} = resposta;
        console.log("Sucesso " + resposta)
    });

    promessa.catch(err => {
        const message = err.response.statusText;
        console.log(message);
      });
    }, []);


    return(
        <>
        <Logo>
        <img src={logo}/>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
        <Entrar>Entrar</Entrar>
        <Cadastrar>Não tem uma conta? Cadastre-se!</Cadastrar>
        </Logo>
     
        </>
    )
}

const Logo = styled.div`
@media (max-width: 767px){
    margin-top:80px;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    font-family: 'Lexend Deca', sans-serif;

img{
    width:55%;
    margin-bottom:40px;
}
input{
    width:75%;
    height:43px;
    border: 1px solid #D4D4D4;
    border-radius:3px;
    padding-left:10px;
    margin-bottom:10px;
}

input::placeholder{
    margin-left:105px;
    font-size:18px;
}
}
`
const Entrar = styled.div`
@media (max-width: 767px){
display: flex;
width:75%;
height:43px;
justify-content: center;
align-items: center;
background-color: #52B6FF;
border-radius:3px;
font-size:18px;
color:#FFFFFF;
margin-bottom:25px;

:active{
    background-color:#126BA5;
}
}
`
const Cadastrar = styled.div`
@media (max-width: 767px){
    text-align: center;
    color:#52B6FF;
    font-size:14.50px;
    text-decoration: underline; 
}
`



