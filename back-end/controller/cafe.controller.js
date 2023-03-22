import{create_cafe, getAll, getById,updateCafe, deleteCafe, deleteTudo, getFromUser} from '../repositories/cafe.repository'

export const create = async(req,res)=>{
    try {
        const cafe = await create_cafe(req.body)
        res.status(200).send(cafe)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const cafe = await getAll()
        res.status(200).send(cafe)
    } catch (error) {
        res.status(400).send(error)
    }
}

/* export const getId = async(req,res) => {
    try {
        const cafe = await getById(Number(req.params.id))
        res.status(200).send(cafe)
    } catch (error) {
        res.status(400).send(error)
    }
} */

export const getByUser = async(req,res) =>{
    try {
        const cafe = await getFromUser(Number(req.params.id_conta))
        res.status(200).send(cafe)
    } catch (error) {
        res.status(400).send(error)
    }
}


export const update = async(req, res) => {
    try {
        const cafe = await updateCafe(Number(req.params.id),req.body)
        res.status(200).send(cafe)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteCafe(Number(req.params.id))
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