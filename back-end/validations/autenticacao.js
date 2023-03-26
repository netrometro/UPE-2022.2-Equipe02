import z  from "zod"

const autenticacaoValidation = z.object({
    email: z.string().email(),
    senha: z.string(),
})

export default autenticacaoValidation
//verificar login