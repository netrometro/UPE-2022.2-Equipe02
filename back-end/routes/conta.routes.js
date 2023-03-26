import {create,get,getId, update, remove} from '../controller/conta.controller.js'
import veryToken from "../middlewares/autenticacao.js"

const rotas_conta = app =>{
    //criar
    app.post("/conta", create)
    //listar
    app.get("/conta",veryToken, get)
    app.get("/conta/:id",veryToken, getId)
    //atualizar
    app.put("/conta/:id", update)
    //deletar
    app.delete("/conta/:id",remove)

}
export default rotas_conta