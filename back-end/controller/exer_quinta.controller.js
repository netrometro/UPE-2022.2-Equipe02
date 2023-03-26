import { create_exer_quinta, getAll, getById,updateQuinta, deleteQuinta, getFromUser, deleteTudo } from "../repositories/exer_quinta.repository.js"

export const create = async(req,res)=>{
    try {
        const quinta = await create_exer_quinta(req.body)
        res.status(200).send(quinta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const quinta = await getAll()
        res.status(200).send(quinta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getId = async(req,res) => {
    try {
        const quinta = await getById(Number(req.params.id))
        res.status(200).send(quinta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const quinta = await updateQuinta(Number(req.params.id),req.body)
        res.status(200).send(quinta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteQuinta(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
    
}

export const getByUser = async(req,res) =>{
    try {
        const quinta = await getFromUser(Number(req.params.id_conta))
        res.status(200).send(quinta)
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