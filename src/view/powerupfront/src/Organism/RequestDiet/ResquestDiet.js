import { Buttons } from "../../Atomic/Buttons/Buttons";
import { Inputs } from "../../Atomic/Input/Inputs";

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
    }

    return(
        <div className="flex flex-col items-center justify-center pt-[20px]" >
            <p>Request Diet</p>
            <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                    <select name="" id="" >
                        <option value="emagrecimento">Emagrecimento</option>
                        <option value="ganho">Ganho de massa</option>
                        <option value="manter">Keep</option>
                    </select>
                    
                    <p>Calories:</p>
                    <Inputs type="number"/>
                    <Buttons type="submit" name="Enter"/>

                    <div className=" w-[1300px] h-max p-[50px]  rounded-[12px] my-[30px] ">
                        <div className="">
                            <p className="text-2xl font-bold text-[#8854d0]">Food</p>  
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px]">Break fast</p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                            <p className="my-[10px]">Morning snacks</p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                            <p className="my-[10px]">Lunch</p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                            <p className="my-[10px]">Afternoon snacks</p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                            <p className="my-[10px]">Dinner</p>
                            <p></p>
                        </div>
                    </div>
            </div>
        </div>
    )
}