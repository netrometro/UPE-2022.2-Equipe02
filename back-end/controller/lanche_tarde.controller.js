import{create_lanche_tarde, getAll, getById,updateLanche, deleteLanche, deleteTudo, getFromUser} from '../repositories/lancheTarde.repository'

export const create = async(req,res)=>{
    try {
        const lanche = await create_lanche_tarde(req.body)
        res.status(200).send(lache)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const lanche = await getAll()
        res.status(200).send(lanche)
    } catch (error) {
        res.status(400).send(error)
    }
}

/* export const getId = async(req,res) => {
    try {
        const lanche = await getById(Number(req.params.id))
        res.status(200).send(lanche)
    } catch (error) {
        res.status(400).send(error)
    }
} */

export const getByUser = async(req,res) =>{
    try {
        const lanche = await getFromUser(Number(req.params.id_conta))
        res.status(200).send(lanche)
    } catch (error) {
        res.status(400).send(error)
    }
}



export const update = async(req, res) => {
    try {
        const lanche = await updateLanche(Number(req.params.id),req.body)
        res.status(200).send(lanche)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteLanche(Number(req.params.id))
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