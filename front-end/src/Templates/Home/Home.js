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
                    
                </div>
            </div>
            <Footers/>
           
        </div>

    
    )
    
}