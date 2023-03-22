import { Link } from "react-router-dom";
import { Inputs } from "../../Atomic/Input/Inputs";
import { BackButtons } from "../../Atomic/Buttons/BackButtons";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import response from "react"


export function SingAreas({title,subTitle,but1,but2}){
    //consumo API incio
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleUserNameChange = (event) => setUserName(event.target.value);
  const handleUserEmailChange = (event) => setUserEmail(event.target.value);
  const handleUserPasswordChange = (event) => setUserPassword(event.target.value);
    function addUser() {
        /* if(userEmail === '' || userEmail === '' || userPassword === ''){
          alert("Preencha todos os campos")
        } */
    
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(userEmail)) {
            let userInfo = {
                nome: userName,
                senha: userPassword,
                email: userEmail,
              };
          
              axios
                .post("http://localhost:3001/conta", userInfo)
                .then(response => {
                  if (response.status === 200) {
                    console.log("usuário cadastrado");
                    alert("Você foi cadastrado")
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
          console.log("Endereço de email correspondo à formatação.");
        } else {
          console.log("Endereço de email inválido.");
          alert("Endereço de email inválido.")
        }
        
      }
    return(
        <div className='col-span-12  h-max  mx-[80px] flex justify-center items-center'>
            <div className="flex flex-col items-center justify-center w-[400px] h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                
                <div className="my-[20px]">
                   <h1 className="text-4xl font-bold text-[#8854d0]">{title}</h1> 
                   <h2 className="text-2xl font-medium flex justify-center mt-[10px]">{subTitle}</h2>
                </div>

                <form action="" method="">
                    <div className="my-[20px]">
                    
                        <label htmlFor="" className="text-[#8854d0]">Informe um usuário:</label>
                        <Inputs type="text" place="Nome:"  name="" id="" func={handleUserNameChange}/>
                    
                    </div>

                    <div className="my-[20px]">
                     
                        <label htmlFor="" className="text-[#8854d0]">Informe um email:</label>
                        <Inputs  type="email" place="Email:" name="" id="" func={handleUserEmailChange}/>
                    
                    </div>

                    <div className="my-[20px]">
                    
                        <label htmlFor="" className="text-[#8854d0]">Informe uma senha:</label>
                        <Inputs type="password" place="Senha:" name="" id="" func={handleUserPasswordChange}/>
                    
                    </div>
                    
                    <div className="flex justify-between w-full "> 
                        <div className="my-[20px]">
                            <Buttons name={but1} id="" func={addUser}/>
                        </div>

                        <div className="my-[20px]">
                            <Link to='/'>
                                <BackButtons name={but2}/>
                            </Link>
                       
                        </div> 
                    </div>
                </form>

            </div>
                
        </div>
    )
}