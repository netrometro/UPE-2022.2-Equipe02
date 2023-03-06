import{create_perfil, getAll, getById,updatePerfil, deletePerfil} from '../repositories/perfil.repository'
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