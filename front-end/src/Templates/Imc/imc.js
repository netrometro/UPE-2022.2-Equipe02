import { Headers } from "../../Organism/Headers/Headers.js";
import { Footers } from "../../Organism/Footer/Footer.js";
import { ImcAreas } from "../../Organism/imc/imc.js";



export function Imc(){
    return(
        <div>
            <Headers/>
            <ImcAreas title="PowerUp" subTitle="IMC" but="Login"/>
            <Footers/>
        </div>
    )
}