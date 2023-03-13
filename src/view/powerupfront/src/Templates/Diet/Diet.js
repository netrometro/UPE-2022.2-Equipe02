import { CreateDiet } from "../../Organism/createDiet/createDiet";
import { Footers } from "../../Organism/Footer/Footer";
import { Headers } from "../../Organism/Headers/Headers";
import { RequestDiet } from "../../Organism/RequestDiet/ResquestDiet";




export function Diet(){
    return(
        <div>
            <Headers/>
            <CreateDiet/>
            <RequestDiet/>
           <Footers/>
        </div>
    )
}