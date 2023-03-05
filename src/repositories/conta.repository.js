import { prisma } from "../services/prisma";

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