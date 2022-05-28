import styled from 'styled-components';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";


export default function Footer(){
    const{foto}=useContext(UserContext)

    return(
        <>
        <Topo>
            <h1>TrackIt</h1>
        <img src={foto}></img> 
        </Topo>
        </>
    )
}

const Topo = styled.header`
@media (max-width: 767px){
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 100%;
    height: 70px;
    padding-left:20px;
    padding-right:20px;
    top:0;
    left:0;
    margin-bottom:30px;
    background-color: #126BA5;
    font-family:'Playball', cursive;
    font-size:38.98px;
    color:#FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img{
        object-fit:cover;
        height: 51px;
        width:51px;
        border-radius:98.5px;
    }
}
`