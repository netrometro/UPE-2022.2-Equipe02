import {create,get,getId, update, remove, getByUser, deleteAll} from '../controller/exer_quarta.controller.js'

const rotas_exer_quarta = app =>{
    //inserir informação
    app.post("/quarta", create)
    //listar
    app.get("/quarta/:id_conta", getByUser)
    //deletar
    app.delete("/quarta/:id", remove)
    app.delete("/quarta-delete/:id_conta", deleteAll)
}

export default rotas_exer_quarta