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

export const getById = async(id) =>{
    const perfil = await prisma.perfil.findUnique({
        where:{
            id
        }
    })
    return perfil
}

//atualizar tabela
export const updatePerfil = async(id, data) => {
    const perfil =  await prisma.perfil.update({
        where:{
            id
        },
        data
    })
    return perfil
}

//deletar da tabela

export const deletePerfil = async(id) => {
    await prisma.perfil.delete({
        where:{
            id
        }
    })
    return
}