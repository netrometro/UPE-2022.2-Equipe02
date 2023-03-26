import { Buttons } from '../../Atomic/Buttons/Buttons.js';
import { useState } from "react";



export function VerifyExercise(){

    const part = {

    };

    const [exer, setExer] = useState("");
    const [res, setRest] = useState("0");

    const handleExerChange = (e) => setExer(e.target.value);

    function onListarExer(){
        if(exer === "1"){
            setRest("1")
        }else if(exer === "2"){
            setRest("2")
        }else if(exer === "3"){
            setRest("3")
        }else if(exer === "4"){
            setRest("4")
        }else if(exer === "5"){
            setRest("5")
        }else if(exer === "6"){
            setRest("6")
        }else if(exer === "7"){
            setRest("7")
        }else if(exer === "8"){
            setRest("8")
        }else if(exer === "9"){
            setRest("9")
        }else if(exer === "10"){
            setRest("10")
        }else if(exer === "11"){
            setRest("11")
        }else{
            alert("selecione um tipo para visualizar")
        }
    }

    return(
        <div className="flex flex-col items-center justify-center pt-[20px]">
            <div>
                <p className="text-2xl font-bold text-[#8854d0]">Verificar exercícios</p>
             </div>
             <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] " >
                <select name="" id=""  onChange={handleExerChange} className="mx-[10px]">
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

                <Buttons name="Listar" func={onListarExer}/>
             </div>
        </div>
    )
}