import{create_almoco,getAll, getById,updateAlmoco, deleteAlmoco, deleteTudo, getFromUser} from '../repositories/almoco.repository'

export const create = async(req,res)=>{
    try {
        const almoco = await create_almoco(req.body)
        res.status(200).send(almoco)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const almoco = await getAll()
        res.status(200).send(almoco)
    } catch (error) {
        res.status(400).send(error)
    }
}

/* export const getId = async(req,res) => {
    try {
        const almoco = await getById(Number(req.params.id))
        res.status(200).send(almoco)
    } catch (error) {
        res.status(400).send(error)
    }
} */

export const getByUser = async(req,res) =>{
    try {
        const almoco = await getFromUser(Number(req.params.id_conta))
        res.status(200).send(almoco)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const almoco = await updateAlmoco(Number(req.params.id),req.body)
        res.status(200).send(almoco)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteAlmoco(Number(req.params.id))
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