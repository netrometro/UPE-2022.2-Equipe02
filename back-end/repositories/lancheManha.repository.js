import { prisma } from "../services/prisma";

export const create_lanche_manha = async(data) =>{
    const lanche_manha = await prisma.lanche_manha.create({
        data
    })
    return lanche_manha
}

//listar todas as colunas

export const getAll = async() =>{
    const lanche = await prisma.lanche_manha.findMany({})
    return lanche
}

//listar pelo id

/* export const getById = async(id) =>{
    const lanche = await prisma.lanche_manha.findUnique({
        where:{
            id
        }
    })
    return lanche
} */


export const getFromUser = async(id_conta) =>{
    const lanche = await prisma.lanche_manha.findMany({
        where:{
            id_conta
        }
    })
    return lanche
}




//atualizar tabela
export const updateLanche = async(id, data) => {
    const lanche =  await prisma.lanche_manha.update({
        where:{
            id
        },
        data
    })
    return lanche
}

//deletar da tabela

export const deleteLanche = async(id) => {
    await prisma.lanche_manha.delete({
        where:{
            id
        }
    })
    return
}

export const deleteTudo = async(id_conta) => {
    await prisma.lanche_manha.deleteMany({
        where:{
            id_conta
        }
    })
    return deleteTudo
}