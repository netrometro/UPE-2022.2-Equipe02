import { Link } from "react-router-dom";
import { Buttons } from '../../Atomic/Buttons/Buttons.js';
import { Headers } from "../../Organism/Headers/Headers.js";
import { Footers } from "../../Organism/Footer/Footer.js";


export function Home(){


    
    return(
        
        <div>
            <Headers/>
            <div>
                <Link to='/'>
                    <Buttons name="login"/>
                </Link>
            </div>
            <Footers/>
           
        </div>

    
    )
    
}