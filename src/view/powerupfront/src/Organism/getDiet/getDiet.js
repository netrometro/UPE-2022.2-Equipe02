import { Footers } from "../Footer/Footer";
import { Headers } from "../Headers/Headers";
import { Link } from "react-router-dom";
import { BackButtons } from "../../Atomic/Buttons/BackButtons";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import axios, { isCancel, AxiosError } from "axios";
import response from "react";
import { useEffect, useState } from "react";
import jsPDF from 'jspdf';
const{userId} = require("../../getUser/getId")


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

    function gerarPdf() {

        const doc = new jsPDF("portrait","mm",[597,410]);
    

        doc.setFont('bolditalic')
        doc.setFontSize(15)
        doc.setTextColor(136,84,207)
        doc.setFont(undefined, 'bold')
    
        doc.text('Café', 20, 20);
        var incrementador = 1;
        cafe.forEach((item, index) => {
            doc.text(`Aliemento ${incrementador}: ${item.nome_alimento}, Quantidade: ${item.quantidade} unidade(s), Proteínas: ${item.proteina}gm, Carboidratos: ${item.carboidrato}gm, Gorduras: ${item.gordura}gm.`,20, 40 + index * 10)
            incrementador++
        });

        doc.text('Lanche da Manhã', 20, 100);
        incrementador = 1
        lanchesManha.forEach((item, index) => {
            doc.text(`Aliemento ${incrementador}: ${item.nome_alimento}, Quantidade: ${item.quantidade} unidade(s), Proteínas: ${item.proteina}gm, Carboidratos: ${item.carboidrato}gm, Gorduras: ${item.gordura}gm.`, 20, 120 + index * 10)
            incrementador++
        });

        doc.text('Almoço', 20, 180);
        incrementador = 1
        almoco.forEach((item, index) => {
            doc.text(`Aliemento ${incrementador}: ${item.nome_alimento}, Quantidade: ${item.quantidade} unidade(s), Proteínas: ${item.proteina}gm, Carboidratos: ${item.carboidrato}gm, Gorduras: ${item.gordura}gm.`, 20, 200 + index * 10)
            incrementador++
        });

        doc.text('Lanche da tarde', 20, 260);
        incrementador = 1
        lanchesTarde.forEach((item, index) => {
            doc.text(`Aliemento ${incrementador}: ${item.nome_alimento}, Quantidade: ${item.quantidade} unidade(s), Proteínas: ${item.proteina}gm, Carboidratos: ${item.carboidrato}gm, Gorduras: ${item.gordura}gm.`, 20, 280 + index * 10)
            incrementador++
        });

        doc.text('Jantar', 20, 340);
        incrementador = 1
        janta.forEach((item, index) => {
            doc.text(`Aliemento ${incrementador}: ${item.nome_alimento}, Quantidade: ${item.quantidade} unidade(s), Proteínas: ${item.proteina}gm, Carboidratos: ${item.carboidrato}gm, Gorduras: ${item.gordura}gm.`, 20, 360 + index * 10)
            incrementador++
        });

        doc.output("dataurlnewwindow")
        }


    return(
        <div>
             <Headers/>
            <div className="m-[20px]">
                <Link to="/Diet">
                    <BackButtons name="<-"/>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
            <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl" style={{color: '#8854D0', fontWeight: 'bold', fontSize: '18px'}}>Café</p>
        
                    {cafe.map((cafe,key) =>{
                    return(
                        <p>{
                            "Nome: " +cafe.nome_alimento +", " 
                            +"Quantidade:" + cafe.quantidade
                            +", Proteínas: "+ cafe.proteina 
                            +", Carboidratos "+ cafe.carboidrato 
                            +", Gorduras "+ cafe.gordura +"."
                            }</p>
                        )
                    })}

                <br></br>
                <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl" style={{color: '#8854D0', fontWeight: 'bold', fontSize: '18px'}}>Lanche da Manhã</p>
                    {lanchesManha.map((lanchesManha,key) =>{
                    return(
                        <p>{
                            "Nome: "
                            +lanchesManha.nome_alimento +", Quantidade: "
                            + lanchesManha.quantidade+", Proteínas: "
                            + lanchesManha.proteina +", Carboidratos "
                            + lanchesManha.carboidrato +", Gorduras "
                            + lanchesManha.gordura +"."
                            }</p>
                    )
                    })}

                <br></br>
                <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl" style={{color: '#8854D0', fontWeight: 'bold', fontSize: '18px'}}>Almoço</p>
                    {almoco.map((almoco,key) =>{
                    return(
                        <p>{
                            "Nome: "
                            +almoco.nome_alimento +", Quantidade: "
                            + almoco.quantidade+", Proteínas: "
                            + almoco.proteina +", Carboidratos "
                            + almoco.carboidrato +", Gorduras "
                            + almoco.gordura +"."
                            }</p>
                    )
                })}
                <br></br>
                <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl" style={{color: '#8854D0', fontWeight: 'bold', fontSize: '18px'}}>Lanche da Tarde</p>
                {lanchesTarde.map((lanche,key) =>{
                return(
                    <p>{
                        "Nome: "
                        +lanche.nome_alimento +", Quantidade: "
                        + lanche.quantidade+", Proteínas: "
                        + lanche.proteina +", Carboidratos "
                        + lanche.carboidrato +", Gorduras "
                        + lanche.gordura +"."
                        }</p>
                )
            })}
                <br></br>
                <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl" style={{color: '#8854D0', fontWeight: 'bold', fontSize: '18px'}}>Jantar</p>
                    {janta.map((janta,key) =>{
                        return(
                        <p>{
                            "Nome: "
                            +janta.nome_alimento +", Quantidade: "
                            + janta.quantidade+", Proteínas: "
                            + janta.proteina +", Carboidratos "
                            + janta.carboidrato +", Gorduras "
                            + janta.gordura +"."
                        }</p>
                    )
                    })}
                    <br></br>
                <div className="flex flex-col content-center items-center">
                    <div className="my-[20px]">
                        <Buttons name="Deletar" func={()=>{
                            axios.delete(`http://localhost:3001/cafe-delete/${userId}`)
                            axios.delete(`http://localhost:3001/almoco-delete/${userId}`)
                            axios.delete(`http://localhost:3001/jantar-delete/${userId}`)
                            axios.delete(`http://localhost:3001/lanche-da-tarde-delete/${userId}`)
                            axios.delete(`http://localhost:3001/lanche-da-manha-delete/${userId}`)
                            // eslint-disable-next-line no-restricted-globals
                            location.reload()
                        }} /> 
                    </div>
                    <Buttons name="Gerar PDF" func={gerarPdf}></Buttons>
                </div>
            </div>
        </div> 
        
        <Footers/>
        </div>
       
        
    )
}