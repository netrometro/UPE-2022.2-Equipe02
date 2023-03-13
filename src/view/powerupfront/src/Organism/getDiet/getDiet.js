import { Footers } from "../Footers/Footers";
import { Headers } from "../Headers.js/Headers";
import { Link } from "react-router-dom";
import { BackButtons } from "../../Atomic/Buttons/BackButtons";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import axios, { isCancel, AxiosError } from "axios";
import response from "react";
import { useEffect, useState } from "react";
import jsPDF from 'jspdf';
const{userId} = require("../CriarDieta/getId")


export function GetDiet(){

    axios.defaults.headers.common['Authorization'] = `Bearer `

    const [ lanchesTarde, getLanchesTarde] = useState([])
    const[almoco, getAlmoco] = useState([])
    const[cafe, getCafe] = useState([])
    const[janta, getJanta] = useState([])
    const [ lanchesManha, getLanchesManha] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/lanche-da-tarde/${userId}`)
        .then((response) => {
            getLanchesTarde(response.data)
        })
        .catch(() =>{
            console.log("deu tudo errado")
        })


        axios.get(`http://localhost:3001/almoco/${userId}`)
        .then((response)=>{
            getAlmoco(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

        axios.get(`http://localhost:3001/cafe/${userId}`)
        .then((response)=>{
            getCafe(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

        axios.get(`http://localhost:3001/jantar/${userId}`)
        .then((response)=>{
            getJanta(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

        axios.get(`http://localhost:3001/lanche-da-manha/${userId}`)
        .then((response)=>{
            getLanchesManha(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

    },[])

    return(
        <div>
             <Headers/>
            <div className="m-[20px]">
                <Link to="/Diet">
                    <BackButtons name="<-"/>
                </Link>
            </div>
        </div>
       
        
    )
}