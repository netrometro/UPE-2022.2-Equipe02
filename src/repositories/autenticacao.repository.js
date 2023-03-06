import { prisma } from "../services/prisma";

exports.getUser = async (email) => {
    const usuario = await prisma.conta.findUnique({
        where:{
            email,
        }
    })
    return usuario
}