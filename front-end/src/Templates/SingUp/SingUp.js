import { HeadersLogin } from "../../Organism/Headers/HeadersLogin";
import { SingAreas } from "../../Organism/SingArea/SingAreas.js";

export function SingUp(){
    return(
        <div className="grid grid-cols-12">
            <HeadersLogin>
            </HeadersLogin>
            <SingAreas title="PowerUp" subTitle="Cadastro" but1="Cadastrar" but2="voltar"/>
        </div>
    )
}