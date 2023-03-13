import { Link } from "react-router-dom";

export function Headers(){
    return(
        <div className="col-span-12 bg-[#8854d0] h-20  flex justify-between w-full font-bold text-[#d1d8e0]">
                <p className="mx-[80px] text-3xl  mt-[20px]">PowerUp</p>
                <ul className="mx-[80px] mt-[20px] flex flex-row ">
                    <li className="ml-[20px]">
                        <Link to='/perfil'>
                            <p>Perfil</p>
                        </Link>
                    </li>
                    <li className="ml-[20px]">
                        <Link to='/'>
                            <p>Treino</p>
                        </Link>
                    </li>
                    <li className="ml-[20px]">
                        <Link to='/Diet'>
                            <p>Dieta</p>
                        </Link>
                    </li>
                    <li className="ml-[20px]">
                        <Link to='/'>
                            <p>Suplementos</p>
                        </Link>
                    </li>
                </ul>
           </div>
    
    )
}