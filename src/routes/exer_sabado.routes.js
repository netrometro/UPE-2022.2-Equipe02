import {create,get,getId, update, remove, getByUser, deleteAll} from '../controllers/exer_sabado.controller'

const rotas_exer_sabado = app =>{
    //inserir informação
    app.post("/sabado", create)
    //listar
    app.get("/sabado/:id_conta", getByUser)
    //deletar
    app.delete("/sabado/:id", remove)
    app.delete("/sabado-delete/:id_conta", deleteAll)
    
}

export default rotas_exer_sabado