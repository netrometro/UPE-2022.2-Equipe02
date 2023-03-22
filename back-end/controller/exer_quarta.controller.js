import { create_exer_quarta, getAll, getById,updateQuarta, deleteQuarta, getFromUser, deleteTudo } from "../repositories/exer_quarta.repository"

export const create = async(req,res)=>{
    try {
        const quarta = await create_exer_quarta(req.body)
        res.status(200).send(quarta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const quarta = await getAll()
        res.status(200).send(quarta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getId = async(req,res) => {
    try {
        const quarta = await getById(Number(req.params.id))
        res.status(200).send(quarta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const quarta = await updateQuarta(Number(req.params.id),req.body)
        res.status(200).send(quarta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteQuarta(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
    
}

export const getByUser = async(req,res) =>{
    try {
        const quarta = await getFromUser(Number(req.params.id_conta))
        res.status(200).send(quarta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const deleteAll = async(req, res) =>{
    try{
        await deleteTudo(Number(req.params.id_conta))
        res.status(200).send("tudo deletado")
    }catch(error){
        console.log(error)
    }
}