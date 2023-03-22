import { HeadersLogin } from "../../Organism/Headers/HeadersLogin";
import { LoginAreas } from "../../Organism/LoginAreas/LoginAreas.js";


export function Login(){
    return(
        <div className="grid grid-cols-12">
            <HeadersLogin>

            </HeadersLogin>
            <LoginAreas title="PowerUp" subTitle="Login" but="Login"/>
        </div>
    )
}