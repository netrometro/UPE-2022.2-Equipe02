import { Inputs } from "../../Atomic/Input/Inputs";
import { Buttons } from "../../Atomic/Buttons/Buttons";

export function DietForm({name,nomeFunc,quantidadeFunc,proteinaFunc,carboidratoFunc,gorduraFunc, butName, butId,butFunc}){
    return(
        <div className=" flex flex-col items-center justify-center w-max h-max p-[30px] shadow-2xl rounded-[12px] my-[30px] ">
            <p>{name}</p>
            <form action="">
                <div>
                    <p>Nome</p>
                    <Inputs type="text" place="Nome:" id="" func={nomeFunc}/>
                </div>
                <div>
                    <p>Quantidade</p>
                    <Inputs type="text" place="Quantidade:" id="" func={quantidadeFunc}/>
                </div>
                <div>
                    <p>Proteína</p>
                    <Inputs type="text" place="Proteína:" id="" func={proteinaFunc}/>
                </div>
                <div>
                    <p>Carboidrato</p>
                    <Inputs type="text" place="Carboidrato:" id="" func={carboidratoFunc}/>
                </div>
                <div>
                    <p>Gordura</p>
                    <Inputs type="text" place="Gordura:" id="" func={gorduraFunc}/>
                </div>
                <div>
                    <Buttons name="Cadastrar" id="" func= {butFunc}/>
                </div>
                
            </form>
            
        </div>
    )
}