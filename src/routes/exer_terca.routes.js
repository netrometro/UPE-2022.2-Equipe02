import {create, get,getId, update, remove, getByUser , deleteAll} from '../controller/exer_terca.controller'

const rotas_exer_terca = app =>{
    //inserir informação
    app.post("/terca", create)
    //listar
    app.get("/terca/:id_conta",getByUser)
    //deletar
    app.delete("/terca/:id", remove)
    app.delete("/terca-delete/:id_conta", deleteAll)
}

export default rotas_exer_terca