import bcrypt from "bcrypt"
import{create_conta, getAll, getById,updateConta, deleteConta} from '../repositories/conta.repository.js'
import jwt from "jsonwebtoken"


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

export const get = async (req,res) =>{
    try {

        const token = req.headers.authorization
        const replace = token.replace("Bearer ", "")
        const decoded = jwt.verify(replace, process.env.TOKEN_KEY)
        const userId = decoded.id;
        const userEmail = decoded.email;

        const conta = await getAll()
        const reponse = {conta, userId, userEmail}

        res.status(200).send(reponse)
        
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getId = async(req,res) => {
    try {
        const conta = await getById(Number(req.params.id))
        res.status(200).send(conta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const conta = await updateConta(Number(req.params.id),req.body)
        res.status(200).send(conta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteConta(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
    
}