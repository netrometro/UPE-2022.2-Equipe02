import { prisma } from "../services/prisma";

//inserir na tabela

export const create_perfil = async(data) =>{
    const perfil = await prisma.perfil.create({
        data
    })
    return perfil
}

//listar todas as colunas

export const getAll = async() =>{
    const perfils = await prisma.perfil.findMany({})
    return perfils
}