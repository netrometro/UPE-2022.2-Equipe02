import { prisma } from "../services/prisma.js";

export const create_exer_terca = async(data) =>{
    const exer_terca = await prisma.exerTerca.create({
        data
    })
    return exer_terca
}

//listar todas as colunas

export const getAll = async() =>{
    const terca = await prisma.exerTerca.findMany({})
    return terca
}

//listar pelo id

export const getById = async(id) =>{
    const terca = await prisma.exerTerca.findUnique({
        where:{
            id
        }
    })
    return terca
}


export const getFromUser = async(id_conta) =>{
    const terca = await prisma.exerTerca.findMany({
        where:{
            id_conta
        }
    })
    return terca
}




//atualizar tabela
export const updateTerca = async(id, data) => {
    const terca =  await prisma.exerTerca.update({
        where:{
            id
        },
        data
    })
    return terca
}

//deletar da tabela

export const deleteTerca = async(id) => {
    await prisma.exerTerca.delete({
        where:{
            id
        }
    })
    return
}

//deletar tudo
export const deleteTudo = async(id_conta) => {
    await prisma.exerTerca.deleteMany({
        where:{
            id_conta
        }
    })
    return deleteTudo
}

