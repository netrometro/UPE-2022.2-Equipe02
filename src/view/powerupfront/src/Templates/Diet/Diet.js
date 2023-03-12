import { Footers } from "../../Organism/Footer/Footer";
import { Headers } from "../../Organism/Headers/Headers";
import { RequestDiet } from "../../Organism/RequestDiet/ResquestDiet";




export function Diet(){
    return(
        <div>
            <Headers/>
            <p>Criar dieta</p>
            <RequestDiet/>
           <Footers/>
        </div>
    )
}