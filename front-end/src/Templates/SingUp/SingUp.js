import { HeadersLogin } from "../../Organism/Headers/HeadersLogin";
import { SingAreas } from "../../Organism/SingArea/SingAreas.js";
import { IconArrowLeft } from '@tabler/icons-react';

export function SingUp(){
    return(
        <div className="grid grid-cols-12">
            <HeadersLogin>
            </HeadersLogin>
            <SingAreas title="PowerUp" subTitle="Cadastro" but1="Cadastrar" but2={<IconArrowLeft/>}/>
        </div>
    )
}