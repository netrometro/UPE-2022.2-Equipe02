import { Link } from "react-router-dom";
import { Buttons } from '../../Atomic/Buttons/Buttons.js';
import { Headers } from "../../Organism/Headers/Headers.js";
import { Footers } from "../../Organism/Footer/Footer.js";



export function Home(){


    
    return(
        
        <div>
            <Headers/>
            <div className="">
                <div className="flex flex-col items-center">
                <div className="flex flex-row">
                        <h1 className="text-[50px] mt-[140px] font-bold text-[#8854d0]">Bem Vindo ao PowerUp</h1>
                        
                    </div>
                    <p className="text-[20px] ">Uma aplicação feita para os amantes da musculação</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="my-[30px]">
                        <p className="text-[20px] text-[#8854d0]">Aplicações disponíveis</p>
                    </div>
                    <div className="grid grid-cols-12 gap-10 my-[30px] ">
                        <div className="col-span-4 flex flex-col items-center w-[300px] h-[230px] p-[50px] shadow-xl hover:shadow-2xl rounded-[12px]">
                            <p className="text-[20px] text-[#8854d0]">Treino</p>
                            <p className="py-[10px]">Há a possibilidade de você criar o seu própio treino e também requisitar um de acordo com suas necessidades.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footers/>
           
        </div>

    
    )
    
}