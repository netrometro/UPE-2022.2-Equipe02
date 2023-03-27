import {create, update, remove,getByUser} from '../controller/perfil.controller.js'
import veryToken from "../middlewares/autenticacao.js"
const rotas_perfil = app =>{
    //criar
    app.post("/perfil", create)
     //listar tudo
     app.get("/perfil/:id_conta", getByUser)
     //atualizar
     app.put("/perfil/atualizar/:id_conta",update)
    //deletar
    app.delete("/perfil/:id_conta",remove)

}
export default rotas_perfil
