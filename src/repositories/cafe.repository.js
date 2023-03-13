import { prisma } from "../services/prisma";

export const create_cafe = async(data) =>{
    const cafe = await prisma.cafe.create({
        data
    })
    return cafe
}

//listar todas as colunas

export const getAll = async() =>{
    const cafe = await prisma.cafe.findMany({})
    return cafe
}

//listar pelo id

/* export const getById = async(id) =>{
    const cafe = await prisma.cafe.findUnique({
        where:{
            id
        }
    })
    return cafe
} */

export const getFromUser = async(id_conta) =>{
    const cafe = await prisma.cafe.findMany({
        where:{
            id_conta
        }
    })
    return cafe
}

//atualizar tabela
export const updateCafe = async(id, data) => {
    const cafe =  await prisma.cafe.update({
        where:{
            id
        },
        data
    })
    return cafe
}

//deletar da tabela

export const deleteCafe = async(id) => {
    await prisma.cafe.delete({
        where:{
            id
        }
    })
    return
}

export const deleteTudo = async(id_conta) => {
    await prisma.cafe.deleteMany({
        where:{
            id_conta
        }
    })
    return deleteTudo
}