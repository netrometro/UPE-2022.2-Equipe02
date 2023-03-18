import { Link } from "react-router-dom";
import { BackButtons } from "../../Atomic/Buttons/BackButtons";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { Footers } from "../Footer/Footer";
import { Headers } from "../Headers/Headers";
import axios, { isCancel, AxiosError } from "axios";
import response from "react";
import { useEffect, useState } from "react";
import jsPDF from 'jspdf';
const{userId} = require('../../getUser/getId')

export function GetExercises(){

    axios.defaults.headers.common['Authorization'] = `Bearer `

    const [segunda, getSegunda] = useState([])
    const[terca, getTerca] = useState([])
    const[quarta, getQuarta] = useState([])
    const[quinta, getQuinta] = useState([])
    const [ sexta, getSexta] = useState([])
    const [ sabado, getSabado] = useState([])
    const [ domingo, getDomingo] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/segunda/${userId}`)
        .then((response) => {
            getSegunda(response.data)
        })
        .catch(() =>{
            console.log("deu tudo errado")
        })


        axios.get(`http://localhost:3001/terca/${userId}`)
        .then((response)=>{
            getTerca(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

        axios.get(`http://localhost:3001/quarta/${userId}`)
        .then((response)=>{
            getQuarta(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

        axios.get(`http://localhost:3001/quinta/${userId}`)
        .then((response)=>{
            getQuinta(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

        axios.get(`http://localhost:3001/sexta/${userId}`)
        .then((response)=>{
            getSexta(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

        axios.get(`http://localhost:3001/sabado/${userId}`)
        .then((response)=>{
            getSabado(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

        axios.get(`http://localhost:3001/domingo/${userId}`)
        .then((response)=>{
            getDomingo(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

    },[])

    function gerarPdf() {

        const doc = new jsPDF("portrait","mm",[597,410]);
    

        doc.setFont('bolditalic')
        doc.setFontSize(15)
        doc.setTextColor(136,84,207)
        doc.setFont(undefined, 'bold')
    
        doc.text('Segunda', 20, 20);
        var incrementador = 1;
        segunda.forEach((item, index) => {
            doc.text(`Exercício: ${item.nome}, Séries: ${item.serie}, Repetições: ${item.repeticao}`,20, 40 + index * 10)
            incrementador++
        });

        doc.text('Terça', 20, 100);
        incrementador = 1
        terca.forEach((item, index) => {
            doc.text(`Exercício: ${item.nome}, Séries: ${item.serie}, Repetições: ${item.repeticao}`, 20, 120 + index * 10)
            incrementador++
        });

        doc.text('Quarta', 20, 180);
        incrementador = 1
        quarta.forEach((item, index) => {
            doc.text(`Exercício: ${item.nome}, Séries: ${item.serie}, Repetições: ${item.repeticao}`, 20, 200 + index * 10)
            incrementador++
        });

        doc.text('Quinta', 20, 260);
        incrementador = 1
        quinta.forEach((item, index) => {
            doc.text(`Exercício: ${item.nome}, Séries: ${item.serie}, Repetições: ${item.repeticao}`, 20, 280 + index * 10)
            incrementador++
        });

        doc.text('Sexta', 20, 340);
        incrementador = 1
        sexta.forEach((item, index) => {
            doc.text(`Exercício: ${item.nome}, Séries: ${item.serie}, Repetições: ${item.repeticao}`, 20, 360 + index * 10)
            incrementador++
        });
        doc.text('Sabado', 20, 420);
        incrementador = 1
        sabado.forEach((item, index) => {
            doc.text(`Exercício: ${item.nome}, Séries: ${item.serie}, Repetições: ${item.repeticao}`, 20, 440 + index * 10)
            incrementador++
        });
        doc.text('Domingo', 20, 500);
        incrementador = 1
        domingo.forEach((item, index) => {
            doc.text(`Exercício: ${item.nome}, Séries: ${item.serie}, Repetições: ${item.repeticao}`, 20, 520+ index * 10)
            incrementador++
        });



        doc.output("dataurlnewwindow")
        }




    return(
        <div>
           
            <Headers/>
            <div className="m-[20px]">
                <Link to="/treino"><BackButtons name="<-"/></Link>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">Segunda:</p>
                    {segunda.map((segunda,key) =>{
                    return(
                        <p>{
                            "Nome: " +segunda.nome +", " 
                            +"Séries:" + segunda.serie
                            +", Repetições: "+ segunda.repeticao+"."
                            }</p>
                        )
                    })}
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">Terça:</p>
                        {terca.map((terca,key) =>{
                        return(
                            <p>{
                                "Nome: " +terca.nome +", " 
                                +"Séries:" + terca.serie
                                +", Repetições: "+ terca.repeticao+"."
                                }</p>
                            )
                        })}
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">Quarta:</p>
                        {quarta.map((quarta,key) =>{
                        return(
                            <p>{
                                "Nome: " +quarta.nome +", " 
                                +"Séries:" + quarta.serie
                                +", Repetições: "+ quarta.repeticao+"."
                                }</p>
                            )
                        })}
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">Quinta:</p>
                        {quinta.map((quinta,key) =>{
                            return(
                                <p>{
                                    "Nome: " +quinta.nome +", " 
                                    +"Séries:" + quinta.serie
                                    +", Repetições: "+ quinta.repeticao+"."
                                    }</p>
                                )
                            })}
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">Sexta:</p>
                        {sexta.map((sexta,key) =>{
                                return(
                                    <p>{
                                        "Nome: " +sexta.nome +", " 
                                        +"Séries:" + sexta.serie
                                        +", Repetições: "+ sexta.repeticao+"."
                                        }</p>
                                    )
                                })}
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">Sábado:</p>
                        {sabado.map((sabado,key) =>{
                                return(
                                    <p>{
                                        "Nome: " +sabado.nome +", " 
                                        +"Séries:" + sabado.serie
                                        +", Repetições: "+ sabado.repeticao+"."
                                        }</p>
                                    )
                                })}
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">Domingo:</p>
                        {domingo.map((domingo,key) =>{
                                return(
                                    <p>{
                                        "Nome: " +domingo.nome +", " 
                                        +"Séries:" + domingo.serie
                                        +", Repetições: "+ domingo.repeticao+"."
                                        }</p>
                                    )
                                })}
                                 <div className="flex flex-col content-center items-center">
                    <div className="my-[20px]">
                        <Buttons name="Deletar" func={()=>{
                            
                            axios.delete(`http://localhost:3001/segunda-delete/${userId}`)
                            axios.delete(`http://localhost:3001/terca-delete/${userId}`)
                            axios.delete(`http://localhost:3001/quarta-delete/${userId}`)
                            axios.delete(`http://localhost:3001/quinta-delete/${userId}`)
                            axios.delete(`http://localhost:3001/sexta-delete/${userId}`)
                            axios.delete(`http://localhost:3001/sabado-delete/${userId}`)
                            axios.delete(`http://localhost:3001/domingo-delete/${userId}`)
                            // eslint-disable-next-line no-restricted-globals
                            location.reload()
                    
                        }} /> 
                    </div>
                    

                    <Buttons name="Gerar PDF" func={gerarPdf}></Buttons>
                </div> <div className="flex flex-col content-center items-center">
        
                </div>
                </div>
            </div>
            <Footers/>
        </div>
    )
}