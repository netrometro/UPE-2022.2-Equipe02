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
    answer: "lore",

},
{
    question: "Ganho de Massa",
    answer: "ghgh",

},
{
    question: "Manter o Peso",
    answer: "ghgh",

},
]