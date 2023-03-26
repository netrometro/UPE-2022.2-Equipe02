import { Headers } from "../../Organism/Headers.js/Headers";
import { Footers } from "../../Organism/Footers/Footers.js";
import { ImcAreas } from "../../Organism/Imc/imc";



export function Imc(){
    return(
        <div className="grid grid-cols-12">
            <Headers/>
            <ImcAreas title="PowerUp" subTitle="IMC" but="Login"/>
            <Footers/>
        </div>
    )
}