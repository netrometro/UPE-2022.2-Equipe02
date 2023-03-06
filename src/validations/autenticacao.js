const {z} = require("zod")

exports.autenticacaoValidation = z.object({
    email: z.string().email(),
    senha: z.string(),
})