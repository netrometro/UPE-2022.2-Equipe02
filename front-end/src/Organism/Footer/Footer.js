import { IconBrandInstagram, IconBrandLinkedin, IconBrandGithub, IconCode } from '@tabler/icons-react';
import { Link } from "react-router-dom";

export function Footers(){
    return(
        <div className="bg-[#341f97] text-[#fff]">
        
                
                <div className="flex flex-row justify-center">
                <div className='m-[50px] w-[200px] justify-center shadow-inner p-[20px] bg-[#27157a] rounded-[12px]'>
                        <p >
                            <Link to="https://github.com/netrometro/UPE-2022.2-Equipe02" className='flex flex-row w-[120px] justify-around '>
                                <IconCode/>
                                <p>Repositório</p>
                            </Link>
                        </p>
                </div>
                    <div className="flex flex-row m-[50px] w-[200px] shadow-inner p-[20px] bg-[#27157a] rounded-[12px] duration-500 hover:bg-[#fff] hover:text-[#27157a]">
                        <p className='font-bold'>David</p>
                        <ul className="flex flex-row w-[100px] justify-around">
                            <li className='cursor-pointer duration-500 hover:p-[5px]'>
                                <Link to="https://www.instagram.com/davidemmannoel/">
                                    <IconBrandInstagram/>
                                </Link>
                                </li>
                            <li className='cursor-pointer duration-500 hover:p-[5px]'>
                                <Link to="https://www.linkedin.com/in/david-emmanoel-332132179/">
                                    <IconBrandLinkedin/>
                                </Link>
                                </li>
                            <li className='cursor-pointer duration-500 hover:p-[5px]'>
                                <Link to="https://github.com/DavidRochaCode">
                                    <IconBrandGithub/>
                                </Link>
                                </li>
                        </ul>
                    </div>

                    <div className="flex flex-row m-[50px] w-[200px] shadow-inner p-[20px] bg-[#27157a] rounded-[12px] duration-500 hover:bg-[#fff] hover:text-[#27157a]">
                        <p className='font-bold'>Jamuelton</p>
                        <ul className="flex flex-row w-[100px] justify-around">
                            <li className='cursor-pointer duration-500 hover:p-[5px]' >
                                <Link to="https://www.instagram.com/jamuelton/">
                                    <IconBrandInstagram/>
                                </Link>
                            </li>
                            <li className='cursor-pointer duration-500 hover:p-[5px]'>
                                <Link to="https://www.linkedin.com/in/jamuelton-angelim-0b26b41bb/">
                                    <IconBrandLinkedin/>
                                </Link>
                            </li>
                            <li className='cursor-pointer duration-500 hover:p-[5px]'>
                                <Link to="https://github.com/Jamuelton">
                                    <IconBrandGithub/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                
                <div className="flex flex-row justify-center ">
                    <p>@David&Jamu-2K23</p>
                </div> 
        </div>
    )
}