import { prisma } from "../services/prisma";

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