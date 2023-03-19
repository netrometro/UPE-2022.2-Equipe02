import { prisma } from "../services/prisma";

export const create_exer_domingo = async(data) =>{
    const exer_domingo = await prisma.exerDomingo.create({
        data
    })
    return exer_domingo
}

//listar todas as colunas

export const getAll = async() =>{
    const domingo = await prisma.exerDomingo.findMany({})
    return domingo
}

//listar pelo id

export const getById = async(id) =>{
    const domingo = await prisma.exerDomingo.findUnique({
        where:{
            id
        }
    })
    return domingo
}

export const getFromUser = async(id_conta) =>{
    const domingo = await prisma.exerDomingo.findMany({
        where:{
            id_conta
        }
    })
    return domingo
}



//atualizar tabela
export const updateDomingo = async(id, data) => {
    const domingo =  await prisma.exerDomingo.update({
        where:{
            id
        },
        data
    })
    return domingo
}

//deletar da tabela

export const deleteDomingo = async(id) => {
    await prisma.exerDomingo.delete({
        where:{
            id
        }
    })
    return
}

//deletar tudo
export const deleteTudo = async(id_conta) => {
    await prisma.exerDomingo.deleteMany({
        where:{
            id_conta
        }
    })
    return deleteTudo
}