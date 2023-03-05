import bcrypt from "bcrypt"
import{create_conta, getAll, getById,updateConta, deleteConta} from '../repositories/conta.repository'
const jwt = require ("jsonwebtoken")


export const create = async(req,res)=>{
    try {
        const hashPassword = await bcrypt.hash(req.body.senha, 10)
        req.body.senha = hashPassword 
        const conta = await create_conta(req.body)
        res.status(200).send(conta)
    } catch (error) {
        res.status(400).send(error)
    }
}