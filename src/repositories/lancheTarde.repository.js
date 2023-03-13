import { prisma } from "../services/prisma";

export const create_lanche_tarde = async(data) =>{
    const lanche_tarde = await prisma.lanche_tarde.create({
        data
    })
    return lanche_tarde
}

//listar todas as colunas

export const getAll = async() =>{
    const lanche = await prisma.lanche_tarde.findMany({})
    return lanche
}


export const getFromUser = async(id_conta) =>{
    const lanche = await prisma.lanche_tarde.findMany({
        where:{
            id_conta
        }
    })
    return lanche
}

