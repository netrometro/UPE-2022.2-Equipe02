import { prisma } from "../services/prisma.js";

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
export const updatePerfil = async(id_conta, data) => {
    const perfil =  await prisma.perfil.update({
        where:{
            id_conta
        },
        data
    })
    return perfil
}

//deletar da tabela

export const deletePerfil = async(id_conta) => {
    await prisma.perfil.delete({
        where:{
            id_conta
        }
    })
    return
}
export const getFromUser = async(id_conta) =>{
    const perfil = await prisma.perfil.findMany({
        where:{
            id_conta
        }
    })
    return perfil
}