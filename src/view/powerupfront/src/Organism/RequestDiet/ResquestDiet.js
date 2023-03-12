import { Buttons } from "../../Atomic/Buttons/Buttons";
import { Inputs } from "../../Atomic/Input/Inputs";

export function RequestDiet(){
    return(
        <div className="flex flex-col items-center justify-center pt-[20px]" >
            <p>Request Diet</p>
            <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                    <select name="" id="" >
                        <option value="emagrecimento">Emagrecimento</option>
                        <option value="ganho">Ganho de massa</option>
                        <option value="manter">Manter</option>
                    </select>
                    <p>Calorias na refeição:</p>
                    <Inputs type="number"/>
                    <Buttons type="submit" name="Enter"/>
            </div>
        </div>
    )
}