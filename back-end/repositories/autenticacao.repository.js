import { getRounds } from "bcrypt";
import { prisma } from "../services/prisma.js";

const getUser = async (email) => {
    const usuario = await prisma.conta.findUnique({
        where:{
            email,
        }
    })
    return usuario
}
export default getUser