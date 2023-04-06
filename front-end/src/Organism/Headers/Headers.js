import { Link } from "react-router-dom";
import { OutButton } from "../../Atomic/Buttons/OutButton";
import { IconBarbell, IconLogout } from '@tabler/icons-react';
import{useNavigate} from "react-router-dom"


export function Headers(){
    const navigate = useNavigate()
    return(
        <div className="col-span-12 bg-[#8854d0] h-20  flex justify-between w-full font-bold text-[#d1d8e0]">
                <div className="flex flex-row">
                    <p className="ml-[80px] text-3xl  mt-[20px]"><Link to="/home">PowerUp </Link></p>
                    <IconBarbell width="20" height="20" className="text-3xl  mt-[20px] font-bold"/>
                </div>
                 
                <ul className="mx-[80px] mt-[20px] flex flex-row ">
                    <li className="ml-[20px]">
                        <Link to='/perfil'>
                            <p>Perfil</p>
                        </Link>
                    </li>
                    <li className="ml-[20px]">
                        <Link to='/exercise'>
                            <p>Treino</p>
                        </Link>
                    </li>
                    <li className="ml-[20px]">
                        <Link to='/Diet'>
                            <p>Dieta</p>
                        </Link>
                    </li>
                    <li className="ml-[20px]">
                        <Link to='/suplementacao'>
                            <p>Suplementos</p>
                        </Link>
                    </li>
                    <li className="ml-[20px]">
                        <Link to='/imc'>
                            <p>IMC</p>
                        </Link>
                    </li>
                    <li>
                        <IconLogout className="ml-[20px] duration-500 hover:text-[#ff4d4d] cursor-pointer" onClick={()=>{
                            // eslint-disable-next-line react-hooks/rules-of-hooks 
                            navigate("/");
                            localStorage.removeItem('powerup')
                        }}/>
                    </li>
                </ul>
                
           </div>
    
    )
}