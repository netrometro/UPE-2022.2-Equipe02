import { Buttons } from "../../Atomic/Buttons/Buttons";

export function RequestExercises(){

    const treino = {
        "default":{
            "parte1":[""],
            "dia1":[""],
            "parte2":[""],
            "dia2":[""],
            "parte3":[""],
            "dia3":[""],
            "parte4":[""],
            "dia4":[""],
            "parte5":[""],
            "dia5":[""],
            "parte6":[""],
            "dia6":[""]
        },

        "3":{
            "parte1":["Treino de corpo inteiro"],
            "dia1":["Agachamento com barra: 3 séries de 8-12 repetições - ","Supino com halteres: 3 séries de 8-12 repetições - ","Puxada na barra: 3 séries de 8-12 repetições - ","Rosca bíceps com halteres: 3 séries de 8-12 repetições - ","Extensão de tríceps com halteres: 3 séries de 8-12 repetições - ","Prancha: 3 séries de 30-60 segundos"],
            "parte2":["Treino de membros inferiores e abdominais"],
            "dia2":["Levantamento terra com barra: 3 séries de 8-12 repetições - ","Lunges com halteres: 3 séries de 10-12 repetições em cada perna - ","Cadeira extensora: 3 séries de 8-12 repetições - ","Abdominais: 3 séries de 12-15 repetições"],
            "parte3":["Treino de membros superiores e abdominais"],
            "dia3":["Flexão de braço: 3 séries de 8-12 repetições - ","Remada com halteres: 3 séries de 8-12 repetições - ","Elevação lateral com halteres: 3 séries de 8-12 repetições - ","Rosca martelo com halteres: 3 séries de 8-12 repetições - ","Tríceps testa com halteres: 3 séries de 8-12 repetições - ","Prancha lateral: 3 séries de 30-60 segundos em cada lado"],
            "parte4":[""],
            "dia4":["Descanso"],
            "parte5":[""],
            "dia5":["Descanso"],
            "parte6":[""],
            "dia6":["Descanso"]
        },

        "4":{
            "parte1":["Treino de peito e tríceps"],
            "dia1":["Supino reto com barra: 3-4 séries de 8-12 repetições - ","Supino inclinado com halteres: 3-4 séries de 8-12 repetições - ","Crucifixo com halteres: 3-4 séries de 8-12 repetições - ","Extensão de tríceps com halteres: 3-4 séries de 8-12 repetições"],
            "parte2":["Treino de costas e bíceps"],
            "dia2":["Puxada na barra: 3-4 séries de 8-12 repetições - ","Remada com halteres: 3-4 séries de 8-12 repetições - ","Pull-ups ou chin-ups: 3-4 séries de 6-10 repetições - ","Rosca bíceps com halteres: 3-4 séries de 8-12 repetições"],
            "parte3":["Treino de pernas"],
            "dia3":["Agachamento com barra: 3-4 séries de 8-12 repetições - ","Cadeira extensora: 3-4 séries de 8-12 repetições - ","Cadeira flexora: 3-4 séries de 8-12 repetições - ","Panturrilha em pé: 3-4 séries de 12-15 repetições"],
            "parte4":["Treino de ombros e abdominais"],
            "dia4":["Press militar com barra: 3-4 séries de 8-12 repetições - ","Elevação lateral com halteres: 3-4 séries de 8-12 repetições - ","Desenvolvimento frontal com halteres: 3-4 séries de 8-12 repetições - ","Abdominais: 3-4 séries de 12-15 repetições"],
            "parte5":[""],
            "dia5":["Descanso"],
            "parte6":[""],
            "dia6":["Descanso"]
        },
    }

    return(
        <div>
            <div className="flex flex-col items-center justify-center pt-[20px]" >
                <p className="text-2xl font-bold text-[#8854d0]">Solicitar Treino</p>
                <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">

                    <p className="my-[20px]">Selecione o fator atividade desejado</p>

                    <p className="my-[20px]">O seu fator atividade atual é:</p>

                    <div className="my-[20px]">
                            <select name="" id="" onChange="" className="mr-[20px]">
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>

                            <Buttons  type="submit" name="Solicitar" func="" />    
                    </div>

                    <div className=" w-[1300px] h-max p-[50px]  rounded-[12px] my-[30px] ">
                        <div className="">
                            <p className="text-2xl font-bold text-[#8854d0]">Treino</p>  
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px] font-bold">Dia 1</p>
                            <p className="my-[10px] font-bold"></p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px] font-bold">Dia 2</p>
                            <p className="my-[10px] font-bold"></p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px] font-bold">Dia 3</p>
                            <p className="my-[10px] font-bold"></p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px] font-bold">Dia 4</p>
                            <p className="my-[10px] font-bold"></p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px] font-bold">Dia 5</p>
                            <p className="my-[10px] font-bold"></p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px] font-bold">Dia 6</p>
                            <p className="my-[10px] font-bold"></p>
                            <p></p>
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            
                            <p className="my-[10px] font-bold">
                                aviso
                            </p>
                            
                        </div>

                        <div>
                            <Buttons name="Gerar PDF" func=""></Buttons>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}