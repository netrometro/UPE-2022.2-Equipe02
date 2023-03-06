const {getUser} =  require("../repositories/autenticacao.repository")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {autenticacaoValidation} = require("../validations/autenticacao")


exports.login = async (req, res) => {
    try {
        const data = await autenticacaoValidation.parse(req.body)
        const usuario = await getUser(data.email)

        if(!usuario) throw {message: "Usuário não existe"}

        if(usuario && bcrypt.compareSync(req.body.senha, usuario.senha)){
            const token = jwt.sign(
            {
                id: usuario.id,
                email: usuario.email,
                nome: usuario.nome
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: "24h",
            }
            )
            return res.status(200).send({token})
        }{
            return res.status(401).send({message: "Usuário e/o senha incorretos"})
        }

    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
}
