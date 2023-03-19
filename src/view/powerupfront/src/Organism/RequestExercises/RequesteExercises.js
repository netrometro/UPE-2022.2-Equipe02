import { Buttons } from "../../Atomic/Buttons/Buttons";

export function RequestExercises(){
    return(
        <div>
            <div className="flex flex-col items-center justify-center pt-[20px]" >
                <p className="text-2xl font-bold text-[#8854d0]">Solicitar Treino</p>
                <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">

                    <p className="my-[20px]">Selecione o fator atividade desejado</p>

                    <p className="my-[20px]">O seu fator atividade atual é:</p>

                    <div className="my-[20px]">
                            <select name="" id="" onChange="" className="mr-[20px]">
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>

                            <Buttons  type="submit" name="Solicitar" func="" />    
                        </div>
                </div>
            </div>
        </div>
    )
}