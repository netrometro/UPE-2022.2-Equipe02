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