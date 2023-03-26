import { prisma } from "../services/prisma.js";

export const create_jantar = async(data) =>{
    const jantar = await prisma.jantar.create({
        data
    })
    return jantar
}

//listar todas as colunas

export const getAll = async() =>{
    const jantar = await prisma.jantar.findMany({})
    return jantar
}

//listar pelo id

/* export const getById = async(id) =>{
    const jantar = await prisma.jantar.findUnique({
        where:{
            id
        }
    })
    return jantar
} */


export const getFromUser = async(id_conta) =>{
    const jantar = await prisma.jantar.findMany({
        where:{
            id_conta
        }
    })
    return jantar
}

//atualizar tabela
export const updateJantar = async(id, data) => {
    const jantar =  await prisma.jantar.update({
        where:{
            id
        },
        data
    })
    return jantar
}

//deletar da tabela

export const deleteJantar = async(id) => {
    await prisma.jantar.delete({
        where:{
            id
        }
    })
    return
}

export const deleteTudo = async(id_conta) => {
    await prisma.jantar.deleteMany({
        where:{
            id_conta
        }
    })
    return deleteTudo
}