import { Link } from "react-router-dom";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { Inputs } from "../../Atomic/Input/Inputs";
import { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import response from "react";
import {Chart} from "react-google-charts"
import {BarChart} from "./GraficoPerfil";
import Grafict from "./Grafict";


export function PerfilAreas(){
    
    const [idade, setIdade] = useState("");
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [genero, setGenero] = useState("");
    const [fator, setFator] = useState("");

    const handleIdadeChange = (e) => setIdade(e.target.value);
    const handlePesoChange = (e) => setPeso(e.target.value);
    const handleAlturaChange = (e) => setAltura(e.target.value);
    const handleGeneroChange = (e) => setGenero(e.target.value);
    const handleFatorChange = (e) => setFator(e.target.value);
    const [perfil, setPerfil] = useState([]);

    const pesoData = perfil.map((peso)=>(peso.peso))

    return(
        <div className="grid grid-cols-12">
        <div className='col-span-6  h-max  mx-[80px] flex justify-start items-center'>
        <div className="flex flex-col items-center justify-center w-[400px] h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
            
            <div className="my-[20px]">
               <h1 className="text-4xl font-bold text-[#8854d0]">PowerUp</h1> 
               <h2 className="text-2xl font-medium flex justify-center mt-[10px]">Perfil</h2>
            </div>

            <div className="my-[20px]">
                <form action="" method="">
                    <label htmlFor="" className="text-[#8854d0]">Nome de usuário:</label>
                    <Inputs type="text" place="Nome:" name="" id="" func=""/>
                </form>
            </div>

            <div className="my-[20px]">
                <form action="" method="">
                    <label htmlFor="" className="text-[#8854d0]">Idade:</label>
                    <Inputs type="text" place="Idade:" name="" id="" func={handleIdadeChange}/>
                </form>
            </div>

            <div className="my-[20px]">
                <form action="" method="">
                    <label htmlFor="" className="text-[#8854d0]">Peso:</label>
                    <Inputs type="text" place="Peso:" name="" id="" func={handlePesoChange}/>
                </form>
            </div>

            <div className="my-[20px]">
                <form action="" method="">
                    <label htmlFor="" className="text-[#8854d0]">Altura:</label>
                    <Inputs type="text" place="Altura:" name="" id="" func={handleAlturaChange}/>
                </form>
            </div>

            <div className="my-[20px]">
                <form action="" method="">
                    <label htmlFor="" className="text-[#8854d0]">Gênero:</label>
                    <Inputs type="text" place="Gênero:" name="" id="" func={handleGeneroChange}/>
                </form>
            </div>

            <div className="my-[20px]">
                <form action="" method="">
                    <label htmlFor="" className="text-[#8854d0]">Fator atividade:</label>
                    <Inputs type="text" place="Atividade:" name="" id="" func={handleFatorChange}/>
                </form>
            </div>

            <div className="my-[20px]"> 
                        <Link to="/graficoPerfil">    
                            <Buttons  name="Verificar Perfil" id="" func={addPerfil}/>
                        </Link>
            </div>   

        </div>
            
    </div>
    <div className="col-span-6">
                
                <div className='w-[600px] h-max p-[50px] shadow-2xl rounded-[12px] my-[30px]'>
                    <p className="p-[5px] m-[10px]">Gráficos</p >
                    <p className="p-[5px] m-[10px]">Histórico de peso</p>
                    
                </div>

                <div className='w-[600px] h-max p-[50px] shadow-2xl rounded-[12px] my-[30px]'>
                    <h1>Dados-histórico</h1>
                    {perfil.map((user,key) => {

                        return(
                            <><div className="my-[20px] shadow-inner">
                                
                                <p className="p-[5px] m-[10px]">Idade:{user.idade}</p>
                                <p className="p-[5px] m-[10px]">Peso:{user.peso}</p>
                                <p className="p-[5px] m-[10px]">Altura:{user.altura}</p>
                                <p className="p-[5px] m-[10px]">Fator:{user.fatorAtividade}</p>
                                
                            </div><hr></hr></>
                        )

                    })}
                    
                </div>
            </div>
    </div>
    )
}