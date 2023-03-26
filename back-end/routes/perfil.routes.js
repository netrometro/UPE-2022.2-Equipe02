import {create,get,getId, update, remove} from '../controller/perfil.controller.js'
import veryToken from "../middlewares/autenticacao.js"
const rotas_perfil = app =>{
    //criar
    app.post("/perfil",veryToken, create)
    //listar
    app.get("/perfil",veryToken, get)
    app.get("/perfil/:id",veryToken, getId)
    //atualizar
    app.put("/perfil/:id",veryToken, update)
    //deletar
    app.delete("/perfil/:id",veryToken, remove)

}
export default rotas_perfil
