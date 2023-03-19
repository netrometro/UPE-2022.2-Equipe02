import {create,get,getId, update, remove, getByUser, deleteAll} from '../controller/exer_sexta.controller'

const rotas_exer_sexta = app =>{
    //inserir informação
    app.post("/sexta", create)
    //listar
    app.get("/sexta/:id_conta", getByUser)
    //deletar
    app.delete("/sexta/:id", remove)
    app.delete("/sexta-delete/:id_conta", deleteAll)
}

export default rotas_exer_sexta