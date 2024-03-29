import { create_exer_sabado, getAll, getById,updateSabado, deleteSabado,getFromUser, deleteTudo } from "../repositories/exer_sabado.repository.js"

export const create = async(req,res)=>{
    try {
        const sabado = await create_exer_sabado(req.body)
        res.status(200).send(sabado)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const sabado = await getAll()
        res.status(200).send(sabado)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getId = async(req,res) => {
    try {
        const sabado = await getById(Number(req.params.id))
        res.status(200).send(sabado)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const sabado = await updateSabado(Number(req.params.id),req.body)
        res.status(200).send(sabado)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteSabado(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
    
}

export const getByUser = async(req,res) =>{
    try {
        const sabado = await getFromUser(Number(req.params.id_conta))
        res.status(200).send(sabado)
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