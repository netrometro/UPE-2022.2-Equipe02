import { Buttons } from "../../Atomic/Buttons/Buttons";
import { Inputs } from "../../Atomic/Input/Inputs";

export function RequestDiet(){

    const diet ={
        "first":{
            "cafe":[""],
            "lancheM":[""],
            "almoco":[""],
            "lancheT":[""],
            "janta":[""],
        },
    }

    return(
        <div className="flex flex-col items-center justify-center pt-[20px]" >
            <p>Request Diet</p>
            <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                    <select name="" id="" >
                        <option value="emagrecimento">Emagrecimento</option>
                        <option value="ganho">Ganho de massa</option>
                        <option value="manter">Keep</option>
                    </select>
                    
                    <p>Calories:</p>
                    <Inputs type="number"/>
                    <Buttons type="submit" name="Enter"/>

                    <div className=" w-[1300px] h-max p-[50px]  rounded-[12px] my-[30px] ">
                        <div className="">
                            <p className="text-2xl font-bold text-[#8854d0]">Food</p>  
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px]">Break fast</p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                            <p className="my-[10px]">Morning snacks</p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                            <p className="my-[10px]">Lunch</p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                            <p className="my-[10px]">Afternoon snacks</p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                            <p className="my-[10px]">Dinner</p>
                            <p></p>
                        </div>
                    </div>
            </div>
        </div>
    )
}