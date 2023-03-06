
import { Link} from "react-router-dom";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { Inputs } from "../../Atomic/Input/Inputs";


export function LoginAreas({title,subTitle,but}){
    return (
        <div className='col-span-12  h-max  mx-[80px] flex justify-center items-center'>
        <div className="flex flex-col items-center justify-center w-[400px] h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
            
            <div className="my-[20px]">
               <h1 className="text-4xl font-bold text-[#8854d0]">{title}</h1> 
               <h2 className="text-2xl font-medium flex justify-center mt-[10px]">{subTitle}</h2>
            </div>

            <div className="my-[20px]">
                <form action="" method="">
                    <label htmlFor="" className="text-[#8854d0]">Email do usuário:</label>
                    <Inputs type="Email" place="Email:" name="" id="" func={handleUserEmail}/>
                </form>
            </div>

            <div className="my-[20px]">
                <form action="" method="">  
                    <label htmlFor="" className="text-[#8854d0]">Senha:</label>
                    <Inputs type="password" place="Senha:" name="" id="" func={handleUserPassword}/>
                </form>
            </div>

            <div className="ml-[120px] text-sm font-thin text-[#45aaf2] underline">
                <Link to='/cadastro'>
                    <p>Cadastrar</p>
                </Link>
            </div>

            <div className="my-[20px]">  
                    <Buttons name={but} id="" func={addUser}/>
            </div>   

        </div>
            
    </div>
    )
}