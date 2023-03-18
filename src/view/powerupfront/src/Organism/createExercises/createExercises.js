import { Link } from "react-router-dom";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { TreinoForm } from "../TreinoForms/treinoForms";
import { useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import response from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const{userId} = require('../../getUser/getId')

export function CreateExercise(){

    const [nomeS, setNomeS] = useState("");
    const [repeticaoS, setrepeticaoS] = useState("");
    const [serieS, setSerieS] = useState("");

    const [nomeT, setNomeT] = useState("");
    const [repeticaoT, setrepeticaoT] = useState("");
    const [serieT, setSerieT] = useState("");

    const [nomeQ, setNomeQ] = useState("");
    const [repeticaoQ, setrepeticaoQ] = useState("");
    const [serieQ, setSerieQ] = useState("");

    const [nomeQu, setNomeQu] = useState("");
    const [repeticaoQu, setrepeticaoQu] = useState("");
    const [serieQu, setSerieQu] = useState("");

    const [nomeSx, setNomeSx] = useState("");
    const [repeticaoSx, setrepeticaoSx] = useState("");
    const [serieSx, setSerieSx] = useState("");

    const [nomeSb, setNomeSb] = useState("");
    const [repeticaoSb, setrepeticaoSb] = useState("");
    const [serieSb, setSerieSb] = useState("");

    const [nomeD, setNomeD] = useState("");
    const [repeticaoD, setrepeticaoD] = useState("");
    const [serieD, setSerieD] = useState("");

    const handleNomeS = (event) => setNomeS(event.target.value);
    const handlerepeticaoS = (event) => setrepeticaoS(event.target.value);
    const handleserieS = (event) => setSerieS(event.target.value);

    const handleNomeT = (event) => setNomeT(event.target.value);
    const handlerepeticaoT = (event) => setrepeticaoT(event.target.value);
    const handleserieT = (event) => setSerieT(event.target.value);

    const handleNomeQ = (event) => setNomeQ(event.target.value);
    const handlerepeticaoQ = (event) => setrepeticaoQ(event.target.value);
    const handleserieQ = (event) => setSerieQ(event.target.value);

    const handleNomeQu = (event) => setNomeQu(event.target.value);
    const handlerepeticaoQu = (event) => setrepeticaoQu(event.target.value);
    const handleserieQu = (event) => setSerieQu(event.target.value);

    const handleNomeSx = (event) => setNomeSx(event.target.value);
    const handlerepeticaoSx = (event) => setrepeticaoSx(event.target.value);
    const handleserieSx = (event) => setSerieSx(event.target.value);

    const handleNomeSb = (event) => setNomeSb(event.target.value);
    const handlerepeticaoSb = (event) => setrepeticaoSb(event.target.value);
    const handleserieSb = (event) => setSerieSb(event.target.value);

    const handleNomeD = (event) => setNomeD(event.target.value);
    const handlerepeticaoD = (event) => setrepeticaoD(event.target.value);
    const handleserieD = (event) => setSerieD(event.target.value);

    let ExerSg = {
        nome: nomeS,
        serie: serieS,
        repeticao: repeticaoS,
        id_conta: userId,
    }

    let ExerT = {
        nome: nomeT,
        serie: serieT,
        repeticao: repeticaoT,
        id_conta: userId,
    }

    let ExerQ = {
        nome: nomeQ,
        serie: serieQ,
        repeticao: repeticaoQ,
        id_conta: userId,
    }

    let ExerQu = {
        nome: nomeQu,
        serie: serieQu,
        repeticao: repeticaoQu,
        id_conta: userId,
    }

    let ExerSx = {
        nome: nomeSx,
        serie: serieSx,
        repeticao: repeticaoSx,
        id_conta: userId,
    }

    let ExerSb = {
        nome: nomeSb,
        serie: serieSb,
        repeticao: repeticaoSb,
        id_conta: userId,
    }

    let ExerD = {
        nome: nomeD,
        serie: serieD,
        repeticao: repeticaoD,
        id_conta: userId,
    }
    return(
        <div className="flex flex-col items-center justify-center">
            <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                <p>Treino</p>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3">
                        <TreinoForm name="Segunda" nome={handleNomeS} serie={handleserieS} repeticao= {handlerepeticaoS} butFunc = {addSegunda} />
                        <ToastContainer/>
                    </div>
                    <div className="col-span-3">
                        <TreinoForm name="Terça"  nome={handleNomeT} serie={handleserieT} repeticao= {handlerepeticaoT} butFunc = {addTerca} />
                        <ToastContainer/>
                    </div>
                    <div className="col-span-3">
                        <TreinoForm name="Quarta"  nome={handleNomeQ} serie={handleserieQ} repeticao= {handlerepeticaoQ} butFunc = {addQuarta} />
                        <ToastContainer/>
                    </div>
                    <div className="col-span-3">
                        <TreinoForm name="Quinta" nome={handleNomeQu} serie={handleserieQu} repeticao= {handlerepeticaoQu} butFunc = {addQuinta} />
                        <ToastContainer/>
                    </div>
                    <div className="col-span-3">
                        <TreinoForm name="Sexta"  nome={handleNomeSx} serie={handleserieSx} repeticao= {handlerepeticaoSx} butFunc = {addSexta} />
                        <ToastContainer/>
                    </div>
                    <div className="col-span-3">
                        <TreinoForm name="Sábado"  nome={handleNomeSb} serie={handleserieSb} repeticao= {handlerepeticaoSb} butFunc = {addSabado} />
                        <ToastContainer/>
                    </div>
                    <div className="col-span-3">
                        <TreinoForm name="Domingo" nome={handleNomeD} serie={handleserieD} repeticao= {handlerepeticaoD} butFunc = {addDomingo} />
                        <ToastContainer/>
                    </div>
                </div>
                
            </div>
            <div>
                <Link to="/verTreino">
                    <Buttons name="Ver Treino"/>
                </Link>
                
            </div>
            
        </div>
    )
}