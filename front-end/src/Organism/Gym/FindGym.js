import { Buttons } from "../../Atomic/Buttons/Buttons";

export function FindGym(){

    const gym = {
        "0":{
           "name":[""],
           "link":[""],
        }
    }

    return(
        <div>
            <div>Cidade disponíveis</div>

            <select name="" id="">
                <option value="">Selecione uma cidade</option>
                <option value="1">Garanhuns</option>
                <option value="2">Caruaru</option>
                <option value="3">Recife</option>
            </select>

            <Buttons name="Pesquisar"/>
        </div>
    )
}