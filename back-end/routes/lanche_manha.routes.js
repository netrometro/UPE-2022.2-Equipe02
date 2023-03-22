import {create, remove, deleteAll, getByUser} from '../controller/lanche_manha.controller'

const rotas_lache_manha = app =>{
    //inserir informação
    app.post("/lanche-da-manha", create)
    //listar
    app.get("/lanche-da-manha/:id_conta", getByUser)
    //deletar
    app.delete("/lanche-da-manha/:id", remove)
    app.delete("/lanche-da-manha-delete/:id_conta",deleteAll)
}

export default rotas_lache_manha