import { Inputs } from "../../Atomic/Input/Inputs";
import { Buttons } from "../../Atomic/Buttons/Buttons";

export function ExercisesForms({name,nome, repeticao,serie, butName, butId,butFunc}){
    return(
        <div className=" flex flex-col items-center justify-center w-max h-max p-[30px] shadow-2xl rounded-[12px] my-[30px] ">
            <p>{name}</p>
            <form action="">
                <div>
                    <p>Nome</p>
                    <Inputs type="text" place="Nome:" id="" func={nome}/>
                </div>
                <div>
                    <p>Série</p>
                    <Inputs type="text" place="Série:" id="" func={serie}/>
                </div>
                <div>
                    <p>Repetição</p>
                    <Inputs type="text" place="Repetição:" id="" func={repeticao}/>
                </div>
                <div>
                    <Buttons name="Cadastrar" id="" func= {butFunc}/>
                </div>
                
            </form>
            
        </div>
    )
}