import {create,get,getId, update, remove, getByUser, deleteAll} from '../controller/exer_quinta.controller'

const rotas_exer_quinta = app =>{
    //inserir informação
    app.post("/quinta", create)
    //listar
    app.get("/quinta/:id_conta", getByUser)
    //deletar
    app.delete("/quinta/:id", remove)
    app.delete("/quinta-delete/:id_conta", deleteAll)
}

export default rotas_exer_quinta