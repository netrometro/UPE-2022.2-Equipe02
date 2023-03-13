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

//listar pelo id

/* export const getById = async(id) =>{
    const lanche = await prisma.lanche_tarde.findUnique({
        where:{
            id
        }
    })
    return lanche
} */

//atualizar tabela
export const updateLanche = async(id, data) => {
    const lanche =  await prisma.lanche_tarde.update({
        where:{
            id
        },
        data
    })
    return lanche
}

//deletar da tabela

export const deleteLanche = async(id) => {
    await prisma.lanche_tarde.delete({
        where:{
            id
        }
    })
    return
}

export const deleteTudo = async(id_conta) => {
    await prisma.lanche_tarde.deleteMany({
        where:{
            id_conta
        }
    })
    return deleteTudo
}