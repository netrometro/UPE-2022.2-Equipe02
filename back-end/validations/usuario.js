import * as yup from "yup"

export const userValidation =  yup.object({
    nome: yup.string().required(),
    email: yup.string().required(),
    senha: yup.string().required(),
})