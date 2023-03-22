import {create,remove, deleteAll, getByUser} from '../controller/jantar.controller'

const rotas_jantar = app =>{
    //inserir informação
    app.post("/jantar", create)
    //listar
    app.get("/jantar/:id_conta", getByUser)
    //deletar
    app.delete("/jantar/:id", remove)
    app.delete("/jantar-delete/:id_conta", deleteAll)
}

export default rotas_jantar