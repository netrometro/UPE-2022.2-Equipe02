import { prisma } from "../services/prisma.js";

export const create_exer_segunda = async(data) =>{
    const exer_segunda = await prisma.exerSegunda.create({
        data
    })
    return exer_segunda
}

//listar todas as colunas

export const getAll = async() =>{
    const segunda = await prisma.exerSegunda.findMany({})
    return segunda
}

//listar pelo id

export const getById = async(id) =>{
    const segunda = await prisma.exerSegunda.findUnique({
        where:{
            id
        }
    })
    return segunda
}


export const getFromUser = async(id_conta) =>{
    const segunda = await prisma.exerSegunda.findMany({
        where:{
            id_conta
        }
    })
    return segunda
}




//atualizar tabela
export const updateSegunda = async(id, data) => {
    const segunda =  await prisma.exerSegunda.update({
        where:{
            id
        },
        data
    })
    return segunda
}

//deletar da tabela

export const deleteSegunda = async(id) => {
    await prisma.exerSegunda.delete({
        where:{
            id
        }
    })
    return
}

//deletar tudo
export const deleteTudo = async(id_conta) => {
    await prisma.exerSegunda.deleteMany({
        where:{
            id_conta
        }
    })
    return deleteTudo
}