import{create_jantar, getAll,updateJantar, deleteJantar, deleteTudo, getFromUser} from '../repositories/jantar.repository.js'

export const create = async(req,res)=>{
    try {
        const jantar = await create_jantar(req.body)
        res.status(200).send(jantar)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const jantar = await getAll()
        res.status(200).send(jantar)
    } catch (error) {
        res.status(400).send(error)
    }
}

/* export const getId = async(req,res) => {
    try {
        const jantar = await getById(Number(req.params.id))
        res.status(200).send(jantar)
    } catch (error) {
        res.status(400).send(error)
    }
} */

export const getByUser = async(req,res) =>{
    try {
        const jantar = await getFromUser(Number(req.params.id_conta))
        res.status(200).send(jantar)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const jantar = await updateJantar(Number(req.params.id),req.body)
        res.status(200).send(jantar)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteJantar(Number(req.params.id))
        res.status(200).send()
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