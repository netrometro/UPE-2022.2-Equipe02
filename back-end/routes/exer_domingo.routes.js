import {create,get,getId, update, remove, getByUser, deleteAll} from '../controller/exer_domingo.controller.js'

const rotas_exer_domingo = app =>{
    //inserir informação
    app.post("/domingo", create)
    //listar
    app.get("/domingo/:id_conta", getByUser)
    //deletar
    app.delete("/domingo/:id", remove)
    app.delete("/domingo-delete/:id_conta", deleteAll)
}

export default rotas_exer_domingo