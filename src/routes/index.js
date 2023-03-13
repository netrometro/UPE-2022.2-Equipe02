import rotas_perfil from "./perfil.routes";
import rotas_conta from "./conta.routes";
import { autenticacaoRoutes } from "./autenticacao.routes";
import rotas_jantar from "./jantar.routes";
import rotas_cafe from "./cafe.routes";
import rotas_lache_manha from "./lanche_manha.routes";
import rotas_almoco from "./almoco.routes";
import rotas_lanche_tarde from "./lanche_tarde.routes";

const rotas = app =>{
    rotas_perfil(app)
    rotas_conta(app)
    autenticacaoRoutes(app)
    rotas_jantar(app)
    rotas_cafe(app)
    rotas_lache_manha(app)
    rotas_almoco(app)
    rotas_lanche_tarde(app)
    
}
export default rotas