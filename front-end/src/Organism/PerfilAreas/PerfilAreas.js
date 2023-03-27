import { Link } from "react-router-dom";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { Inputs } from "../../Atomic/Input/Inputs";
import { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import response from "react";
import Barchart from "./Grafict";
import Grafict from "./Grafict";
const { userId } = require("../../getUser/getId");

export function PerfilAreas() {
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [genero, setGenero] = useState("");
  const [fator, setFator] = useState("");

  const handleIdadeChange = (e) => setIdade(e.target.value);
  const handlePesoChange = (e) => setPeso(e.target.value);
  const handleAlturaChange = (e) => setAltura(e.target.value);
  const handleGeneroChange = (e) => setGenero(e.target.value);
  const handleFatorChange = (e) => setFator(e.target.value);
  const [perfil, setPerfil] = useState([]);

  const pesoData = perfil.map((peso) => peso.peso);

  function deletePerfil() {
    const token = JSON.parse(localStorage.getItem("powerup")).token; // obter token do localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`http://localhost:3001/perfil/${userId}`, config)
      .then((response) => {
        if (response.status === 200) {
          console.log("deletado");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  function updatePerfil(e) {
    e.preventDefault();

    let perfilInfo = {
      idade: idade,
      peso: peso,
      altura: altura,
      genero: genero,
      fatorAtividade: fator,
      id_conta: userId,
    };

    const token = JSON.parse(localStorage.getItem("powerup")).token; // obter token do localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .put(
        `http://localhost:3001/perfil/atualizar/${userId}`,
        perfilInfo,
        config
      )
      .then((response) => {
        if (response.status === 200) {
          console.log("atualizado");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  function addPerfil(e) {
    e.preventDefault();

    let perfilInfo = {
      idade: idade,
      peso: peso,
      altura: altura,
      genero: genero,
      fatorAtividade: fator,
      id_conta: userId,
    };
    const token = JSON.parse(localStorage.getItem("powerup")).token; // obter token do localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://localhost:3001/perfil", perfilInfo, config)
      .then((response) => {
        if (response.status === 200) {
          console.log("cadastrado");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("powerup")).token; // obter token do localStorage
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.get(`http://localhost:3001/perfil/${userId}`, config)
      .then((response) => {
        setPerfil(response.data);

        // eslint-disable-next-line eqeqeq
        if(response.data == ""){
            //desabilitar o botão de atualizar e deletar
            var botaoAtualiza = document.getElementById("btn2")
            botaoAtualiza.disabled = true
            botaoAtualiza.style.backgroundColor = "#F5F5F5";
            botaoAtualiza.style.borderColor = "#C4C4C4";
            botaoAtualiza.style.color = "#C4C4C4";

            var botaoDelete = document.getElementById("btn3")
            botaoDelete.disabled = true
            botaoDelete.style.backgroundColor = "#F5F5F5";
            botaoDelete.style.borderColor = "#C4C4C4";
            botaoDelete.style.color = "#C4C4C4";

        }else{
            var botaoCadastro =  document.getElementById("btn");
            botaoCadastro.disabled = true;
            botaoCadastro.style.backgroundColor = "#F5F5F5";
            botaoCadastro.style.borderColor = "#C4C4C4";
            botaoCadastro.style.color = "#C4C4C4";
            
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Você não tem acesso. Faça login")
      });
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6  h-max  mx-[80px] flex justify-start items-center">
        <div className="flex flex-col items-center justify-center w-[400px] h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
          <div className="my-[20px]">
            <h1 className="text-4xl font-bold text-[#8854d0]">PowerUp</h1>
            <h2 className="text-2xl font-medium flex justify-center mt-[10px]">
              Perfil
            </h2>
          </div>

          <div className="my-[20px]">
            <form action="" method="">
              <label htmlFor="" className="text-[#8854d0]">
                Idade:
              </label>
              <Inputs
                type="text"
                place="Idade:"
                name=""
                id=""
                func={handleIdadeChange}
              />
            </form>
          </div>

          <div className="my-[20px]">
            <form action="" method="">
              <label htmlFor="" className="text-[#8854d0]">
                Peso:
              </label>
              <Inputs
                type="text"
                place="Peso:"
                name=""
                id=""
                func={handlePesoChange}
              />
            </form>
          </div>

          <div className="my-[20px]">
            <form action="" method="">
              <label htmlFor="" className="text-[#8854d0]">
                Altura:
              </label>
              <Inputs
                type="text"
                place="Altura:"
                name=""
                id=""
                func={handleAlturaChange}
              />
            </form>
          </div>

          <div className="my-[20px]">
            <form action="" method="">
              <label htmlFor="" className="text-[#8854d0]">
                Gênero:
              </label>
              <Inputs
                type="text"
                place="Gênero:"
                name=""
                id=""
                func={handleGeneroChange}
              />
            </form>
          </div>

          <div className="my-[20px]">
            <form action="" method="">
              <label htmlFor="" className="text-[#8854d0]">
                Fator atividade:
              </label>
              <Inputs
                type="text"
                place="Atividade:"
                name=""
                id=""
                func={handleFatorChange}
              />
            </form>
          </div>

          <div
            className="my-[20px]"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div id="teste" className="mr-4">
              <Link to="/graficoPerfil">
                <Buttons name="Cadastrar" id="btn" func={addPerfil} />
              </Link>
            </div>
            <div className="mr-4">
              <Link to="/graficoPerfil">
                <Buttons name="Atualizar" id="btn2" func={updatePerfil} />
              </Link>
            </div>
            <div className="mr-4">
              <Buttons name="Deletar" id="btn3" func={deletePerfil} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <div className="w-[600px] h-max p-[50px] shadow-2xl rounded-[12px] my-[30px]">
          <p className="p-[5px] m-[10px]">Gráficos</p>
          <p className="p-[5px] m-[10px]">Histórico de peso</p>
          <Barchart />
        </div>

        <div className="w-[600px] h-max p-[50px] shadow-2xl rounded-[12px] my-[30px]">
          <h1>Dados-histórico</h1>
          {perfil.map((user, key) => {
            return (
              <>
                <div className="my-[20px] shadow-inner">
                  <p className="p-[5px] m-[10px]">Idade:{user.idade}</p>
                  <p className="p-[5px] m-[10px]">Peso:{user.peso}</p>
                  <p className="p-[5px] m-[10px]">Altura:{user.altura}</p>
                  <p className="p-[5px] m-[10px]">
                    Fator:{user.fatorAtividade}
                  </p>
                </div>
                <hr></hr>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
