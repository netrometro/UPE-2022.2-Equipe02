const { application } = require("express")
const{login} = require ("../controller/autenticacao.controller")

exports.autenticacaoRoutes = app => {
    app.post("/login", login)
}