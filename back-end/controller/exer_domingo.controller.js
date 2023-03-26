import { create_exer_domingo, getAll, getById,updateDomingo, deleteDomingo, getFromUser, deleteTudo } from "../repositories/exer_domingo.repository.js"

export const create = async(req,res)=>{
    try {
        const domingo = await create_exer_domingo(req.body)
        res.status(200).send(domingo)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const domingo = await getAll()
        res.status(200).send(domingo)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getId = async(req,res) => {
    try {
        const domingo = await getById(Number(req.params.id))
        res.status(200).send(domingo)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const domingo = await updateDomingo(Number(req.params.id),req.body)
        res.status(200).send(domingo)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteDomingo(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
    
}

export const getByUser = async(req,res) =>{
    try {
        const domingo = await getFromUser(Number(req.params.id_conta))
        res.status(200).send(domingo)
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