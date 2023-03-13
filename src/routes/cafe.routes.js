import {create, remove, deleteAll, getByUser} from '../controller/cafe.controller'

const rotas_cafe = app =>{

    //inserir informação
    app.post("/cafe", create)
    //listar
    app.get("/cafe/:id_conta", getByUser)
    //deletar
    app.delete("/cafe/:id", remove)
    app.delete("/cafe-delete/:id_conta", deleteAll)
}

export default rotas_cafe