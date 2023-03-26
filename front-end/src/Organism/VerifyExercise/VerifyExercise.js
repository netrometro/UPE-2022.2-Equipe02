import { Buttons } from '../../Atomic/Buttons/Buttons.js';
import { useState } from "react";
import { Link } from "react-router-dom";



export function VerifyExercise(){

    const part = {
        "0":{
            "tipo":[""],
            "exercicios":[""],
            "link":[""],
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
            "link":["https://www.youtube.com/watch?v=IODxDxX7oi4",
                    "https://www.youtube.com/watch?v=_JqzO3A5wcM",
                    "https://www.youtube.com/watch?v=2IMGwtn0YbY",
                    "https://www.youtube.com/watch?v=CArcfAJOJbM",
                    "https://www.youtube.com/watch?v=hMDf6s-4vx8",
                    "https://www.youtube.com/watch?v=yASNGOl7qrg",
                    "https://www.youtube.com/watch?v=U1B6CzpS7X4",
                    "https://www.youtube.com/watch?v=4V4iRiLr5w0",
                    "https://www.youtube.com/watch?v=tg0q3qz3Gso",
                    "https://www.youtube.com/watch?v=YbXkt8lDfLo"],
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
            "link":["https://www.youtube.com/watch?v=Iu8HlKxGz9g",
                    "https://www.youtube.com/watch?v=sqOUC3qD1_w",
                    "https://www.youtube.com/watch?v=SEVJ_tC8yBk",
                    "https://www.youtube.com/watch?v=8mBDW4mDrFY",
                    "https://www.youtube.com/watch?v=VrELZf6rZbI",
                    "https://www.youtube.com/watch?v=rRGHlKvTS8g",
                    "https://www.youtube.com/watch?v=Cj80q3_M8pY",
                    "https://www.youtube.com/watch?v=5t8bZzbzeJw",
                    "https://www.youtube.com/watch?v=0EgdgKhu0XE",
                    "https://www.youtube.com/watch?v=Zx1fLxbD_z8"],
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
            "link":["https://www.youtube.com/watch?v=_D6nuwqKvBI",
            "https://www.youtube.com/watch?v=Un1PDhrU3h0",
            "https://www.youtube.com/watch?v=CEYXxAVec0A",
            "https://www.youtube.com/watch?v=NPbv3Lqsjw8",
            "https://www.youtube.com/watch?v=i0i0c8V4Sa4",
            "https://www.youtube.com/watch?v=VvZTlNmHEqw",
            "https://www.youtube.com/watch?v=XD0sw86hMsk",
            "https://www.youtube.com/watch?v=2xjZp9-9HX8",
            "https://www.youtube.com/watch?v=U76v5Kjz5l8",
            "https://www.youtube.com/watch?v=bW5F0Z0eNbQ"],
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
            "link":[    "https://www.youtube.com/watch?v=VNTXlOfuNZA",
                        "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
                        "https://www.youtube.com/watch?v=hGxHzyReCX8",
                        "https://www.youtube.com/watch?v=TwD-YGVP4Bk",
                        "https://www.youtube.com/watch?v=6iWQtNiPwCc",
                        "https://www.youtube.com/watch?v=9jDNZlQAKHg",
                        "https://www.youtube.com/watch?v=ko_U1RKh0Ro",
                        "https://www.youtube.com/watch?v=M2uX9jxV7Mk",
                        "https://www.youtube.com/watch?v=8W6UQSTvzrA",
                        "https://www.youtube.com/watch?v=09vPwZKiY24"],
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
            "link":["https://www.youtube.com/watch?v=IwYCDLZcPpI",
            "https://www.youtube.com/watch?v=F9OuVrKxMZ0",
            "https://www.youtube.com/watch?v=yKdnzA6E0o0",
            "https://www.youtube.com/watch?v=cW8lIYwChBU",
            "https://www.youtube.com/watch?v=G5-dtCNf9ZY",
            "https://www.youtube.com/watch?v=mwZrqF5B5L8",
            "https://www.youtube.com/watch?v=T5ri5OgS5D0",
            "https://www.youtube.com/watch?v=hj4C4y-CeJ8",
            "https://www.youtube.com/watch?v=-p20cLhUPZ4",
            "https://www.youtube.com/watch?v=2iGnMvV7cfo"],
        },
        "6":{
            "tipo":["Quadriceps"],
            "exercicios":[  "Agachamento com barra - 400 a 600 calorias/hora",
                            "Agachamento livre - 350 a 500 calorias/hora",
                            "Leg Press - 250 a 450 calorias/hora",
                            "Agachamento sumô - 350 a 500 calorias/hora",
                            "Cadeira extensora - 150 a 250 calorias/hora",
                            "Afundo - 300 a 450 calorias/hora",
                            "Agachamento com salto - 500 a 700 calorias/hora",
                            "Passada - 300 a 450 calorias/hora",
                            "Pistol squat - 250 a 400 calorias/hora",
                            "Agachamento búlgaro - 300 a 450 calorias/hora"],
            "link":["https://www.youtube.com/watch?v=4pJWiwX1TBA",
            "https://www.youtube.com/watch?v=0AHYvSwOmeI",
            "https://www.youtube.com/watch?v=zucjFWPZFlQ",
            "https://www.youtube.com/watch?v=RSyRwcaRl0E",
            "https://www.youtube.com/watch?v=2t2bwNXAvl4",
            "https://www.youtube.com/watch?v=g4A8zT9XrHQ",
            "https://www.youtube.com/watch?v=FG1UJecIjro",
            "https://www.youtube.com/watch?v=0Q0uLZrU6r8",
            "https://www.youtube.com/watch?v=dNJcybKmkfA",
            "https://www.youtube.com/watch?v=IxZQFmyLG6Y"],
        },
        "7":{
            "tipo":["Posterior"],
            "exercicios":[  "Levantamento terra - 400 a 600 calorias/hora",
                            "Flexão de pernas em máquina - 200 a 400 calorias/hora",
                            "Stiff - 350 a 500 calorias/hora",
                            "Mesa flexora - 150 a 250 calorias/hora",
                            "Panturrilha no leg press - 250 a 400 calorias/hora",
                            "Glúteos no cabo - 200 a 300 calorias/hora",
                            "Peso morto com pernas estendidas - 400 a 600 calorias/hora",
                            "Swiss ball hamstring curl - 200 a 300 calorias/hora",
                            "Afundo reverso - 300 a 450 calorias/hora",
                            "Good morning - 250 a 400 calorias/hora"],
            "link":["https://www.youtube.com/watch?v=aKw3D7M9GzE",
            "https://www.youtube.com/watch?v=ukO6l1J6eI4",
            "https://www.youtube.com/watch?v=-E4EDa4BP4E",
            "https://www.youtube.com/watch?v=VKFKeJ5-9X8",
            "https://www.youtube.com/watch?v=xJGyN8CwvGw",
            "https://www.youtube.com/watch?v=B8NDvE9NOEs",
            "https://www.youtube.com/watch?v=nytMKRqbMz0",
            "https://www.youtube.com/watch?v=7oL-3_c3qEo",
            "https://www.youtube.com/watch?v=8iPEnn-ltC8",
            "https://www.youtube.com/watch?v=2I6Q-nKXQi8"],
        },
        "8":{
            "tipo":["Glúteos"],
            "exercicios":[  "Agachamento - 350 a 600 calorias/hora -",
                            "Levantamento Terra - 300 a 500 calorias/hora -",
                            "Cadeira Abdutora - 250 a 400 calorias/hora -",
                            "Cadeira Adutora - 200 a 350 calorias/hora -",
                            "Passada - 350 a 550 calorias/hora -",
                            "Stiff - 250 a 450 calorias/hora -",
                            "Elevação de Pelve - 200 a 350 calorias/hora -",
                            "Glúteo 4 Apoios - 150 a 250 calorias/hora -",
                            "Agachamento Búlgaro - 350 a 600 calorias/hora -",
                            "Cadeira Extensora - 200 a 350 calorias/hora -"],
            "link":["https://www.youtube.com/watch?v=ultWZbUMPL8",
            "https://www.youtube.com/watch?v=4AObAU-EcYE",
            "https://www.youtube.com/watch?v=XNQM5l54FjM",
            "https://www.youtube.com/watch?v=SPuZf0mL7ls",
            "https://www.youtube.com/watch?v=Hx7cyR8WdNY",
            "https://www.youtube.com/watch?v=_Gwgm3s2EQ0",
            "https://www.youtube.com/watch?v=4Upa5fZ1dNs",
            "https://www.youtube.com/watch?v=ccF_gJFSmC0",
            "https://www.youtube.com/watch?v=nnG1wS-EHwU",
            "https://www.youtube.com/watch?v=kqqI1yzA9p8"],
        },
        "9":{
            "tipo":["Abs"],
            "exercicios":[  "Abdominal tradicional - 100 a 200 calorias/hora - ",
                            "Prancha - 150 a 250 calorias/hora - ",
                            "Abdominal oblíquo - 150 a 250 calorias/hora - ",
                            "Abdominal com bola suíça - 100 a 200 calorias/hora - ",
                            "Bicicleta no ar - 200 a 350 calorias/hora - ",
                            "Abdominal com elevação de pernas - 150 a 250 calorias/hora - ",
                            "Tesoura - 150 a 250 calorias/hora - ",
                            "Abdominal com rotação de tronco - 150 a 250 calorias/hora - ",
                            "Abdominal com apoio dos pés na parede - 150 a 250 calorias/hora - ",
                            "Abdominal com bola medicinal - 200 a 300 calorias/hora - "],
            "link":["https://www.youtube.com/watch?v=YNJ7_Hpw_KI",
            "https://www.youtube.com/watch?v=ASdvN_XEl_c",
            "https://www.youtube.com/watch?v=q1CN_xjrXOc",
            "https://www.youtube.com/watch?v=rsTjvOUaZaw",
            "https://www.youtube.com/watch?v=YBn9REgEJcc",
            "https://www.youtube.com/watch?v=pn34nAPgBcQ",
            "https://www.youtube.com/watch?v=y5GJZ5NjfRU",
            "https://www.youtube.com/watch?v=tAA4XIl4kB4",
            "https://www.youtube.com/watch?v=nDeR5gW8YvE",
            "https://www.youtube.com/watch?v=m7Ea6vOAu_4"],
        },
        "10":{
            "tipo":["Panturilha"],
            "exercicios":[  "Elevação de panturrilha em pé - 200 a 300 calorias/hora",
                            "Elevação de panturrilha sentado - 200 a 300 calorias/hora",
                            "Elevação de panturrilha em máquina - 150 a 250 calorias/hora",
                            "Pulo de corda - 700 a 1000 calorias/hora",
                            "Corrida - 600 a 1000 calorias/hora",
                            "Caminhada com inclinação - 300 a 500 calorias/hora",
                            "Subida de escada - 500 a 700 calorias/hora",
                            "Agachamento com salto - 400 a 600 calorias/hora",
                            "Jump - 500 a 800 calorias/hora",
                            "Box jump - 600 a 800 calorias/hora"],
            "link":["https://www.youtube.com/watch?v=xy1Q5w1qckc", 
            "https://www.youtube.com/watch?v=71NQ5Vkd4As", 
            "https://www.youtube.com/watch?v=DCmLZceEYeQ", 
            "https://www.youtube.com/watch?v=tipQCUSGF0Y", 
            "https://www.youtube.com/watch?v=1r3q9FJHYv8",
            "https://www.youtube.com/watch?v=aBf1L6wliOc",
            "https://www.youtube.com/watch?v=0E-_-eOyGzQ", 
            "https://www.youtube.com/watch?v=gI5xnMj50b8", 
            "https://www.youtube.com/watch?v=WvLDTYY3RzQ", 
            "https://www.youtube.com/watch?v=IxnG8oGYtmE"] 
        },
        "11":{
            "tipo":["Antebraço"],
            "exercicios":[  "Puxada de corda com antebraço - 250 a 400 calorias/hora",
                            "Puxada de corda com barra - 200 a 350 calorias/hora",
                            "Puxada de corda com halteres - 200 a 350 calorias/hora",
                            "Elevação de punho com barra - 150 a 250 calorias/hora",
                            "Elevação de punho com halteres - 150 a 250 calorias/hora",
                            "Martelo com barra - 200 a 350 calorias/hora",
                            "Martelo com halteres - 200 a 350 calorias/hora",
                            "Rosca inversa com barra - 150 a 250 calorias/hora",
                            "Rosca inversa com halteres - 150 a 250 calorias/hora",
                            "Rosca de punho com barra - 150 a 250 calorias/hora"],
            "link":["https://www.youtube.com/watch?v=V7WfII9Y9VQ", 
            "https://www.youtube.com/watch?v=vNvV7ERoFME",
            "https://www.youtube.com/watch?v=yoJb-yjyIVQ",
            "https://www.youtube.com/watch?v=Cxhjtf0YPgg",
            "https://www.youtube.com/watch?v=v0NmD8H_LeM",
            "https://www.youtube.com/watch?v=O3kwq3JF44o",
            "https://www.youtube.com/watch?v=CRb87QlQ6rE",
            "https://www.youtube.com/watch?v=bFtiyYYGx2Q",
            "https://www.youtube.com/watch?v=koXpXg0LsRw",
            "https://www.youtube.com/watch?v=t7nqYDZq3fI"],
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

    const listaExercicios = part[res].exercicios.map((exercicio, index) => (
        <div className="shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl " key={index}>
            <Link to={part[res].link[index]}>
                {exercicio}
            </Link>  
        </div>
    ));


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

             <div className=" w-[1300px] h-max p-[50px]  rounded-[12px] my-[30px] ">
                <p>{part[res].tipo}</p>
                <p>
                    {listaExercicios}
                </p>
                <p>{part[res].img}</p>
             </div>
        </div>
    )
}