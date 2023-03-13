import { Link } from "react-router-dom";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { DietForm } from "../DietForm/DietForm";
import { useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import response from "react"
const{userId} = require('./getId')


export function CreateDiet(){

    const [nomeCafe, setNomeCafe] = useState("");
    const [quantidadeCafe, setQuantidadeCafe] = useState("");
    const [quantidadeCafeProteina, setQtCafeProteina] = useState("");
    const [quantidadeCafeCarb, setQtCafeCarb] = useState("");
    const [quantidadeCafeGord, setQtCafeGord] = useState("");

    
    const [nomeLancheM, setNomeLancheM] = useState("");
    const [quantidadeLancheM, setQuantidadeLancheM] = useState("");
    const [quantidadeLancheMProteina, setQtLancheMProteina] = useState("");
    const [quantidadeLancheMCarb, setQtLancheMCarb] = useState("");
    const [quantidadeLancheMGord, setQtLancheMGord] = useState("");
    
    const [nomeAlmoco, setNomeAlmoco] = useState("");
    const [quantidadeAlmoco, setQuantidadeAlmoco] = useState("");
    const [quantidadeAlmocoProteina, setQtAlmocoProteina] = useState("");
    const [quantidadeAlmocoCarb, setQtAlmocoCarb] = useState("");
    const [quantidadeAlmocoGord, setQtAlmocoGord] = useState("");
    
    const [nomeLancheT, setNomeLancheT] = useState("");
    const [quantidadeLancheT, setQuantidadeLancheT] = useState("");
    const [quantidadeLancheTProteina, setQtLancheTProteina] = useState("");
    const [quantidadeLancheTCarb, setQtLancheTCarb] = useState("");
    const [quantidadeLancheTGord, setQtLancheTGord] = useState("");

    const [nomeJanta, setNomeJanta] = useState("");
    const [quantidadeJanta, setQuantidadeJanta] = useState("");
    const [quantidadeJantaProteina, setQtJantaProteina] = useState("");
    const [quantidadeJantaCarb, setQJantaCarb] = useState("");
    const [quantidadeJantaGord, setQJantaGord] = useState("");

    const handleNomeCafe = (event) => setNomeCafe(event.target.value);
    const handleQtCafe = (event) => setQuantidadeCafe(event.target.value);
    const handleQtCafeProt = (event) => setQtCafeProteina(event.target.value);
    const handleQtCafeCarb = (event) => setQtCafeCarb(event.target.value);
    const handleQtCafeGord = (event) => setQtCafeGord(event.target.value);
    
    const handleNomeLancheM = (event) => setNomeLancheM(event.target.value);
    const handleQtLancheM = (event) => setQuantidadeLancheM(event.target.value);
    const handleQtLancheMProt = (event) => setQtLancheMProteina(event.target.value);
    const handleQtLancheMCarb = (event) => setQtLancheMCarb(event.target.value);
    const handleQLancheMGord = (event) => setQtLancheMGord(event.target.value);
    
    const handleNomeAlmoco = (event) => setNomeAlmoco(event.target.value);
    const handleQtAlmoco = (event) => setQuantidadeAlmoco(event.target.value);
    const handleQtAlmocoProt = (event) => setQtAlmocoProteina(event.target.value);
    const handleQtAlmocoCarb = (event) => setQtAlmocoCarb(event.target.value);
    const handleQtAlmocoAGord = (event) => setQtAlmocoGord(event.target.value);

    const handleNomeLancheT = (event) => setNomeLancheT(event.target.value);
    const handleQtLancheT = (event) => setQuantidadeLancheT(event.target.value);
    const handleQtLancheTProt = (event) => setQtLancheTProteina(event.target.value);
    const handleQtLancheTCarb = (event) => setQtLancheTCarb(event.target.value);
    const handleQtLancheTGord = (event) => setQtLancheTGord(event.target.value);

    const handleNomeJanta = (event) => setNomeJanta(event.target.value);
    const handleQtJanta = (event) => setQuantidadeJanta(event.target.value);
    const handleQtJantaProt = (event) => setQtJantaProteina(event.target.value);
    const handleQtJantaCarb = (event) => setQJantaCarb(event.target.value);
    const handleQtJantaAGord = (event) => setQJantaGord(event.target.value);

    return(
        <div className="flex flex-col items-center justify-center">
        <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
            <p>Dieta</p>
            <div className="grid grid-cols-10 gap-4">
                <div className="col-span-2">
                    <DietForm name="Café" nomeFunc={handleNomeCafe} quantidadeFunc={handleQtCafe} proteinaFunc={handleQtCafeProt} carboidratoFunc={handleQtCafeCarb} gorduraFunc={handleQtCafeGord} butFunc = {addCafe} />
                </div>
                <div className="col-span-2">
                    <DietForm name="Lanche Manhã" nomeFunc={handleNomeLancheM} quantidadeFunc={handleQtLancheM} proteinaFunc={handleQtLancheMProt} carboidratoFunc={handleQtLancheMCarb} gorduraFunc={handleQLancheMGord} butFunc = {addLancheM} />
                </div>
                <div className="col-span-2">
                    <DietForm name="Almoço" nomeFunc={handleNomeAlmoco} quantidadeFunc={handleQtAlmoco} proteinaFunc={handleQtAlmocoProt} carboidratoFunc={handleQtAlmocoCarb} gorduraFunc={handleQtAlmocoAGord} butFunc = {addAlmoco} />
                </div>
                <div className="col-span-2">
                    <DietForm name="Lanche Tarde" nomeFunc={handleNomeLancheT} quantidadeFunc={handleQtLancheT} proteinaFunc={handleQtLancheTProt} carboidratoFunc={handleQtLancheTCarb} gorduraFunc={handleQtLancheTGord} butFunc = {addLancheT} />
                </div>
                <div className="col-span-2">
                    <DietForm name="Janta" nomeFunc={handleNomeJanta} quantidadeFunc={handleQtJanta} proteinaFunc={handleQtJantaProt} carboidratoFunc={handleQtJantaCarb} gorduraFunc={handleQtJantaAGord} butFunc = {addJantar} />
                </div>
            </div>
            
        </div>
        <div>
            <Link to="/getDiet">
                <Buttons name="Ver Dieta"/>
            </Link>
            
        </div>
        
    </div>
    )
}