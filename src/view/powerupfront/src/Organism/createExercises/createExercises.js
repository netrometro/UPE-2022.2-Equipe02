import { Link } from "react-router-dom";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { TreinoForm } from "../TreinoForms/treinoForms";
import { useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import response from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CreateExercise(){


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