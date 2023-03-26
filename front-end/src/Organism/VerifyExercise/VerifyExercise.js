import { Buttons } from '../../Atomic/Buttons/Buttons.js';
import { useState } from "react";



export function VerifyExercise(){

    const part = {
        "0":{
            "tipo":[""],
            "exercicios":[""],
            "img":[""],
        },
        "1":{
            "tipo":["Peito"],
            "exercicios":[  "Flexão de braço - 350 a 500 calorias/hora ",
                            "Supino com barra - 280 a 450 calorias/hora ",
                            "Supino com halteres - 200 a 400 calorias/hora ",
                            "Crucifixo com halteres - 250 a 350 calorias/hora ",
                            "Mergulho no banco - 250 a 350 calorias/hora ",
                            "Fly com halteres - 200 a 300 calorias/hora ",
                            "Flexão de braço com pegada fechada - 350 a 450 calorias/hora ",
                            "Press com máquina de cabo - 200 a 300 calorias/hora ",
                            "Press inclinado com barra - 300 a 450 calorias/hora ",
                            "Flexão de braço com um braço - 250 a 350 calorias/hora"],
            "img":[""],
        },
        "2":{
            "tipo":["Ombro"],
            "exercicios":[  "Levantamento frontal com halteres - 200 a 400 calorias/hora - ",
                            "Desenvolvimento com halteres - 300 a 500 calorias/hora - ",
                            "Elevação lateral com halteres - 150 a 250 calorias/hora - ",
                            "Remada alta com barra - 250 a 400 calorias/hora - ",
                            "Arnold press com halteres - 250 a 400 calorias/hora - ",
                            "Elevação frontal com barra - 200 a 300 calorias/hora - ",
                            "Elevação lateral com cabo - 200 a 300 calorias/hora - ",
                            "Elevação de ombros com halteres - 150 a 250 calorias/hora - ",
                            "Desenvolvimento com barra - 250 a 400 calorias/hora - ",
                            "Remada alta com halteres - 200 a 350 calorias/hora - "],
            "img":[""],
        },
        "3":{
            "tipo":["Costa"],
            "exercicios":[  "Barra fixa - 400 a 600 calorias/hora - ",
                            "Remada curvada com barra - 300 a 450 calorias/hora - ",
                            "Remada unilateral com halteres - 200 a 350 calorias/hora - ",
                            "Puxada alta na polia - 250 a 400 calorias/hora - ",
                            "Remada sentada na máquina - 200 a 350 calorias/hora - ",
                            "Puxada na polia com triangulo - 200 a 350 calorias/hora - ",
                            "Remada na máquina com triangulo - 200 a 350 calorias/hora - ",
                            "Levantamento terra - 400 a 600 calorias/hora - ",
                            "Remada baixa com barra - 200 a 350 calorias/hora - ",
                            "Pull-ups com pegada larga - 300 a 450 calorias/hora - "],
            "img":[""],
        },
        "4":{
            "tipo":["Biceps"],
            "exercicios":[  "Rosca direta com barra - 200 a 400 calorias/hora - ",
                            "Rosca concentrada com halteres - 150 a 250 calorias/hora - ",
                            "Rosca alternada com halteres - 200 a 350 calorias/hora - ",
                            "Rosca martelo com halteres - 200 a 350 calorias/hora - ",
                            "Rosca inversa com barra - 150 a 250 calorias/hora - ",
                            "Rosca scott com barra - 200 a 350 calorias/hora - ",
                            "Rosca scott com halteres - 200 a 350 calorias/hora - ",
                            "Rosca 21 - 200 a 300 calorias/hora - ",
                            "Rosca spider com halteres - 200 a 350 calorias/hora - ",
                            "Rosca direta com cabo - 150 a 250 calorias/hora - "],
            "img":[""],
        },
        "5":{
            "tipo":["Triceps"],
            "exercicios":[  "Supino fechado - 200 a 350 calorias/hora",
                            "Extensão de tríceps com halteres - 150 a 250 calorias/hora",
                            "Extensão de tríceps na polia - 150 a 250 calorias/hora",
                            "Mergulho no banco - 250 a 400 calorias/hora",
                            "Tríceps testa com barra - 200 a 350 calorias/hora",
                            "Tríceps testa com halteres - 200 a 350 calorias/hora",
                            "Extensão de tríceps com cabo - 150 a 250 calorias/hora",
                            "Extensão de tríceps com barra - 200 a 350 calorias/hora",
                            "Extensão de tríceps unilateral com halteres - 150 a 250 calorias/hora",
                            "Kickback de tríceps com halteres - 150 a 250 calorias/hora"],
            "img":[""],
        },
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