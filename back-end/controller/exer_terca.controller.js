import { create_exer_terca, getAll, getById,updateTerca, deleteTerca, getFromUser, deleteTudo } from "../repositories/exer_terca.repository.js"

export const create = async(req,res)=>{
    try {
        const terca = await create_exer_terca(req.body)
        res.status(200).send(terca)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const terca = await getAll()
        res.status(200).send(terca)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getId = async(req,res) => {
    try {
        const terca = await getById(Number(req.params.id))
        res.status(200).send(terca)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const terca = await updateTerca(Number(req.params.id),req.body)
        res.status(200).send(terca)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteTerca(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
    
}

export const getByUser = async(req,res) =>{
    try {
        const terca = await getFromUser(Number(req.params.id_conta))
        res.status(200).send(terca)
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