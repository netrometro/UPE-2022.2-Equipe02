import { prisma } from "../services/prisma.js";

export const create_almoco = async(data) =>{
    const almoco = await prisma.almoco.create({
        data
    })
    return almoco
}

//listar todas as colunas

export const getAll = async() =>{
    const almoco = await prisma.almoco.findMany({})
    return almoco
}

//listar pelo id

/* export const getById = async(id) =>{
    const almoco = await prisma.almoco.findUnique({
        where:{
            id
        }
    })
    return almoco
} */

export const getFromUser = async(id_conta) =>{
    const almoco = await prisma.almoco.findMany({
        where:{
            id_conta
        }
    })
    return almoco
}



//atualizar tabela
export const updateAlmoco = async(id, data) => {
    const almoco =  await prisma.almoco.update({
        where:{
            id
        },
        data
    })
    return almoco
}

//deletar da tabela

export const deleteAlmoco = async(id) => {
    await prisma.almoco.delete({
        where:{
            id
        }
    })
    return
}

export const deleteTudo = async(id_conta) => {
    await prisma.almoco.deleteMany({
        where:{
            id_conta
        }
    })
    return deleteTudo
}