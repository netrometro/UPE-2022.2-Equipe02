const { application } = require("express")
const{login} = require ("../controllers/autenticacao.controller")

exports.autenticacaoRoutes = app => {
    app.post("/login", login)
}