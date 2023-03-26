import { prisma } from "../services/prisma.js";

export const create_exer_sabado = async(data) =>{
    const exer_sabado = await prisma.exerSabado.create({
        data
    })
    return exer_sabado
}

//listar todas as colunas

export const getAll = async() =>{
    const sabado = await prisma.exerSabado.findMany({})
    return sabado
}

//listar pelo id

export const getById = async(id) =>{
    const sabado = await prisma.exerSabado.findUnique({
        where:{
            id
        }
    })
    return sabado
}

export const getFromUser = async(id_conta) =>{
    const sabado = await prisma.exerSabado.findMany({
        where:{
            id_conta
        }
    })
    return sabado
}



//atualizar tabela
export const updateSabado = async(id, data) => {
    const sabado =  await prisma.exerSabado.update({
        where:{
            id
        },
        data
    })
    return sabado
}

//deletar da tabela

export const deleteSabado = async(id) => {
    await prisma.exerSabado.delete({
        where:{
            id
        }
    })
    return
}

//deletar tudo
export const deleteTudo = async(id_conta) => {
    await prisma.exerSabado.deleteMany({
        where:{
            id_conta
        }
    })
    return deleteTudo
}