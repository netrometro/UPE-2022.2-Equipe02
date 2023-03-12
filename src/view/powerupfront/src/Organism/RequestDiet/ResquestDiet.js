import { Buttons } from "../../Atomic/Buttons/Buttons";
import { Inputs } from "../../Atomic/Input/Inputs";
import { useEffect, useState } from "react";
import jsPDF from 'jspdf';

export function RequestDiet(){

    const diet ={
        "first":{
            "cafe":[""],
            "lancheM":[""],
            "almoco":[""],
            "lancheT":[""],
            "janta":[""],
        },
        "emagrecer":{
            "cafe":["2 fatias de pão integral (60g) - ","2 ovos mexidos (120g) - "," 1 xícara de café com leite desnatado (240ml)"],
            "lancheM":["1 maçã (150g) - ","1 punhado de castanhas (30g)"],
            "almoco":["1 filé de frango grelhado (100g) - ","1 xícara de arroz integral cozido (120g) - ","1 xícara de feijão cozido (160g) - ","1 porção de legumes cozidos no vapor (200g) - ","1 taça de gelatina diet (120g)"],
            "lancheT":["1 iogurte natural desnatado (200ml) - ","1 banana (100g)"],
            "janta":["1 filé de salmão grelhado (100g) - ","1 xícara de quinoa cozida (120g) - ","1 porção de legumes cozidos no vapor (200g) - ","1 taça de salada de frutas (150g)"],
        },
        "ganhar":{
            "cafe":["3 ovos inteiros mexidos (150g) - ","2 fatias de pão integral (60g) - ","1 banana (100g) - ","1 xícara de café com leite desnatado (240ml)"],
            "lancheM":["1 porção de frutas (200g) - ","1 porção de nuts (30g)"],
            "almoco":["120g de peito de frango grelhado - ","1 xícara de arroz integral cozido (120g) - ","1 xícara de feijão cozido (160g) - ","1 porção de legumes cozidos no vapor (200g) - ","1 porção de salada verde com azeite e limão"],
            "lancheT":["1 iogurte natural desnatado (200ml) - ","1 scoop de whey protein (30g) - ","1 porção de frutas (100g)"],
            "janta":["120g de filé de salmão grelhado - ","1 xícara de quinoa cozida (120g) - ","1 porção de legumes cozidos no vapor (200g) - ","1 porção de salada verde com azeite e limão"],

        },
        "manter":{
            "cafe":["1 xícara de café com leite desnatado (240ml) - ","2 fatias de pão integral (60g) - ","1 colher de sopa de geleia sem açúcar (20g) - ","1 ovo cozido (50g) - ","1 laranja (150g)"],
            "lancheM":["1 porção de frutas (200g) - ","1 iogurte natural desnatado (200ml)"],
            "almoco":["1 filé de peixe grelhado (120g) - ","1 xícara de arroz integral cozido (120g) - ","1 xícara de feijão cozido (160g) - ","1 porção de legumes cozidos no vapor (200g) - ","1 porção de salada verde com azeite e limão"],
            "lancheT":["1 porção de frutas (200g) - ","1 punhado de castanhas (30g)"],
            "janta":["120g de peito de frango grelhado - ","1 batata doce cozida (150g) - ","1 porção de legumes cozidos no vapor (200g) - ","1 porção de salada verde com azeite e limão"],

        },
        "emagrecerM":{
            
        },
        "ganharM":{
            "cafe":["4 ovos inteiros mexidos (200g) - ","2 fatias de pão integral (60g) - ","1 abacate médio (150g) - ","1 xícara de café com leite desnatado (240ml)"],
            "lancheM":["1 scoop de whey protein (30g) misturado com água ou leite desnatado (240ml) - ","1 banana média (100g) - ","1 porção de nuts (30g)"],
            "almoco":["200g de filé de frango grelhado - ","1 xícara de arroz integral cozido (120g) - ","1 xícara de feijão cozido (160g) - ","1 porção de legumes cozidos no vapor (200g) - ","1 porção de salada verde com azeite e limão"],
            "lancheT":["1 scoop de whey protein (30g) misturado com água ou leite desnatado (240ml) - ","1 maçã média (150g) - ","1 barrinha de cereais (30g)"],
            "janta":["200g de filé de carne vermelha grelhado - ","1 batata doce grande (200g) - ","1 porção de legumes cozidos no vapor (200g) - ","1 porção de salada verde com azeite e limão"],

        },
        "manterM":{
            "cafe":["3 ovos inteiros mexidos (150g) - ","2 fatias de pão integral (60g) - " ,"1 xícara de café com leite desnatado (240ml) - ","1 porção de frutas (200g)"],
            "lancheM":["1 porção de frutas (200g) - ","1 iogurte natural desnatado (200ml) - ","1 porção de nuts (30g)"],
            "almoco":["150g de peito de frango grelhado - ","1 xícara de arroz integral cozido (120g) - ","1 xícara de feijão cozido (160g) - ","1 porção de legumes cozidos no vapor (200g) - ","1 porção de salada verde com azeite e limão"],
            "lancheT":["1 scoop de whey protein (30g) misturado com água ou leite desnatado (240ml) - ","1 porção de frutas (100g) - ","1 barrinha de cereais (30g)"],
            "janta":["150g de filé de salmão grelhado - ","1 xícara de quinoa cozida (120g) - ","1 porção de legumes cozidos no vapor (200g) - ","1 porção de salada verde com azeite e limão"],

        },
    }

    const [tipo, setTipo] = useState("");
    const [kal, setKal] = useState("");
    const [usertipo, setUserTipo] = useState("first");

    const handleTipoChange = (e) => setTipo(e.target.value);
    const handleKalChange = (e) => setKal(e.target.value);

    function onClickRequest(){
        if(kal <= 2000 && kal >= 1000){
            if(tipo === "emagrecimento"){
                setUserTipo("emagrecer")
        
                
            }else if(tipo === "ganho"){
                setUserTipo("ganhar")
                
            }else if(tipo === "manter"){
                setUserTipo("manter")
                
            }
        }else if(kal > 2000 && kal <= 3000){
            if(tipo === "emagrecimento"){
                alert("Não é muito recomendado uma dieta de emagrecimento para essa quantidade de calorias")
            }else if(tipo === "ganho"){
                setUserTipo("ganharM")
                
            }else if(tipo === "manter"){
                setUserTipo("manterM")
                
            }
        }else if(kal === null || kal === undefined){
            alert("digite um valor para receber a dieta correta")
        }else{
            alert("digite um valor para receber a dieta correta")
        }
        
        
    }

    let type = usertipo;

    return(
        <div className="flex flex-col items-center justify-center pt-[20px]" >
            <p>Request Diet</p>
            <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                    <select name="" id="" onChange={handleTipoChange} >
                        <option value="emagrecimento">Emagrecimento</option>
                        <option value="ganho">Ganho de massa</option>
                        <option value="manter">Keep</option>
                    </select>
                    
                    <p>Calories:</p>
                    <Inputs type="number" func={handleKalChange}/>
                    <Buttons type="submit" name="Enter" func={onClickRequest} />

                    <div className=" w-[1300px] h-max p-[50px]  rounded-[12px] my-[30px] ">
                        <div className="">
                            <p className="text-2xl font-bold text-[#8854d0]">Food</p>  
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px]">Break fast</p>
                            <p>{diet[type].cafe}</p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                            <p className="my-[10px]">Morning snacks</p>
                            <p>{diet[type].lancheM}</p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                            <p className="my-[10px]">Lunch</p>
                            <p>{diet[type].almoco}</p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                            <p className="my-[10px]">Afternoon snacks</p>
                            <p>{diet[type].lancheT}</p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                            <p className="my-[10px]">Dinner</p>
                            <p>{diet[type].janta}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}