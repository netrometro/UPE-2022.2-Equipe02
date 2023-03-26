import { prisma } from "../services/prisma.js";

//inserir na tabela

export const create_conta = async(data) =>{
    const conta = await prisma.conta.create({
        data
    })
    return conta
}

//listar todas as colunas

export const getAll = async() =>{
    const contas = await prisma.conta.findMany({})
    return contas
}

//listar pelo id

export const getById = async(id) =>{
    const conta = await prisma.conta.findUnique({
        where:{
            id
        }
    })
    return conta
}

//atualizar tabela
export const updateConta = async(id, data) => {
    const conta =  await prisma.conta.update({
        where:{
            id
        },
        data
    })
    return conta
}

//deletar da tabela

export const deleteConta = async(id) => {
    await prisma.conta.delete({
        where:{
            id
        }
    })
    return
}