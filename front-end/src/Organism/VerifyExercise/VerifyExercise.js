import { Buttons } from '../../Atomic/Buttons/Buttons.js';
import { useState } from "react";



export function VerifyExercise(){

    const [exer, setExer] = useState("");
    const [res, setRest] = useState("0");

    return(
        <div className="flex flex-col items-center justify-center pt-[20px]">
            <div>
                <p className="text-2xl font-bold text-[#8854d0]">Verificar exercícios</p>
             </div>
             <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] " >
                <select name="" id=""  onChange="" className="mx-[10px]">
                    <option value="1">Selecione uma parte</option>
                    <option value="1">Peito</option>
                    <option value="2">Ombro</option>
                    <option value="3">Costas</option>
                    <option value="4">Biceps</option>
                    <option value="5">Triceps</option>
                    <option value="6">Quadríceps</option>
                    <option value="7">Posterior</option>
                    <option value="8">Glúteos</option>
                    <option value="9">Abs</option>
                    <option value="10">Panturrilha</option>
                    <option value="11">Antebraço</option>
                </select>

                <Buttons name="Listar" func=""/>
             </div>
        </div>
    )
}