
import login from "../controller/autenticacao.controller.js";

const autenticacaoRoutes = app => {
    app.post("/login", login)
} 
export default autenticacaoRoutes