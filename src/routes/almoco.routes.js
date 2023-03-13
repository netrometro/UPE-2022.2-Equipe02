import {create, remove, deleteAll, getByUser} from '../controller/almoco.controller'

const rotas_almoco = app =>{
    //inserir informação
    app.post("/almoco", create)
    //listar
    app.get("/almoco/:id_conta", getByUser)
    //deletar
    app.delete("/almoco/:id", remove)
    app.delete("/almoco-delete/:id_conta", deleteAll)
}

export default rotas_almoco