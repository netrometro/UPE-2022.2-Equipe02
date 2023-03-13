import { Link } from "react-router-dom";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { DietForm } from "../DietForm/DietForm";
import { useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import response from "react"
const{userId} = require('./getId')


export function CreateDiet(){

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
            <Link to="/verDieta">
                <Buttons name="Ver Dieta"/>
            </Link>
            
        </div>
        
    </div>
    )
}