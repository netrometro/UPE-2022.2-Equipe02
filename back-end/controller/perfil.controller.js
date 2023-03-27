import{create_perfil, getAll, getById,updatePerfil, deletePerfil, getFromUser} from '../repositories/perfil.repository.js'
//

export const create = async(req,res)=>{
    try {
       /*  const hashPassword = await bcrypt.hash(req.body.senha, 10)
        req.body.senha = hashPassword */
        const perfil = await create_perfil(req.body)
        res.status(200).send(perfil)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const perfil = await getAll()
        res.status(200).send(perfil)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getId = async(req,res) => {
    try {
        const perfil = await getById(Number(req.params.id))
        res.status(200).send(perfil)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const perfil = await updatePerfil(Number(req.params.id_conta),req.body)
        res.status(200).send(perfil)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deletePerfil(Number(req.params.id_conta))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
    
}

export const getByUser = async(req,res) =>{
    try {
        const perfil = await getFromUser(Number(req.params.id_conta))
        res.status(200).send(perfil)
    } catch (error) {
        res.status(400).send(error)
    }
}