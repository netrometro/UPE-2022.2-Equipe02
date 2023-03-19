import {create, get,getId, update, remove, getByUser, deleteAll} from '../controllers/exer_segunda.controller'

const rotas_exer_segunda = app =>{
    //inserir informação
    app.post("/segunda", create)
    //listar
    app.get("/segunda/:id_conta", getByUser)
    //deletar
    app.delete("/segunda/:id", remove)
    app.delete("/segunda-delete/:id_conta", deleteAll)
}

export default rotas_exer_segunda