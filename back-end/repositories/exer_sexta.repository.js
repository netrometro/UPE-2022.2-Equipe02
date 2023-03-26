import { prisma } from "../services/prisma.js";

export const create_exer_sexta = async(data) =>{
    const exer_sexta = await prisma.exerSexta.create({
        data
    })
    return exer_sexta
}

//listar todas as colunas

export const getAll = async() =>{
    const sexta = await prisma.exerSexta.findMany({})
    return sexta
}

//listar pelo id

export const getById = async(id) =>{
    const sexta = await prisma.exerSexta.findUnique({
        where:{
            id
        }
    })
    return sexta
}


export const getFromUser = async(id_conta) =>{
    const sexta = await prisma.exerSexta.findMany({
        where:{
            id_conta
        }
    })
    return sexta
}



//atualizar tabela
export const updateSexta = async(id, data) => {
    const sexta =  await prisma.exerSexta.update({
        where:{
            id
        },
        data
    })
    return sexta
}

//deletar da tabela

export const deleteSexta = async(id) => {
    await prisma.exerSexta.delete({
        where:{
            id
        }
    })
    return
}

//deletar tudo
export const deleteTudo = async(id_conta) => {
    await prisma.exerSexta.deleteMany({
        where:{
            id_conta
        }
    })
    return deleteTudo
}