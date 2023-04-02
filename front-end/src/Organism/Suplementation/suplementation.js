import "../../App.css"
import{useState}from 'react'


export function Suplementation() {
    const [ selected, setSelected] = useState(null)

    const toggle = (i) => {
        if( selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }
  
    return (
    
            <div className="wrapper">
            <div className="accordion">
                {data.map((item, i)=>(
                    <div className="item">
                        <div className="title" onClick={()=> toggle(i)}>
                            <h2>
                                {item.question}
                            </h2>
                                <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>

)
      
    
}

const data = [
{
    question: "Emagrecimento",
    answer: <div>
        <span className="nomeSuplementos">Whey Protein:</span>
        <span> Ajuda a aumentar a massa muscular magra, o que pode levar a um aumento no metabolismo e, eventualmente, à perda de gordura</span><br></br>
        <span className="nomeSuplementos">Termogênicos:</span>
        <span> Os termogênicos são suplementos que contêm ingredientes que aumentam a temperatura corporal e o metabolismo. Eles podem ajudar a queimar calorias adicionais e aumentar a energia durante os treinos. Algumas opções populares incluem cafeína, chá verde, guaraná, sinefrina, entre outros.</span><br></br>
        <span className="nomeSuplementos">Cafeína e Yohimbina:</span>
        <span> São suplementos que geralmente contêm uma mistura de ingredientes para ajudar a queimar gordura e aumentar a energia. Possuem ingredientes que ajudam a suprimir o apetite e aumentar a saciedade.</span>
    </div>,
  

},
{
    question: "Ganho de Massa",
    answer:<div>
        <span className="nomeSuplementos">Whey Protein:</span>
        <span> Ajuda a aumentar a massa muscular magra, o que pode levar a um aumento no metabolismo e, eventualmente, à perda de gordura</span><br></br>
        <span className="nomeSuplementos">Creatina:</span>
        <span> A creatina é um composto natural encontrado no músculo e é conhecida por aumentar a força e o desempenho durante o treinamento de força. Ela também pode aumentar o volume muscular e a retenção de líquidos dentro das células musculares.</span><br></br>
        <span className="nomeSuplementos">BCAA:</span>
        <span>  Os aminoácidos de cadeia ramificada (BCAAs) são compostos essenciais para a construção muscular e recuperação após o treino. Eles são particularmente importantes durante exercícios prolongados e intensos, pois ajudam a prevenir a quebra muscular.</span><br></br>
        <span className="nomeSuplementos">Beta-alanina:</span>
        <span>  A beta-alanina é um aminoácido que ajuda a reduzir a fadiga muscular durante exercícios de alta intensidade, permitindo que você treine por mais tempo e com mais intensidade. Ela também pode aumentar a produção de carnosina muscular, que ajuda a reduzir a acidez e a fadiga muscular.</span><br></br>
    </div>,

},
{
    question: "Manter o Peso",
    answer: <div>
        <span className="nomeSuplementos">Ômega-3:</span>
        <span> O ômega-3 é um ácido graxo essencial encontrado em peixes gordurosos, sementes de linhaça, nozes e outras fontes alimentares. Ele tem muitos benefícios para a saúde, incluindo a redução da inflamação e a melhoria da saúde cardiovascular, o que pode ajudar na manutenção do peso.</span><br></br>
        <span className="nomeSuplementos">Vitamina D:</span>
        <span>A vitamina D é importante para a saúde óssea e também pode ajudar a manter um peso saudável. Estudos têm mostrado que a deficiência de vitamina D está associada ao ganho de peso e à obesidade. A exposição moderada ao sol e o consumo de alimentos ricos em vitamina D, como ovos, leite e peixes, são formas de obter essa vitamina. No entanto, em alguns casos, suplementos de vitamina D podem ser recomendados.</span><br></br>
        <span className="nomeSuplementos">Probióticos:</span>
        <span>Os probióticos são bactérias benéficas que ajudam a manter a saúde intestinal. Eles podem ajudar na digestão, reduzir a inflamação e melhorar a absorção de nutrientes, o que pode ajudar a manter um peso saudável.</span><br></br>
        <span className="nomeSuplementos">Fibra:</span>
        <span>A fibra é importante para a saúde digestiva e também pode ajudar na manutenção do peso. Ela ajuda a aumentar a saciedade, reduzir a ingestão de calorias e manter os níveis de açúcar no sangue estáveis. Alimentos ricos em fibras incluem frutas, verduras, legumes, grãos integrais e sementes.</span><br></br>
        
    </div>,

},
]