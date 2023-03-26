
import autenticacaoRoutes from "./autenticacao.routes.js";
import rotas_jantar from "./jantar.routes.js";
import rotas_cafe from "./cafe.routes.js";
import rotas_lache_manha from "./lanche_manha.routes.js";
import rotas_almoco from "./almoco.routes.js";
import rotas_lanche_tarde from "./lanche_tarde.routes.js";
import rotas_exer_segunda from "./exer_segunda.routes.js";
import rotas_exer_terca from "./exer_terca.routes.js";
import rotas_exer_quarta from "./exer_quarta.routes.js";
import rotas_exer_quinta from "./exer_quinta.routes.js";
import rotas_exer_sexta from "./exer_sexta.routes.js";
import rotas_exer_sabado from "./exer_sabado.routes.js";
import rotas_exer_domingo from "./exer_domingo.routes.js";
import rotas_perfil from "./perfil.routes.js";
import rotas_conta from "./conta.routes.js";

const rotas = app =>{
    rotas_perfil(app)
    rotas_conta(app)
    autenticacaoRoutes(app)
    rotas_jantar(app)
    rotas_cafe(app)
    rotas_lache_manha(app)
    rotas_almoco(app)
    rotas_lanche_tarde(app)
    rotas_exer_segunda(app)
    rotas_exer_terca(app)
    rotas_exer_quarta(app)
    rotas_exer_quinta(app)
    rotas_exer_sexta(app)
    rotas_exer_sabado(app)
    rotas_exer_domingo(app)
    
}
export default rotas