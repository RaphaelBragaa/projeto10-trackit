import Header from "../shared/Header"
import Menu from '../shared/Menu';
import styled from 'styled-components';
import GlobalStyle from "../../assets/css/globalStyles";
import { useState} from 'react';
import axios from 'axios';

export default function Habitos({token}){
    const[selecionado,setSelecionado]=useState(1)
    const [nomeHabito, setnomeHabito] = useState("");
    const [dias,setDias]=useState([])

    console.log(selecionado)
    function Chama(){
        setSelecionado(0)
        alert('CHAMA')
    }

    function Salvar(event){
        event.preventDefault()
        console.log(dias)
    }

    
    console.log(token)
    return(
        <>
        <GlobalStyle/>
        <Header/>
        <MeusHabitos>
            <h1>Meus hábitos</h1>
            <Add >
                <h2 onClick={Chama} selecionado={selecionado}>+</h2>
            </Add>
        </MeusHabitos>
        <form onSubmit={Salvar}>
        <CriarHabito>
        <input type='text' placeholder='nome do hábito' onChange={(e) => setnomeHabito(e.target.value)}/>
        <Days>
        <button onClick={()=>setDias(setDias.push("Domingo"))}>D</button>
        <button onClick={()=>setDias(setDias.push("Segunda"))}>S</button>
        <button onClick={()=>setDias(setDias.push("Terça"))}>T</button>
        <button onClick={()=>setDias(setDias.push("Qurta"))}>Q</button>
        <button onClick={()=>setDias(setDias.push("Quinta"))}>Q</button>
        <button onClick={()=>setDias(setDias.push("Sexta"))}>S</button>
        <button onClick={()=>setDias(setDias.push("Sábado"))}>S</button>
        </Days>
        <Save>
        <h1>Cancelar</h1>
        <button type="submit">Salvar</button>
        </Save>
        </CriarHabito>
        </form>
        <Dia> 
         <h2>Você não tem nenhum hábito cadastrado ainda. 
             Adicione um hábito para começar a trackear!</h2> 
        </Dia> 
        
        <Menu/>
        </>
    )
}

const MeusHabitos = styled.div`
@media (max-width: 767px){
    display:flex;
    width:100%;
    font-family:'Lexend Deca', sans-serif;
    font-size:22.98px;
    color:#126BA5;
    margin-bottom:25px;
   

    h1{
        margin-left:20px;
         font-weight:500;
    }

}
`
const Dia = styled.div`
@media (max-width: 767px){
    width:100%;
    height:100%;
    padding-left:17px;
    padding-right:17px;
    font-weight:400;
    font-family:'Lexend Deca', sans-serif;

    margin-top:20px;
    

    h2{
        color: #CFCFCF;
        font-size:20px;
;
    }
}
`
const Add = styled.div`
    position: absolute;
    width: 40px;
    height: 35px;
    left: 317px;
    top: 92px;
    padding-left:12px;
    padding-bottom:18px;

    background: #52B6FF;
    border-radius: 4.63636px;
    h2{
        width: 16px;
        height: 34px;
        left: 329px;
        top: 91px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;


        text-align: center;

        color: #FFFFFF;  
    }
`
const CriarHabito = styled.div`
@media (max-width: 767px){
    display:${props=>(props.selecionado === 0) ? 'flex' : 'flex'};
    flex-direction:column;
    justify-content:center;
    margin:auto;
    width:90%;
    height:180px;
    background-color:#FFFFFF;
    border-radius:5px;
    input{
        margin:auto;
        margin-top:0px;
        margin-bottom:0px;
        width:80%;
        height:45px;
        border-radius:5px;
        border:1px solid #D4D4D4;
        font-family: 'Lexend Deca';
        padding-left:15px;
       
    }
    input::placeholder{
        color:#DBDBDB;
        font-size:19.98px;
    }

}
`
const Days=styled.div`
@media (max-width: 767px){ 
    display:flex;
    justify-content:space-between;
    margin-left:35.8px;
    margin-top:5px;
    width:70%;
    height:50px;
    font-family: 'Lexend Deca';

    button{
        display:flex;
        justify-content:center;
        align-items:center;
        width:30px;
        height:30px;
        border-radius:5px;
        border:1px solid #D4D4D4;
        color:#D4D4D4;

        :active{
            background-color:#D4D4D4;
            color:#FFFFFF;
            font-weight:500;
        }
    }
}
`
const Save=styled.div`
@media (max-width: 767px){
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-left:170px;
    text-align:center;
    width:48%;
    height:35px;
    font-family: 'Lexend Deca';

    h1{
        text-align:center;
        color:#52B6FF;
        font-size:16px;
    }

    button{
        height:37px;
        width:80px;
        background-color:#52B6FF;
        border:none;
        color: #FFFFFF;
        border-radius:4px;
        font-size:16px;

    }
}
`

