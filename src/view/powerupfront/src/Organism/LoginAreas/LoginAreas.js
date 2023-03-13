
import { Link} from "react-router-dom";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { Inputs } from "../../Atomic/Input/Inputs";
import{useNavigate} from "react-router-dom"

import { useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import response from "react"

export function LoginAreas({title,subTitle,but}){
    const navigate = useNavigate()
    const [userEmail, addUserEmail] = useState("");
    const [userPassword, addUserPassword] = useState("");

    const handleUserEmail = (event) => addUserEmail(event.target.value);
    const handleUserPassword = (event) => addUserPassword(event.target.value);

    function addUser() {

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(userEmail)) {
          let userInfo = {
            senha: userPassword,
            email: userEmail,
          };
          
              axios
                .post("http://localhost:3001/login", userInfo)
                .then(response => {
                  if (response.status === 200) {
                    console.log("usuário logado");
                    const token = {token: response?.data?.token}
                    localStorage.setItem("powerup", JSON.stringify(token))
                    /* console.log(token) */
                    navigate("/Home");
                  }
                })
                .catch((err) => {
                  console.log(err);
                  alert("Usuário não existe")
                });
                console.log("Endereço de email válido.");
              } else {
                console.log("Endereço de email inválido.");
              }
              //Toda vez que um usuário é autenticado, faz-se necessário recarregar a página, para o token antigo sair
      setTimeout(function(){
        // eslint-disable-next-line no-restricted-globals
        location.reload();
        }, 1000); // Recarrega a página após 3 segundos (3000 milissegundos)
            }


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