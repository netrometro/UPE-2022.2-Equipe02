import rotas_perfil from "./perfil.routes";
import rotas_conta from "./conta.routes";
import { autenticacaoRoutes } from "./autenticacao.routes";

const rotas = app => {
    rotas_perfil(app)
    rotas_conta(app)
    autenticacaoRoutes(app)
}