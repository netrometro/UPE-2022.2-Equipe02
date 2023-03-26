import axios, { isCancel, AxiosError } from "axios";
import response from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
const{userId} = require("../../getUser/getId")


export function ImcAreas({ title, subTitle }) {
    const [infoPerfil, getInfoPerfil] = useState([])
    

    useEffect(() => {
      axios.get(`http://localhost:3001/perfil/${userId}`)
      .then((response) => {
          getInfoPerfil(response.data)
      })
      .catch(() =>{
          console.log("deu tudo errado")
      })

  },[])
    return(
         <div className="col-span-12  h-max  mx-[80px] flex justify-center items-center">
      <div className="flex flex-col  w-[600px] h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
        <div className="my-[20px]">
          <h1 className="text-4xl font-bold text-[#8854d0] flex justify-center mt-[10px]">
            {title}
          </h1>
          <h2 className="text-2xl font-medium flex justify-center mt-[10px]">
            {subTitle}
          </h2>
        </div>

        <div className="my-[20px] ">
          <form action="" method="">
            <label htmlFor="" className="text-[#8854d0]">
            Altura: <span className="text-[black]">{infoPerfil.map((infoPerfil,key) => {
                  return(
                      infoPerfil.altura/100 + "m"
                  )
              })}</span>
            </label>
          </form>
        </div>

        <div className="my-[20px]">
          <form action="" method="">
            <label htmlFor="" className="text-[#8854d0]">
            Peso: <span className="text-[black]">{infoPerfil.map((infoPerfil,key) => {
                  return(
                      infoPerfil.peso +"kg"
                  )
              })}</span>
            </label>
          </form>
        </div>
        <div className="my-[20px]">
          <form action="" method="">
            <label htmlFor="" className="text-[#8854d0]">
              Seu IMC: <span className="text-[black]">{infoPerfil.map((infoPerfil,key) => {
                const peso = infoPerfil.peso;
                const altura = infoPerfil.altura/100;
                const alturaQuadrado = Math.pow(altura,2)
                const imc = peso/alturaQuadrado
                  return(
                    parseFloat(imc.toFixed(2))
                  )
              })}</span>
            </label>
          </form>
        </div>

        <div className="my-[20px]">
          <form action="" method="">
            <label htmlFor="" className="text-[#8854d0]">
              Diagnóstico: <span className="text-[black]">{infoPerfil.map((infoPerfil,key) => {
                const peso = infoPerfil.peso;
                const altura = infoPerfil.altura/100;
                const alturaQuadrado = Math.pow(altura,2)
                const imc = peso/alturaQuadrado

                if(imc < 18.5){
                  const imc = document.getElementById("1")
                  const categoria = document.getElementById("2")
                  const grau = document.getElementById("3")
                  imc.style.backgroundColor = "#Cec2dc"
                  categoria.style.backgroundColor = "#Cec2dc"
                  grau.style.backgroundColor = "#Cec2dc"
          
                } else if(imc > 18.5 && imc < 24.49){
                  const imc = document.getElementById("4")
                  const categoria = document.getElementById("5")
                  const grau = document.getElementById("6")
                  imc.style.backgroundColor = "#Cec2dc"
                  categoria.style.backgroundColor = "#Cec2dc"
                  grau.style.backgroundColor = "#Cec2dc"
      
                } else if(imc > 25 && imc < 29.9){
                  const imc = document.getElementById("7")
                  const categoria = document.getElementById("8")
                  const grau = document.getElementById("9")
                  imc.style.backgroundColor = "#Cec2dc"
                  categoria.style.backgroundColor = "#Cec2dc"
                  grau.style.backgroundColor = "#Cec2dc"
          
                } else if(imc > 30 && imc < 39.9){
                  const imc = document.getElementById("10")
                  const categoria = document.getElementById("11")
                  const grau = document.getElementById("12")
                  imc.style.backgroundColor = "#Cec2dc"
                  categoria.style.backgroundColor = "#Cec2dc"
                  grau.style.backgroundColor = "#Cec2dc"

                } else if(imc > 40){
                  const imc = document.getElementById("13")
                  const categoria = document.getElementById("14")
                  const grau = document.getElementById("15")
                  imc.style.backgroundColor = "#Cec2dc"
                  categoria.style.backgroundColor = "#Cec2dc"
                  grau.style.backgroundColor = "#Cec2dc"
            
                }
                 
              })}</span>
            </label>
          </form>
        </div>
        <table className="table-calc" cellSpacing="0">
          <thead>
            <tr></tr>
            <tr>
              <td colSpan="3">
                <hr />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="table-calc-blue">
              <td
                className="text-[black]"
                style={{ backgroundColor: "#8854D0" }}
              >
                IMC
              </td>
              <td
                className="text-[black]"
                style={{ backgroundColor: "#8854D0" }}
              >
                Classificação
              </td>
              <td
                className="text-[black]"
                style={{ textAlign: "center", backgroundColor: "#8854D0" }}
              >
                Obesidade <small>(grau)</small>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr />
              </td>
            </tr>
            <tr id="result_calc_0">
              <td id="1">Menor que 18,5</td>
              <td id="2">Magreza</td>
              <td id="3" style={{ textAlign: "center" }}>0</td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr />
              </td>
            </tr>
            <tr id="result_calc_1">
              <td id="4">Entre 18,5 e 24,9</td>
              <td id="5">Normal</td>
              <td id="6" style={{ textAlign: "center" }}>0</td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr />
              </td>
            </tr>
            <tr id="result_calc_2">
              <td id="7">Entre 25,0 e 29,9</td>
              <td id="8">Sobrepeso</td>
              <td id="9" style={{ textAlign: "center" }}>I</td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr />
              </td>
            </tr>
            <tr id="result_calc_3">
              <td id="10">Entre 30,0 e 39,9</td>
              <td id="11">Obesidade</td>
              <td id="12" style={{ textAlign: "center" }}>II</td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr />
              </td>
            </tr>
            <tr id="result_calc_4">
              <td id="13">Maior que 40,0</td>
              <td id="14">Obesidade Grave</td>
              <td id="15" style={{ textAlign: "center" }}>III</td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="ml-[120px] text-sm font-thin text-[#45aaf2] underline"></div>

        <div className="my-[20px]"></div>
      </div>
    </div>
    )
}