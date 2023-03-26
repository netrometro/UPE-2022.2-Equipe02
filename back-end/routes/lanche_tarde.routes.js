import {create, remove, deleteAll, getByUser} from '../controller/lanche_tarde.controller.js'

const rotas_lanche_tarde = app =>{
    //inserir informação
    app.post("/lanche-da-tarde", create)
    //listar
    app.get("/lanche-da-tarde/:id_conta", getByUser)
    //deletar
    app.delete("/lanche-da-tarde/:id", remove)
    app.delete("/lanche-da-tarde-delete/:id_conta", deleteAll)
    
}

export default rotas_lanche_tarde